import React from "react";
import DetailView from "../sections/detailPage/detail-view";
import { useRenderProductData } from "../context/product-context";
import DetailPageLoading from "../components/skeleton-templates/detail-page-loading";

export default function DetailPage() {
  const { loading } = useRenderProductData();
  return <>{loading ? <DetailPageLoading /> : <DetailView />}</>;
}
