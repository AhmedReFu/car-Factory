import React from "react";

import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/Hooks";
import AllCategories from "./AllCategories/AllCategories";
import ExtraSections from "./ExtraSection/ExtraSections";
import HeroSection from "./HeroSection/HeroSection";
import Slider from "./HeroSection/Slider";

const Home = () => {
  const allCars = useLoaderData();

  useTitle("Home");

  //                                                         const {allCarss = []} = useQuery({
  //                                                         queryKey:['allCars'],
  //                                                         queryFn:()=> fetch('http://localhost:5000/allCars')
  //                                                         .then(res => res.json())
  //                                                         })

  return (
    <div>
      <HeroSection></HeroSection>
      <AllCategories allCars={allCars}></AllCategories>
      <Slider></Slider>
      <ExtraSections></ExtraSections>
    </div>
  );
};

export default Home;
