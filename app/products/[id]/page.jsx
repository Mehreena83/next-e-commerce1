"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{ marginTop: "100px" }}>Loading...</h2>;

  const addToCart = () => {
    localStorage.setItem("cartItem", JSON.stringify(product));
    router.push("/cart");
  };

  const goBack = () => {
    router.push("/products");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3 style={{ marginTop: "100px" }}>
        <IoArrowBackCircleSharp size={40} onClick={goBack} />
        PRODUCT DETAILS
      </h3>

      <div
        style={{
          padding: "50px",
          width: "900px",
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: "0px 0px 20px 0px grey",
          margin: "150px",
          marginTop: "80px",
          marginLeft: "300px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <img src={product.image} width={200} alt="" />
          <div>
            <h2>{product.title}</h2>
            <h5>
              <b>Price:</b> ₹{product.price}
            </h5>
            <h6>{product.category}</h6>
            <p>{product.description}</p>

            <p>
              ({product.rating.count} views) |
              <IoIosStar size={20} color="#ffdd00" /> {product.rating.rate}
            </p>

            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "yellow",
                width: "120px",
                height: "40px",
                margin: "5px",
              }}
            >
              BUY NOW!
            </button>

            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "orange",
                width: "120px",
                height: "40px",
              }}
              onClick={addToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
