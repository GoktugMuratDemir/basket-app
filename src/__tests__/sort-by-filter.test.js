// src/sections/home/filter-options/sort-by/sort-by-filter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRenderProductData } from "../context/product-context";
import { useRenderPagination } from "../context/pagination-context";
import useResponsive from "../hooks/useResponsive";
import SortByFilter from "../sections/home/filter-options/sort-by/sort-by-filter";


jest.mock("../context/product-context");
jest.mock("../context/pagination-context");
jest.mock("../hooks/useResponsive");

describe("SortByFilter Component Tests", () => {
  beforeEach(() => {
    // Mock context and hook functions
    useRenderProductData.mockReturnValue({
      resDataAllFilterProduct: [],
      setResDataAllFilterProduct: jest.fn(),
    });

    useRenderPagination.mockReturnValue({
      setCurrentPage: jest.fn(),
      scrollToTop: jest.fn(),
    });

    useResponsive.mockReturnValue(true); // Mocking mobile view
  });

  it("renders SortByFilter component correctly", () => {
    render(<SortByFilter />);

    // Test whether the component renders without crashing
    expect(screen.getByText("Short By")).toBeInTheDocument();
    expect(screen.getByText("Old to new")).toBeInTheDocument();
    expect(screen.getByText("New to old")).toBeInTheDocument();
    expect(screen.getByText("Price hight to low")).toBeInTheDocument();
    expect(screen.getByText("Price low to High")).toBeInTheDocument();
  });

  it("handles sort change correctly", () => {
    render(<SortByFilter />);

    // Trigger a change event on the radio button
    fireEvent.click(screen.getByLabelText("Old to new"));

    // Check whether the state and context functions are called correctly
    expect(useRenderProductData().setResDataAllFilterProduct).toHaveBeenCalled();
    expect(useRenderPagination().setCurrentPage).toHaveBeenCalled();
    expect(useRenderPagination().scrollToTop).toHaveBeenCalled();
  });
});
