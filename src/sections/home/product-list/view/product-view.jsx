import React from "react";
import ProductList from "../list/product-list";
import { useRenderProductData } from "../../../../context/product-context";
import ProductListLoading from "../../../../components/skeleton-templates/product-list-loading";

export default function ProductView() {
  const { loading, resDataAllFilterProduct } = useRenderProductData();

  return (
    <>
      {loading ? (
        <ProductListLoading />
      ) : resDataAllFilterProduct && resDataAllFilterProduct?.length > 0 ? (
        <ProductList />
      ) : (
        <h1>Ürün Bulunamadı</h1>
      )}
    </>
  );
}
