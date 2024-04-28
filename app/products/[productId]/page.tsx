//[productId] is the dynamic routing
import { Metadata } from "next";

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



export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  return <h1> Details about the product {params.productId}</h1>;
}
