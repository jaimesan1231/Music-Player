import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import SongsList from "./SongsList";

function Body() {
  return (
    <div className="body">
      <Header />
      <Banner />
      <SongsList />
    </div>
  );
}

export default Body;
