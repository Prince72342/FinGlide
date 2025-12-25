import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="border-top mt-5"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="border-bottom social-icons">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>

            <div className="social-icons mt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-muted"
              >
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <p>Company</p>
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              About
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Products
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Pricing
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Referral programme
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Careers
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Zerodha.tech
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Press & media
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Contact
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Support portal
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Z-Connect blog
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              List of charges
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Open an account
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              Fund transfer
            </a>
            <br />
            <a
              className="text-muted"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1px",
              }}
              href=""
            >
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div
          className="d-flex justify-content-center flex-wrap text-center"
          style={{ fontSize: "13px" }}
        >
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            NSE
          </a>
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            BSE
          </a>
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            MCX
          </a>
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            Terms & conditions
          </a>
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            Policies & procedures
          </a>
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            Privacy policy
          </a>
          <a
            className="text-muted mx-4"
            style={{ textDecoration: "none" }}
            href=""
          >
            Disclosure
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
