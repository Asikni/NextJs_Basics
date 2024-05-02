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
 
      <ul>
        {clothes.map(
          (
            cloth,
            index //do with filter
          ) =>
            index+1  === parseInt(params.productId) ? (
              <div key={index}>
                <p>Type: {cloth.type}</p>
                <p>Color: {cloth.color}</p>
                <p>Size: {cloth.size}</p>
                <p>Brand: {cloth.brand}</p>
                <p>Price: {cloth.price}</p>
              </div>
            ) : null
        )}
      </ul>
    </h1>
  );
}


// export default function ProductDetails({
//   params,
// }: {
//   params: { productId: string };
// }) {
//   const dress: cloth = clothes.find((c) => c.index === params.productId)!;
//   return (
//     <h1>
//       {" "}
//       Details about the product {params.productId}
//       <p>Type: {dress.type}</p>
//       <p>Color: P{dress.color}</p>
//       <p>Size: {dress.size}</p>
//       <p>Brand: {dress.brand}</p>
//       <p>Price: {dress.price}</p>
//     </h1>
//   );
// }


//can be done like this also...if we have index/id in our data