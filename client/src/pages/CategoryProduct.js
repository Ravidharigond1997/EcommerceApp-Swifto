import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CategoryProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);
  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data.products);
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h3 className="text-center">{category.name}</h3>
      <h6 className="text-center">{products.length} results found</h6>
      <div className="row d-flex text-center flex justify-center">
        <div className="col-md-9 m-auto">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap m-2">
            {products?.map((p) => (
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
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => navigate(`product/${p.slug}`)}
                  >
                    MORE DETAILS
                  </button>
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

export default CategoryProduct;
