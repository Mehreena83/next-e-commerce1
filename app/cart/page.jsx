"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TiTick } from "react-icons/ti";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { GiEmptyMetalBucket } from "react-icons/gi";

export default function Cart() {
  const router = useRouter();
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const item = localStorage.getItem("cartItem");
    if (item) {
      setCartItem(JSON.parse(item));
    }
  }, []);

  if (!cartItem) {
    return (
      <div>
        <h3 style={{ marginTop: "150px", textAlign: "center" }}>
          YOUR CART IS EMPTY <GiEmptyMetalBucket size={40} />
        </h3>
      </div>
    );
  }
  return (
    <div style={{ padding: "20px", textAlign: "center", marginTop: "100px" }}>
      <h2>
        <IoArrowBackCircleSharp
          size={40}
          onClick={() => router.push("/products")}
        />
        Added To Your Cart <TiTick size={40} color="green" />
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "50px",
          alignItems: "center",
          maxWidth: "800px",
          width: "100%",
          margin: "50px auto",
        }}
      >
        <img src={cartItem.image} width={200} alt="product" />

        <div>
          <h3>{cartItem.title}</h3>
          <h4 style={{ color: "green" }}>
            <b>Price:</b> ₹{cartItem.price}
          </h4>
          <h5>{cartItem.category}</h5>
          <p style={{ maxWidth: "400px" }}>{cartItem.description}</p>
        </div>
      </div>
    </div>
  );
}
