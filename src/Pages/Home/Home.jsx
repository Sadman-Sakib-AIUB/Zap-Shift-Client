import React, { Suspense } from "react";
import Banner from "./Banner";
import Brands from "./Brands";
import Reviews from "./Reviews";

const Home = () => {
  const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Suspense fallback='Loading...'>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </Suspense>
    </div>
  );
};

export default Home;
