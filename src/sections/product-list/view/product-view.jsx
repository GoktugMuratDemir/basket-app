import React from "react";

import { Skeleton } from "@mui/material";
import ProductList from "../list/product-list";
import { useRenderProductData } from "../../../context/product-context";

export default function ProductView() {

  const { resDataAllFilterProduct } = useRenderProductData();

  return (
    <>
      {resDataAllFilterProduct === null ? (
        <Skeleton />
      ) : resDataAllFilterProduct.length === 0 ? (
        <h1>Ürün Bulunamadı</h1>
      ) : resDataAllFilterProduct !== null &&
        resDataAllFilterProduct !== undefined ? (
        <ProductList />
      ) : (
        <h1>Beklenmeyen Bir hata oluştur</h1>
      )}
    </>
  );
}
