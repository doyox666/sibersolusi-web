import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center" style={{ width: "100%" }}>
      <div className="section-title">
        <h2>our engineer certified</h2>
        <p>
         
        </p>
      </div>

      {/* Gallery - Single row of images */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {props.data
          ? props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                style={{
                  padding: "10px", // Adjust padding between images
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gallery-item-content"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "150px", // Set height to 200px
                    width: "150px", // Set width to 200px for each image
                    backgroundImage: `url(${d.smallImage})`,
                    backgroundSize: "contain", // Ensure the image fits inside the container without being cropped
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", // Ensure the image doesn't repeat
                  }}
                >
                  {/* Optionally add a caption here */}
                  <div className="carousel-caption d-none d-md-block">
                    {/* Title removed */}
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};
