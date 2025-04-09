"use client";

import { useState } from "react";
import {
  Instagram,
  Facebook,
  ShieldHalf,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [collapseState, setCollapseState] = useState({
    mattaMuse: false,
    quickLinks: false,
    followUs: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const toggleCollapse = (section) => {
    setCollapseState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Be the first to know</h2>
          <p>Sign up for updates from mattā muse.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
        <hr className="mobile-hr" />
        <div>
          <h2 className="footer-title">Contact Us</h2>
          <div className="contact-info">
            <p>+44 20 123 4567</p>
            <p>customercare@mattamuse.com</p>
          </div>
          <hr className="mobile-hr" />
          <h2 className="footer-title" style={{ marginTop: "15px" }}>
            Currency
          </h2>
          <div className="currency-selector">
            <span>
              <ShieldHalf
                color="red"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  marginTop: "5px",
                }}
              />
            </span>
            <span>- USD</span>
          </div>
          <p style={{ fontSize: "12px", color: "#fff", marginBottom: "2em" }}>
            Transaction will be in USD and all currency conversion is done at
            checkout.
          </p>
        </div>
      </div>
      <hr className="desktop-hr" />
      <hr className="mobile-hr" />

      {/* Desktop Layout */}
      <div
        className="footer-section-2 desktop-only"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "6rem",
        }}
      >
        <div>
          <h2 className="footer-title">mattā muse</h2>
          <div className="quick-links">
            <a href="#" className="quick-link">
              About Us
            </a>
            <a href="#" className="quick-link">
              Stories
            </a>
            <a href="#" className="quick-link">
              Artisans
            </a>
            <a href="#" className="quick-link">
              Boutiques
            </a>
            <a href="#" className="quick-link">
              Contact Us
            </a>
            <a href="#" className="quick-link">
              EU Compliance Docs
            </a>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Quick Links</h2>
          <div className="quick-links">
            <a href="#" className="quick-link">
              Orders & Shipping
            </a>
            <a href="#" className="quick-link">
              Join/Login as a Seller
            </a>
            <a href="#" className="quick-link">
              Payment & Pricing
            </a>
            <a href="#" className="quick-link">
              Return & Refunds
            </a>
            <a href="#" className="quick-link">
              FAQs
            </a>
            <a href="#" className="quick-link">
              Privacy Policy
            </a>
            <a href="#" className="quick-link">
              Terms & Conditions
            </a>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>

          <h2 className="footer-title">mattā muse ACCEPTS</h2>
          <div className="payment-methods">
            <div className="payment-method">Visa</div>
            <div className="payment-method">MC</div>
            <div className="payment-method">Amex</div>
            <div className="payment-method">PayPal</div>
            <div className="payment-method">GPay</div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Collapsible */}
      <div className="footer-section-2 mobile-only">
        <div className="collapsible-block">
          <h2
            className="footer-title collapsible-header"
            onClick={() => toggleCollapse("mattaMuse")}
          >
            mattā muse{" "}
            {collapseState.mattaMuse ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </h2>
          {collapseState.mattaMuse && (
            <div className="quick-links">
              <a href="#" className="quick-link">
                About Us
              </a>
              <a href="#" className="quick-link">
                Stories
              </a>
              <a href="#" className="quick-link">
                Artisans
              </a>
              <a href="#" className="quick-link">
                Boutiques
              </a>
              <a href="#" className="quick-link">
                Contact Us
              </a>
              <a href="#" className="quick-link">
                EU Compliance Docs
              </a>
            </div>
          )}
          <hr className="mobile-hr" />
        </div>

        <div className="collapsible-block">
          <h2
            className="footer-title collapsible-header"
            onClick={() => toggleCollapse("quickLinks")}
          >
            Quick Links{" "}
            {collapseState.quickLinks ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </h2>
          {collapseState.quickLinks && (
            <div className="quick-links">
              <a href="#" className="quick-link">
                Orders & Shipping
              </a>
              <a href="#" className="quick-link">
                Join/Login as a Seller
              </a>
              <a href="#" className="quick-link">
                Payment & Pricing
              </a>
              <a href="#" className="quick-link">
                Return & Refunds
              </a>
              <a href="#" className="quick-link">
                FAQs
              </a>
              <a href="#" className="quick-link">
                Privacy Policy
              </a>
              <a href="#" className="quick-link">
                Terms & Conditions
              </a>
            </div>
          )}
          <hr className="mobile-hr" />
        </div>

        <div className="collapsible-block">
          <h2
            className="footer-title collapsible-header"
            onClick={() => toggleCollapse("followUs")}
          >
            Follow Us{" "}
            {collapseState.followUs ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </h2>
          {collapseState.followUs && (
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
          )}
          <hr className="mobile-hr" />
        </div>

        <h2 className="footer-title">
          &nbsp;&nbsp;&nbsp;&nbsp;mattā muse ACCEPTS
        </h2>
        <div className="payment-methods">
          <div className="payment-method">Visa</div>
          <div className="payment-method">MC</div>
          <div className="payment-method">Amex</div>
          <div className="payment-method">PayPal</div>
          <div className="payment-method">GPay</div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2023 mattamuse. All rights reserved.
      </div>
    </footer>
  );
}
