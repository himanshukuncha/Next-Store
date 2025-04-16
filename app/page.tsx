import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <LoadingContainer /> */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};

export default Home;
