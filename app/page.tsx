"use-client";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <main
        style={{
          maxWidth: "80vw",
          margin: "40px auto",
          padding: "40px",
          textAlign: "center",
          fontFamily: "Arial",
          border: "1px solid #ddd",
          borderRadius: "25px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          background: "#FFE7F1",
          marginTop: "150px",
        }}
      >
        <h1 style={{ marginBottom: "15px" }}>Welcome to PureHub 👋</h1>

        <p style={{ margin: "0 auto", maxWidth: "600px" }}>
          Step into a fresh shopping experience where comfort meets convenience.
          Discover a wide range of stylish and affordable products, handpicked
          to suit every mood and moment.
        </p>
      </main>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "500px", padding: "70px", borderRadius: "20px" }}
              src="banner1.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://images.pexels.com/photos/17293347/pexels-photo-17293347.jpeg?cs=srgb&dl=pexels-nguyendesigner-17293347.jpg&fm=jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Flat 40% Off Dresses</h5>
                <p className="card-text">
                  Grab the latest trending dresses at unbeatable prices. Style
                  meets savings—don’t miss out!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/08/13/646580cbd5182efd13badf6c51b3235d17235457542041090_original.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Beauty Deals You Can’t Miss!</h5>
                <p className="card-text">
                  Shop bestselling lipsticks, liners, and more everything under
                  ₹299.
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://favim.com/pd/p/orig/2018/09/12/white-tumblr-nikeairforce1-Favim.com-6306945.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Fresh Kicks, Fresh Deals</h5>
                <p className="card-text">
                  Soft, durable, and stylish shoes designed for all day comfort
                  now at deal prices.
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://i.pinimg.com/736x/8a/bf/eb/8abfebaacd4246b5cf7e64505c6867d3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Premium Watch Deals</h5>
                <p className="card-text">
                  Our most loved watches are now available at special prices.
                  Grab yours fast
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }} className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://i.pinimg.com/736x/0c/4a/9a/0c4a9abda4178359a662834004593324.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Luxury Perfume Offer</h5>
                <p className="card-text">
                  Top-rated fragrances that everyone loves now at limited-time
                  discounts!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://m.media-amazon.com/images/I/61W2KuQzrRL._AC_UF894,1000_QL80_.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Best Seller Bedsheets</h5>
                <p className="card-text">
                  Enjoy peaceful nights with ultra-soft bedsheets now available
                  at offer prices.
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Luxury Look Offers</h5>
                <p className="card-text">
                  Feel glamorous with our premium jewellery collection at pocket
                  friendly deals.
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEkhasvpOKDEfaWsrClZHr5lhJr3gI7zIBg&s"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Smart Home Deals</h5>
                <p className="card-text">
                  Upgrade your home with the latest appliances at amazing
                  discounts. Limited time offer!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "500px", padding: "70px", borderRadius: "20px" }}
              src="banner2.png"
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }} className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://cutesycurio.com/wp-content/uploads/2025/11/d5263d82-6ae7-4149-a383-7ecde2481925-300x300.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Top Bottle Picks</h5>
                <p className="card-text">
                  Budget friendly, stylish bottles for everyday use. Grab your
                  favorite now!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://thumbs.dreamstime.com/b/shopping-cart-overflowing-fresh-produce-vibrant-colors-healthy-choices-awaits-supermarket-generative-ai-394174116.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Healthy & Affordable</h5>
                <p className="card-text">
                  Nutritious and essential groceries at pocket friendly prices.
                  Don’t miss out!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://thumbs.dreamstime.com/b/samsung-tvs-branded-store-minsk-belarus-august-157121292.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Latest LED Deals</h5>
                <p className="card-text">
                  Popular TV models now available at a flat 20% discount.
                  Limited-time deal!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ height: "250px" }}
                src="https://5.imimg.com/data5/ECOM/Default/2024/5/420119091/DV/OZ/QI/129102397/polo-santa-barbara-1024-x-1024-881a7d637b-89c80101-b1de-4d31-8a1a-e272d88d2562-500x500.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Top Cover Picks</h5>
                <p className="card-text">
                  Trendy and affordable cases for every phone model grab your
                  favorite now!
                </p>
                <Link href="/products" className="btn btn-primary">
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
