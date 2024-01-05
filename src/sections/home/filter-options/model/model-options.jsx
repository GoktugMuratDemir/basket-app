import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import _ from "lodash";
import { Paper, Stack, Typography, TextField } from "@mui/material";

import { useRenderProductData } from "../../../../context/product-context";

import { useRenderFiltered } from "../../../../context/filter-context";

export default function ModelOptionsFilter() {
  const { resDataAllProduct } = useRenderProductData();

  const { selectedModels, setSelectedModels } = useRenderFiltered();

  const allModels = _.uniq(resDataAllProduct?.map((item) => item.model));

  const [searchTerm, setSearchTerm] = useState("");

  const handleModelChange = (model) => {
    const updatedModels = selectedModels?.includes(model)
      ? selectedModels.filter((selectedModel) => selectedModel !== model)
      : [...selectedModels, model];

    setSelectedModels(updatedModels);
  };

  const filteredModels = allModels.filter((model) =>
    model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Stack spacing={1}>
      <Typography variant="caption">Models</Typography>

      <Paper elevation={3} variant="elevation" sx={{ p: 2 }}>
        <Stack spacing={1}>
          <TextField
            label="Search Models"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Stack sx={{ height: 180, overflow: "auto" }}>
            <FormGroup>
              {filteredModels.map((model) => (
                <FormControlLabel
                  key={model}
                  control={
                    <Checkbox
                      checked={selectedModels?.includes(model)}
                      onChange={() => handleModelChange(model)}
                    />
                  }
                  label={model}
                />
              ))}
            </FormGroup>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
