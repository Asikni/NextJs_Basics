"use client"

import { notFound } from "next/navigation";

function getRandomInt(count:number){
  return (
    Math.floor(Math.random() * count)
  )
}

export default function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
const random = getRandomInt(2)
if (random===1){
  throw new Error("Error loading review")  //error and its msg
}

  return (
    <div>
      Review {params.reviewId} of Product {params.productId}
    </div>
  );
}
