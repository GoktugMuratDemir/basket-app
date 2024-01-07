import React from "react";
import DetailView from "../sections/detailPage/detail-view";
import { useRenderProductData } from "../context/product-context";
import DetailPageLoading from "../components/skeleton-templates/detail-page-loading";
import SomethingWentWrong from "../components/error-templates/SometingWentWrong";

export default function DetailPage() {
  const { isError, loading } = useRenderProductData();
  return (
    <>
      {isError ? (
        <SomethingWentWrong />
      ) : loading ? (
        <DetailPageLoading />
      ) : (
        <DetailView />
      )}
    </>
  );
}
