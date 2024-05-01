//[productId] is the dynamic routing
import { Metadata } from "next";
import { clothes } from "@/app/utils/const/clothes";

type Props = {
  params: {
    //params provided by the next
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `i-phone ${params.productId}`,
  };
};

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
  params: { productId: string };
}) {
  return (
    <h1>
      {" "}
      Details about the product {params.productId}
      {typeof(params.productId)}
      <ul>
        {clothes.map((cloth, index) =>
        
          index === parseInt(params.productId) ? (
            <li key={index}>
              <div>
                <p>Type: {cloth.type}</p>
                <p>Color: {cloth.color}</p>
                <p>Size: {cloth.size}</p>
                <p>Brand: {cloth.brand}</p>
                <p>Price: {cloth.price}</p>
                
              </div>
            </li>
          ) : null
        )}
      </ul>
    </h1>
  );
}
