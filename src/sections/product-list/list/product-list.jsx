import React from "react";
import { useRenderProductData } from "../../../context/product-context";
import { Grid, Stack, Pagination } from "@mui/material";
import ProductItem from "./product-item";
import { useRenderPagination } from "../../../context/pagination-context";

export default function ProductList() {
  const { resDataAllFilterProduct } = useRenderProductData();
  const { currentPage, handleChangePage } = useRenderPagination();

  const itemsPerPage = 12;

  const pageCount = Math.ceil(resDataAllFilterProduct.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = resDataAllFilterProduct.slice(startIndex, endIndex);

  return (
    <Stack>
      <Grid container spacing={2}>
        {displayedProducts.map((item) => (
          <Grid item xs={12} md={3} key={item.id}>
            <ProductItem item={item} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
        size="large"
        siblingCount={1} // İsteğe bağlı: Sayfalar arasındaki kardeş sayısı
        boundaryCount={1} // İsteğe bağlı: İlk ve son sayfa arasındaki sayfaların sayısı
        shape="circular" // İsteğe bağlı: "rounded" veya "circular"
      />
    </Stack>
  );
}
