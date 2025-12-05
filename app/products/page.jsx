"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setPosts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h2
        style={{
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        PRODUCTS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "30px",
        }}
      >
        {posts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "30px",
              background: "#fff",
              textAlign: "center",
              boxShadow: "8px 8px 10px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                height: "160px",
                width: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            <h4>{p.title.slice(0, 20)}...</h4>

            <h5
              style={{ fontSize: "18px", fontWeight: "bold", color: "green" }}
            >
              ₹ {p.price}
            </h5>

            <p>{p.description.slice(0, 100)}.....</p>

            <button
              className="btn btn-danger"
              style={{
                padding: "8px 14px",
                width: "200px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              <Link
                href={`/products/${p.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                DEEP DETAILS
              </Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
