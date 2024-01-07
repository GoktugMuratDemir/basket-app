import React from "react";
import DetailView from "../sections/detailPage/detail-view";
import { useRenderProductData } from "../context/product-context";
import DetailPageLoading from "../components/skeleton-templates/detail-page-loading";
import SomethingWentWrong from "../components/error-templates/SometingWentWrong";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { isError, loading, resDataAllProduct } = useRenderProductData();
  const { id } = useParams();

  const isIdInData = resDataAllProduct?.some(item => item.id === id);

  return (
    <>
      {isError ? (
        <SomethingWentWrong />
      ) : loading ? (
        <DetailPageLoading />
      ) : isIdInData ? (
        <DetailView />
      ) : (
        <SomethingWentWrong />
      )}
    </>
  );
}
