"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-2 mb-3">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Products</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className=" fw-bold">Contact</h5>
            <p>Email: support@PureHub.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Kerala, India</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Customer Service</h5>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Shipping Policy</p>
            <p>Return & Refund Policy</p>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="fw-bold">Our Services</h5>
            <p>Fast Delivery</p>
            <p>24/7 Customer Support</p>
            <p>Secure Payments</p>
            <p>Quality Guarantee</p>
          </div>
        </div>
        <hr className="border-light" />

        <div className="d-flex gap-3 justify-content-center ">
          <Link href="#" className="text-white fs-5">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#" className="text-white fs-5">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#" className="text-white fs-5">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link href="#" className="text-white fs-5">
            <i className="bi bi-youtube"></i>
          </Link>
        </div>
        <p className="text-center mb-0">
          © 2025 PureHub — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
