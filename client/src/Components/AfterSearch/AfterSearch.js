import React, { useState, useEffect } from "react";
import Header2 from "../../Pages/Header/Header";
import GoogleMap2 from "./GoogleMap2/GoogleMap2";
import SearchResults from "./SearchResults/SearchResults";
import Footer from "./CustomFooter/CustomFooter";

const AfterSearch = ({ search }) => {
  const [searchResultsList, setSearchResultsList] = useState([]);
  const lat = 31.0532818;
  const lng = 31.4113196;
  //for testing lng and lat
  useEffect(() => {
    //keda ma3ana el search beta3 el header
    //setSearchResultsList(data) // elly rag3a mn el api post
  }, []);
  return (
    <>
      <Header2 />
      <div className="row">
        {/* map inputs will be changed to be equal searchResultsList.coord */}
        <SearchResults searchResultsList={searchResultsList} />
        <div className="col-md-6 col-12">
        <GoogleMap2 mapInputs={{ lat, lng }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AfterSearch;
