import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; layout?: string }>;
}) => {
  const resolvedSearchParams = await searchParams;
  console.log(resolvedSearchParams, "resolvedParams");

  const layout = resolvedSearchParams.layout || "grid";
  const search = resolvedSearchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
