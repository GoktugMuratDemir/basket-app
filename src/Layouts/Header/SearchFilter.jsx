import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useRenderProductData } from "../../context/product-context";
import { Avatar } from "@mui/material";

export default function SearchFilter() {
  const {
    resDataAllFilterProduct,
    setResDataAllFilterProduct,
    resDataAllProduct,
  } = useRenderProductData();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Check if the search term is empty
    if (value.trim() === "") {
      // If empty, set the original products back
      setResDataAllFilterProduct(resDataAllProduct);
    } else {
      // If not empty, filter products based on the search term (product name)
      const filteredProducts = resDataAllFilterProduct.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );

      // Update the filtered products in the context
      setResDataAllFilterProduct(filteredProducts);
    }
  };

  return (
    <div>
      <TextField
        // label="Search by Name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
        placeholder="Search"
        sx={{
          background:"#FFFFFF",

        }}
        InputProps={{

          startAdornment: (
            <React.Fragment>
              <Avatar
                variant="square"
                src="/assets/search.svg"
                alt=""
                sx={{ width: 24, height: 24, mx: 2 }}
              />
            </React.Fragment>
          ),
          // endAdornment: (
          //   <React.Fragment>
          //     {/* You can add CircularProgress here if needed */}
          //   </React.Fragment>
          // ),
        }}
      />
    </div>
  );
}
