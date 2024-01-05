import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import _ from "lodash";
import { Paper, Stack, Typography, TextField } from "@mui/material";
import { useRenderPagination } from "../../../../context/pagination-context";
import { useRenderProductData } from "../../../../context/product-context";
import useResponsive from "../../../../hooks/useResponsive";

export default function BrandOptionsFilter() {
  const { resDataAllProduct, setResDataAllFilterProduct } =
    useRenderProductData();
  const { setCurrentPage,scrollToTop } = useRenderPagination();

  const isMobile = useResponsive("down", "sm");

  const allBrands = _.uniq(resDataAllProduct?.map((item) => item.brand));

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands?.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);

    if (updatedBrands.length === 0) {
      // Hiçbir seçenek seçilmediğinde, orijinal veriyi geri yükle
      setResDataAllFilterProduct(resDataAllProduct);
    } else {
      // Seçilen markalara göre filtreleme yap
      const filteredProducts = resDataAllProduct.filter((product) =>
        updatedBrands.includes(product.brand)
      );
      setResDataAllFilterProduct(filteredProducts);
    }
    // Sayfa numarasını sıfırla
    setCurrentPage(1);
    !isMobile && scrollToTop();
  };

  const filteredBrands = allBrands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Stack spacing={1}>
      <Typography variant="caption">Brands</Typography>

      <Paper elevation={3} variant="elevation" sx={{ p: 2 }}>
        <Stack spacing={1}>
          <TextField
            label="Search Brands"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Stack sx={{ height: 180, overflow: "auto" }}>
            <FormGroup>
              {filteredBrands.map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={selectedBrands?.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                  }
                  label={brand}
                />
              ))}
            </FormGroup>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
