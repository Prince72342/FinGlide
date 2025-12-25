import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-3 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 d-flex flex-column justify-content-center align-items-center p-3">
          <img
            src="media/images/Prince.jpg"
            style={{
              height: "220px",
              width: "220px",
              borderRadius: "100%",
              objectFit: "cover",
            }}
            alt="Prince"
          />
          <h4 className="mt-3">Prince</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Prince bootstrapped and started his journey in tech to overcome the
            hurdles he faced while exploring trading, programming, and web
            development. Today, he is building projects that combine finance and
            technology, inspired by how platforms like Zerodha transformed the
            Indian broking industry.
          </p>
          <p>
            He is passionate about continuous learning, exploring modern
            frameworks, and understanding the deeper side of financial systems
            and software development.
          </p>
          <p>Playing cricket is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
