import React from "react";
import Layout from "../components/Layout";
import { useSearch } from "../contaxt/search";

function Search() {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Seach Results - Swifto"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="card m-2 h-screen flex"
                style={{ width: "18rem" }}
                key={p._id}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">${p.price}</p>
                </div>
                <div className="mb-3 d-flex flex-wrap">
                  <button className="btn btn-primary mx-2">MORE DETAILS</button>
                  <button className="btn btn-secondary">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
