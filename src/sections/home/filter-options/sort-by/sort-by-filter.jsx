import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useRenderProductData } from "../../../../context/product-context";
import { useRenderPagination } from "../../../../context/pagination-context";
import useResponsive from "../../../../hooks/useResponsive";


export default function SortByFilter() {
  const { resDataAllFilterProduct, setResDataAllFilterProduct } =
    useRenderProductData();
    const { setCurrentPage,scrollToTop } = useRenderPagination();

    const isMobile = useResponsive("down", "sm");

  const [sortBy, setSortBy] = useState(radioGroup[0].value);

  useEffect(() => {
    // Use lodash to perform sorting and filtering based on the selected option
    let sortedData = [];
  
    switch (sortBy) {
      case "increasing date":
        sortedData = _.sortBy(resDataAllFilterProduct, "createdAt");
        break;
      case "decreasing date":
        sortedData = _.sortBy(resDataAllFilterProduct, "createdAt").reverse();
        break;
      case "decreasing price":
        sortedData = _.sortBy(resDataAllFilterProduct, ["price", "name"]).reverse();
        break;
      case "increasing price":
        sortedData = _.sortBy(resDataAllFilterProduct, ["price", "name"]);
        break;
      default:
        sortedData = resDataAllFilterProduct;
    }
  
    // Update the state with the sorted data
    setResDataAllFilterProduct(sortedData);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);
  

  const handleSortChange = (event) => {
    // Check if the sortBy value has actually changed before updating the state
    if (event.target.value !== sortBy) {
      setSortBy(event.target.value);
      setCurrentPage(1);
      !isMobile && scrollToTop();
    }
  };
  

  return (
    <FormControl>
      <Stack spacing={1}>
      <Typography variant="caption">Short By</Typography>
      <Paper elevation={3} variant="elevation" sx={{p:2}}>
        <RadioGroup
          onChange={handleSortChange}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={radioGroup[0].value}
          name="radio-buttons-group"
        >
          {radioGroup.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
        </RadioGroup>
      </Paper>
      </Stack>
    </FormControl>
  );
}

const radioGroup = [
  {
    id: 1,
    value: "increasing date",
    label: "Old to new",
  },
  {
    id: 2,
    value: "decreasing date",
    label: "New to old",
  },
  {
    id: 3,
    value: "decreasing price",
    label: "Price hight to low",
  },
  {
    id: 4,
    value: "increasing price",
    label: "Price low to High",
  },
];
