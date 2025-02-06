import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p></p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  <img
                    src={d.icon}
                    alt={d.name}
                    className="service-icon"
                    style={{
                      width: "100px",
                      height: "100px",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  <div className="service-desc">
                    <h3
                      style={{
                        fontSize: "30px", // Atur ukuran font nama
                        fontWeight: "bold", // Atur ketebalan font nama
                        color: "#FFFFFF", // Atur warna font nama
                      }}
                    >
                      {d.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "18px", // Atur ukuran font deskripsi
                        color: "#FFFFFF", // Atur warna font deskripsi
                        lineHeight: "1.5", // Atur jarak antar baris
                      }}
                    >
                      {d.text}
                    </p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
