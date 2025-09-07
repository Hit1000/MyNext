export default async function ReviewId({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId}
      for Product {productId}
    </div>
  );
}
