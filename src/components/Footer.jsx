import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <figure className="footer__figure">
            <img src="././metalogo.png" alt="logo"></img>
      </figure>
      <div className="footer__firstColumn">
        <div className="footer__firstColumn__identity">
          <div>
            <span className="h4">Metalogic</span>
            <br />
            <span className="eyebrow">Software Private Limited</span>
          </div>
        </div>
        <div>
          <div className="eyebrow">Saptakhel, Lalitpur (Head office)</div>
          <div className="eyebrow">+ 977 9851353599</div>
          <div className="eyebrow">info@metalogic.com.np</div>
        </div>
      </div>
      {/* 2ND COLUMN */}
      <div className="footer__secondColumn">
        <div className="body">Company</div>
        <div className="eyebrow">Software Private Limited</div>
        <div className="eyebrow">Saptakhel, Lalitpur (Head office)</div>
        <div className="eyebrow">info@metalogic.com.np</div>
      </div>
      {/* 3RD COLUMN */}
      <div>
        <div className="body">Services</div>
        <div className="eyebrow">Software Private Limited</div>
        <div className="eyebrow">Saptakhel, Lalitpur (Head office)</div>
        <div className="eyebrow">+ 977 9851353599</div>
        <div className="eyebrow">info@metalogic.com.np</div>
      </div>
      {/* 4TH COLUMN */}
      <div>
        <div className="body">Join</div>
        <div className="eyebrow">Software Private Limited</div>
        <div className="eyebrow">Saptakhel, Lalitpur (Head office)</div>
        <div className="eyebrow">+ 977 9851353599</div>
        <div className="eyebrow">info@metalogic.com.np</div>
      </div>
      {/* 5th COLUMN */}
      <div>
        <div>Join us on Social Medias</div>
        <div>....</div>
        <div>....</div>
        <div>....</div>
        <div>....</div>
      </div>
    </footer>
  );
};

export default Footer;
