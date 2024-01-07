// src/sections/home/filter-options/brands/__tests__/brand-options-filter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BrandOptionsFilter from "../brand-options-filter"; // Dosya yolu projenize göre ayarlanmalı
import { useRenderProductData } from "../../../../context/product-context";
import { useRenderFiltered } from "../../../../context/filter-context";

jest.mock("../../../../context/product-context");
jest.mock("../../../../context/filter-context");

describe("BrandOptionsFilter Component Tests", () => {
  it("renders BrandOptionsFilter component correctly", () => {
    // Mock context and hook functions
    useRenderProductData.mockReturnValue({
      resDataAllProduct: [
        { brand: "Brand A" },
        { brand: "Brand B" },
        { brand: "Brand C" },
      ],
    });

    useRenderFiltered.mockReturnValue({
      selectedBrands: [],
      setSelectedBrands: jest.fn(),
    });

    render(<BrandOptionsFilter />);

    // Test whether the component renders without crashing
    expect(screen.getByText("Brands")).toBeInTheDocument();
    expect(screen.getByLabelText("Search Brands")).toBeInTheDocument();
    expect(screen.getByText("Brand A")).toBeInTheDocument();
    expect(screen.getByText("Brand B")).toBeInTheDocument();
    expect(screen.getByText("Brand C")).toBeInTheDocument();
  });

  it("handles brand selection correctly", () => {
    // Mock context and hook functions
    const setSelectedBrandsMock = jest.fn();
    useRenderProductData.mockReturnValue({
      resDataAllProduct: [
        { brand: "Brand A" },
        { brand: "Brand B" },
        { brand: "Brand C" },
      ],
    });

    useRenderFiltered.mockReturnValue({
      selectedBrands: [],
      setSelectedBrands: setSelectedBrandsMock,
    });

    render(<BrandOptionsFilter />);

    // Click on the checkbox for "Brand A"
    fireEvent.click(screen.getByLabelText("Brand A"));

    // Check whether the state and context functions are called correctly
    expect(setSelectedBrandsMock).toHaveBeenCalledWith(["Brand A"]);
  });

  it("handles brand search correctly", () => {
    // Mock context and hook functions
    useRenderProductData.mockReturnValue({
      resDataAllProduct: [
        { brand: "Brand A" },
        { brand: "Brand B" },
        { brand: "Brand C" },
      ],
    });

    useRenderFiltered.mockReturnValue({
      selectedBrands: [],
      setSelectedBrands: jest.fn(),
    });

    render(<BrandOptionsFilter />);

    // Type "Brand A" in the search input
    fireEvent.change(screen.getByLabelText("Search Brands"), {
      target: { value: "Brand A" },
    });

    // Check whether the filtered brands are displayed correctly
    expect(screen.getByText("Brand A")).toBeInTheDocument();
    expect(screen.queryByText("Brand B")).toBeNull();
    expect(screen.queryByText("Brand C")).toBeNull();
  });
});
