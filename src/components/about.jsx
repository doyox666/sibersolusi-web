import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{ fontSize: "36px" }}>About Us</h2> {/* Memperbesar ukuran font judul */}
              <p style={{ fontSize: "20px" }}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <h3 style={{ fontSize: "24px" }}>Why Choose Us?</h3> {/* Memperbesar ukuran font subjudul */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} style={{ fontSize: "18px" }}>
                            {d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} style={{ fontSize: "20px" }}>
                            {d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
