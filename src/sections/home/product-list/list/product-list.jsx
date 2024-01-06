import React from "react";

import { Grid, Stack, Pagination } from "@mui/material";
import ProductItem from "./product-item";
import { useRenderPagination } from "../../../../context/pagination-context";
import { useRenderProductData } from "../../../../context/product-context";
import useResponsive from "../../../../hooks/useResponsive";

export default function ProductList() {
  const { resDataAllFilterProduct } = useRenderProductData();
  const { currentPage, handleChangePage } = useRenderPagination();

  const isMobile = useResponsive("down", "sm");

  console.log(resDataAllFilterProduct);

  const itemsPerPage = 12;

  const pageCount = Math.ceil(resDataAllFilterProduct.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = resDataAllFilterProduct.slice(startIndex, endIndex);

  return (
    <Stack>
      <Grid container spacing={2}>
        {displayedProducts.map((item) => (
          <Grid item xs={12} md={3} mb={4} key={item.id}>
            <ProductItem item={item} />
          </Grid>
        ))}
      </Grid>

      <Stack alignItems="center" my={4}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          size={isMobile ? "small" : "large"}
          // siblingCount={3} // İsteğe bağlı: Sayfalar arasındaki kardeş sayısı
          // boundaryCount={1} // İsteğe bağlı: İlk ve son sayfa arasındaki sayfaların sayısı
          shape="circular" // İsteğe bağlı: "rounded" veya "circular"
        />
      </Stack>
    </Stack>
  );
}
