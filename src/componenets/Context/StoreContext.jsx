import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = import.meta.env.VITE_BASE_URL;
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);
    const [all_food_list, setAllFoodList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState(""); // Global search state

    const addToCart = async (itemId) => {
        if (!itemId) return;

        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        setLoading(true);
        const response = await axios.get(url + "/api/food/top-items");
        setFoodList(response.data.data);
        setLoading(false);
    };

    const fetchAllFoodList = async () => {
        setLoading(true);
        const response = await axios.get(url + "/api/food/list");
        setAllFoodList(response.data.data);
        setLoading(false);
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    const filteredFoodList = all_food_list.filter((foodItem) => {
        const regex = new RegExp(searchKeyword, 'i');
        return (
            regex.test(foodItem.name) || 
            regex.test(foodItem.category) || 
            regex.test(foodItem.description)
        );
    });

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        fetchAllFoodList,
        url,
        token,
        all_food_list,
        setToken,
        loading,
        searchKeyword,
        setSearchKeyword, // Expose searchKeyword and setSearchKeyword
        filteredFoodList // Expose the filtered list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
