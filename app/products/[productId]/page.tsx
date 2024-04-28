//[productId] is the dynamic routing
import { Metadata } from "next";

type Props ={
  params : {
    productId:string;
  }
}

export const generateMetadata = async ({
  params,
}:Props): Promise<Metadata> => {
  const title = `i-phone ${params.productId}`

  // const title = await new Promise((resolve)=>{   //why like this??
  //   setTimeout(() => {
  //     resolve(`i-phone ${params.productId}`)
  //   }, 100);
  // });
  return{
    title:`Product ${title}`
  }
}

export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  return <h1> Details about the product {params.productId}</h1>;
}
