//[productId] is the dynamic routing

export default function ProductDetails({params} : {params:{productId: string;}}){
    return <h1> Details about the product{params.productId}</h1>
}