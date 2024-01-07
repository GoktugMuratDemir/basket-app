// src/sections/home/filter-options/model-options/model-options-filter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { useRenderFiltered } from "../context/filter-context";
import ModelOptionsFilter from "../sections/home/filter-options/model/model-options";
import { useRenderProductData } from "../context/product-context";

jest.mock("../../../../context/product-context");
jest.mock("../../../../context/filter-context");

describe("ModelOptionsFilter Component Tests", () => {
  it("renders ModelOptionsFilter component correctly", () => {
    // Mock context and hook functions
    useRenderProductData.mockReturnValue({
      resDataAllProduct: [
        { model: "Model A" },
        { model: "Model B" },
        { model: "Model C" },
      ],
    });

    useRenderFiltered.mockReturnValue({
      selectedModels: [],
      setSelectedModels: jest.fn(),
    });

    render(<ModelOptionsFilter />);

    // Test whether the component renders without crashing
    expect(screen.getByText("Models")).toBeInTheDocument();
    expect(screen.getByLabelText("Search Models")).toBeInTheDocument();
    expect(screen.getByText("Model A")).toBeInTheDocument();
    expect(screen.getByText("Model B")).toBeInTheDocument();
    expect(screen.getByText("Model C")).toBeInTheDocument();
  });

  it("handles model selection correctly", () => {
    // Mock context and hook functions
    const setSelectedModelsMock = jest.fn();
    useRenderProductData.mockReturnValue({
      resDataAllProduct: [
        { model: "Model A" },
        { model: "Model B" },
        { model: "Model C" },
      ],
    });

    useRenderFiltered.mockReturnValue({
      selectedModels: [],
      setSelectedModels: setSelectedModelsMock,
    });

    render(<ModelOptionsFilter />);

    // Click on the checkbox for "Model A"
    fireEvent.click(screen.getByLabelText("Model A"));

    // Check whether the state and context functions are called correctly
    expect(setSelectedModelsMock).toHaveBeenCalledWith(["Model A"]);
  });

  it("handles model search correctly", () => {
    // Mock context and hook functions
    useRenderProductData.mockReturnValue({
      resDataAllProduct: [
        { model: "Model A" },
        { model: "Model B" },
        { model: "Model C" },
      ],
    });

    useRenderFiltered.mockReturnValue({
      selectedModels: [],
      setSelectedModels: jest.fn(),
    });

    render(<ModelOptionsFilter />);

    // Type "Model A" in the search input
    fireEvent.change(screen.getByLabelText("Search Models"), {
      target: { value: "Model A" },
    });

    // Check whether the filtered models are displayed correctly
    expect(screen.getByText("Model A")).toBeInTheDocument();
    expect(screen.queryByText("Model B")).toBeNull();
    expect(screen.queryByText("Model C")).toBeNull();
  });
});
