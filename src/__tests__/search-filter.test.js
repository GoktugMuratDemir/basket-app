// src/__tests__/SearchFilter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchFilter from "../Layouts/Header/SearchFilter";


describe("SearchFilter Component Tests", () => {
  it("renders SearchFilter component correctly", () => {
    render(<SearchFilter />);

    // Test whether the component renders without crashing
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("handles search term change correctly", () => {
    render(<SearchFilter />);

    // Mock the set functions from context providers
    const setResDataAllFilterProductMock = jest.fn();
    const setSelectedModelsMock = jest.fn();
    const setSelectedBrandsMock = jest.fn();
    const setCurrentPageMock = jest.fn();

    // Replace the context provider functions with mock functions
    jest.mock("../../context/product-context", () => ({
      useRenderProductData: () => ({
        resDataAllFilterProduct: [],
        setResDataAllFilterProduct: setResDataAllFilterProductMock,
        resDataAllProduct: [],
      }),
    }));
    jest.mock("../../context/filter-context", () => ({
      useRenderFiltered: () => ({
        setSelectedBrands: setSelectedBrandsMock,
        setSelectedModels: setSelectedModelsMock,
      }),
    }));
    jest.mock("../../context/pagination-context", () => ({
      useRenderPagination: () => ({
        setCurrentPage: setCurrentPageMock,
      }),
    }));

    // Trigger a change event on the search input
    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "example" },
    });

    // Check whether the state and context functions are called correctly
    expect(setResDataAllFilterProductMock).toHaveBeenCalled();
    expect(setSelectedModelsMock).toHaveBeenCalled();
    expect(setSelectedBrandsMock).toHaveBeenCalled();
    expect(setCurrentPageMock).toHaveBeenCalled();
  });
});
