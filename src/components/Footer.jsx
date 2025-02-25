import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className="be-foot">
        <div className="footer-content">
          <h1>
            Let's Create Your <span className="color-text">Brand's Next Chapter</span>
          </h1>
          <p className="description">
          Fairnetro specializes in marketing and web development, delivering creative solutions that help brands grow and thrive in the digital world.
          </p>
          <button className="btn-primary">Contact Us</button>
          <button className="mt-5 font-medium vp btn-secondary w-48">Contact Us</button>
        </div>
      </div>

      <footer className="footer_component">
        <div className="container-large">
          <div className="footer_top-wrapper">
            <div className="footer_left-wrapper">
              <a href="/" className="footer_logo-link">
                <h3 className="color-text">FAIRNETRO</h3>
              </a>
              <p>Join our newsletter to stay up to date on features and releases.</p>
              <div className="footer_form-block">
                <form id="wf-form-Subscription-Form" name="wf-form-Subscription-Form">
                  <input
                    className="form_input"
                    maxLength="256"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    id="Subscription-Email"
                    required
                  />
                  <input type="submit" className="button" value="Subscribe" />
                </form>
                <div className="text-size-tiny mt-3">
                  By subscribing you agree to our <a href="/privacy-policy">Privacy Policy</a>.
                </div>
              </div>
            </div>

            <div className="footer_menu-wrapper">
              <div className="footer_link-list">
                <p className="text-weight-semibold">Pages</p>
                <a href="/" className="footer_link">Home</a>
                <a href="/blog" className="footer_link">Blog</a>
                <a href="/portfolio" className="footer_link">Portfolio</a>
                <a href="/contact" className="footer_link">Contact</a>
                <a href="/log-in" className="footer_link">Log In</a>
                <a href="/sign-up" className="footer_link">Sign Up</a>
              </div>
              <div className="footer_link-list">
                <p className="text-weight-semibold">Template Info</p>
                <a href="/utility-pages/style-guide" className="footer_link">Style Guide</a>
                <a href="/utility-pages/license" className="footer_link">License</a>
                <a href="/utility-pages/instructions" className="footer_link">Instructions</a>
                <a href="/utility-pages/changelog" className="footer_link">Change Log</a>
              </div>
              <div className="footer_link-list">
                <p className="text-weight-semibold">Follow us</p>
                <a href="http://facebook.com" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                  <Facebook size={16} />
                  Facebook
                </a>
                <a href="http://instagram.com" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} />
                  Instagram
                </a>
                <a href="http://x.com" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} />
                  X
                </a>
                <a href="http://linkedin.com" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
