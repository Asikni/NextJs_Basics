//[productId] is the dynamic routing
import { Metadata } from "next";
import { clothes } from "@/app/utils/const/clothes";


type Props ={
  params : {  //params provided by the next
    productId:string;
  }
}

export const generateMetadata = ({params}:Props): Metadata =>{
  return{
    title: `i-phone ${params.productId}`
}}

// export const generateMetadata = async ({
//   params,
// }:Props): Promise<Metadata> => {
 

//   const title = await new Promise((resolve)=>{   //why like this??
//     setTimeout(() => {
//       resolve(`i-phone ${params.productId}`)
//     }, 100);
//   });
//   return{
//     title:`Product ${title}`
//   }
// }


console.log(clothes)
export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  return <h1> Details about the product {params.productId}
  <p>{params.productId}</p>
 
  </h1>;
}
