import React from "react";
import ProductList from "../list/product-list";
import { useRenderProductData } from "../../../../context/product-context";
import ProductListLoading from "../../../../components/skeleton-templates/product-list-loading";
import ProductNotFound from "../../../../components/empty-templates/product-not-found";
import SomethingWentWrong from "../../../../components/error-templates/SometingWentWrong";

export default function ProductView() {
  const { isError, loading, resDataAllFilterProduct } = useRenderProductData();

  // console.log(resDataAllFilterProduct);

  return (
    <>
      {isError ? (
        <SomethingWentWrong />
      ) : loading ? (
        <ProductListLoading />
      ) : resDataAllFilterProduct && resDataAllFilterProduct?.length > 0 ? (
        <ProductList />
      ) : (
        <ProductNotFound />
      )}
    </>
  );
}
