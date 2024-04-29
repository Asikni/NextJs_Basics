"use client"

import {useRouter} from "next/navigation"

export default function OrderProduct(){
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing order");
        router.push("/")   //to make user navigate to a particular page e.g order confirm to home page
    }
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}> Place Order </button>
        </>
    )
}