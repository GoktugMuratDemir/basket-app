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

  // console.log(resDataAllFilterProduct);

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
          showFirstButton 
          showLastButton
          // variant="outlined"
          size={isMobile ? "small" : "large"}
          // boundaryCount={2}
          // siblingCount={0}
          shape="rounded"
        />
      </Stack>
    </Stack>
  );
}
