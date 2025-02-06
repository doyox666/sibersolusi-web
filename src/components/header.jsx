import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1
                  style={{
                    fontSize: "60px", // Ukuran font untuk judul lebih besar
                    fontWeight: "bold", // Agar teks lebih tebal
                  }}
                >
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p
                  style={{
                    fontSize: "28px", // Ukuran font untuk paragraf lebih besar
                    lineHeight: "1.6", // Meningkatkan jarak antar baris untuk kenyamanan membaca
                  }}
                >
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
