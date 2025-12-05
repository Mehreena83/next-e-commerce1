"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const path = usePathname();

  const navBtn = {
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#b4507aff",
    transition: "0.3s",
  };

  const activeBtn = {
    ...navBtn,
    backgroundColor: "#d884a9ff",
  };

  return (
    <nav
      style={{
        backgroundColor: "#F8C8DC",
        height: "80px",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: 1000,
      }}
      className="navbar navbar-expand-lg"
    >
      <div className="container-fluid">
        <span className="navbar-brand">[ PURE • HUB ]</span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="container-fluid">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search the Products..."
              />
              <span className="input-group-text">
                <IoSearch size={20} />
              </span>
            </div>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link
                href="/login"
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: path === "/login" ? "#007bff" : "#0056b3",
                  transition: "0.3s",
                }}
              >
                LOGIN
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link href="/" style={path === "/" ? activeBtn : navBtn}>
                HOME
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                href="/products"
                style={path === "/products" ? activeBtn : navBtn}
              >
                PRODUCTS
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                href="/about"
                style={path === "/about" ? activeBtn : navBtn}
              >
                ABOUT
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                href="/contact"
                style={path === "/contact" ? activeBtn : navBtn}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/cart" style={path === "/cart" ? activeBtn : navBtn}>
                CART
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
