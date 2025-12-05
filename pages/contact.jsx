import { Metadata } from "next";
import { LiaAddressBook } from "react-icons/lia";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";

// export const metadata: Metadata = {
//   title: "CONTACT PAGE",
// };

export default function Contact() {
  return (
    <div>
      <Header/>
      <div style={{ marginTop: "100px" }} className="container ">
        <div style={{ margin: "20px" }} className="row">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              height: "550px",
              margin: "20px",
              boxShadow: "2px 2px 10px #FFB6C1",
            }}
            className="col "
          >
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
              GET IN TOUCH WITH US NOW !
            </h3>
            <div className="container text-center">
              <div style={{ padding: "30px" }}>
                <div className="row">
                  <div
                    style={{
                      backgroundColor: "#FFE7F1",
                      borderRadius: "80px",
                      boxShadow: "2px 2px 6px 1px black",
                      height: "200px",
                      margin: "10px",
                    }}
                    className="col d-flex flex-column justify-content-center align-items-center"
                  >
                    <div>
                      <i className="bi bi-telephone fs-1"></i>
                      <h6>PHONE NUMBER</h6>
                      <h6>+91-9876543210</h6>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#FFE7F1",
                      borderRadius: "80px",
                      boxShadow: "1px 2px 6px 1px black",
                      height: "200px",
                      margin: "10px",
                    }}
                    className="col d-flex flex-column justify-content-center align-items-center"
                  >
                    <div>
                      <i className="bi bi-envelope fs-1"></i>
                      <h6>EMAIL</h6>
                      <h6>PureHub@gmail.com</h6>
                    </div>
                  </div>
                </div>
                <div className="container text-center">
                  <div className="row">
                    <div
                      style={{
                        backgroundColor: "#FFE7F1",
                        borderRadius: "80px",
                        boxShadow: "1px 2px 6px 1px black",
                        height: "200px",
                        margin: "10px",
                      }}
                      className="col d-flex flex-column justify-content-center align-items-center"
                    >
                      <div>
                        <i className="bi bi-geo-alt fs-1"></i>
                        <h6>LOCATION</h6>
                        <h6>KERALA</h6>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FFE7F1",
                        borderRadius: "80px",
                        boxShadow: "1px 2px 6px 1px black",
                        height: "200px",
                        margin: "10px",
                      }}
                      className="col d-flex flex-column justify-content-center align-items-center"
                    >
                      <div>
                        <i className="bi bi-clock fs-1"></i>
                        <h6>WORKING HOURS</h6>
                        <h6>9AM-9PM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: "20px",
              height: "550px",
              margin: "20px",
              boxShadow: "2px 2px 10px #FFB6C1",
            }}
            className="col"
          >
            <div className="container mt-5" style={{ maxWidth: "500px" }}>
              <h2 className="text-center mb-4">CONTACT US</h2>

              <form className="card p-5 shadow-sm">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <LiaAddressBook size={20} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FULL NAME"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <MdOutlineAlternateEmail size={20} />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="EMAIL"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <MdMessage size={21} />
                  </span>
                  <textarea
                    className="form-control"
                    placeholder="MESSAGE..."
                  ></textarea>
                </div>

                <button
                  style={{
                    backgroundColor: "pink",
                    border: "1px solid grey  ",
                  }}
                  className="btn w-100"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
