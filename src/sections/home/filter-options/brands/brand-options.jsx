import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import _ from "lodash";
import { Paper, Stack, Typography, TextField } from "@mui/material";
import { useRenderProductData } from "../../../../context/product-context";
import { useRenderFiltered } from "../../../../context/filter-context";

export default function BrandOptionsFilter() {
  const { resDataAllProduct } = useRenderProductData();

  const { selectedBrands, setSelectedBrands } = useRenderFiltered();

  const allBrands = _.uniq(resDataAllProduct?.map((item) => item.brand));

  const [searchTerm, setSearchTerm] = useState("");

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands?.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
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
            <FormGroup
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: 14,
                },
              }}
            >
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
