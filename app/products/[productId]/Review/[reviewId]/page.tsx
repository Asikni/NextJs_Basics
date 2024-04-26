import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }


  return (
    <div>
      Review {params.reviewId} of Product {params.productId}
    </div>
  );
}
