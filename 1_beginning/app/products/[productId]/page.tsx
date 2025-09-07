async function ProductId({params} : {
    params : Promise<{
        productId: string
    }>;
}) {
    const productId = (await params).productId;
    return <div>Product {productId}</div>;
}

export default ProductId;
