import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'

const FoodSkeleton = () => {
   
  return (
    <div className="skeleton">
        <Skeleton width={200} height={150}   />
        <Skeleton width={90} height={25}   />
        <Skeleton width={90} height={15}   />
        <Skeleton width={30} height={20}   />


    </div>
  )
}

export default FoodSkeleton
