  import Header from "@/app/header/page";
  import Footer from "@/app/footer/page";
  export default function About() {
  return (
    <div>
      <Header/>
      <div style={{ marginTop: "100px" }} className="container text-center">
        <div className="row">
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "2px 2px 8px #FFB6C1 ",
            }}
            className="col"
          >
            <h3>About Our Company</h3>
            <p>
              We believe that great ideas have the power to transform lives,
              businesses, and communities. Since our establishment, we have been
              committed to delivering high-quality products and services that
              blend innovation, efficiency, and trust. What began as a small
              initiative driven by passion has now grown into a dynamic
              organization that serves customers across various sectors with
              dedication and purpose.
            </p>
          </div>
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "2px 2px 8px #FFB6C1 ",
            }}
            className="col"
          >
            <h3>Our Journey</h3>
            <p>
              Our story started with a simple but powerful vision to create
              meaningful solutions that make everyday life easier. Over the
              years, we have expanded our capabilities, strengthened our team,
              and embraced modern technologies to keep pace with the rapidly
              evolving world. Every milestone we achieved reflects our
              commitment to excellence, customer satisfaction, and continuous
              learning.
            </p>
          </div>
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "2px 2px 8px #FFB6C1 ",
            }}
            className="col"
          >
            <h3>Our Mission</h3>
            <p>
              Our mission is to design and deliver products and services that
              truly add value to our customers’ lives. We strive to combine
              creativity with advanced technology, ensuring that everything we
              offer is reliable, user-friendly, and built with integrity.
              Customer trust is at the heart of our work, and we consistently
              push ourselves to exceed expectations.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }} className="container text-center">
        <div className="row">
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "2px 2px 8px #FFB6C1 ",
            }}
            className="col"
          >
            <h3>Our Vision</h3>
            <p>
              We aim to become one of the most trusted and respected brands in
              the industry. Our long-term vision is to build a global presence
              by focusing on quality, transparency, and long-term relationships.
              We aspire to inspire others through our commitment to innovation
              and provide solutions that stand the test of time.
            </p>
          </div>
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "2px 2px 8px #FFB6C1  ",
            }}
            className="col"
          >
            <h3>Who We Are</h3>
            <p>
              We are a team of passionate professionals driven by curiosity and
              creativity. Our diverse backgrounds bring unique strengths,
              allowing us to approach challenges from multiple perspectives.
              Whether it’s design, development, support, or strategy every
              member of our team shares the same dedication to excellence.
            </p>
          </div>
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "2px 2px 8px #FFB6C1   ",
            }}
            className="col"
          >
            <h3>Why Choose Us</h3>
            <p>
              Choosing us means choosing a brand that genuinely cares. We go
              beyond delivering products we build long-lasting partnerships with
              our customers. Our commitment to quality, customer-first approach,
              and strong technical capabilities set us apart from others.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
