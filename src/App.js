import React from "react";
import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./Data";

export default function App() {
  const Cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="flex flex-col  mt-64  max-w-[550px] mx-auto gap-4 rounded-md shadow-lg">
      <Navbar/>
      <Hero />
      <div className="flex gap-4 overflow-x-auto px-8 py-12">{Cards}</div>
    </div>
  );
}
