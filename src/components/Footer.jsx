import React from "react";
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to start your project?</h3>
            <h3>Let's collaborate &#8594;</h3>
          </div>
          <div>
            <NavLink to="/contact">
              <Button>Get started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          {/* 1-column */}
          <div className="footer-about">
            <h3>Art Direction</h3>
            <p>Crafting modern digital experiences, innovative art direction, and bespoke visual design solutions.</p>
          </div>

          {/* 2-column */}
          <div className="footer-subscribe">
            <h3>Studio Address</h3>
            <p><TbLocation title="Location" /> <strong>HQ:</strong> 104 Design Blvd, Suite 400, New York, NY 10018</p>
            <p style={{ marginTop: "0.6rem" }}><TbLocation title="Location" /> <strong>Alt:</strong> 42 Innovation Way, London, UK EC2A 4NE</p>
          </div>

          {/* 3-column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icons" title="GitHub Profile" />
                </a>
              </div>
              <div>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="icons" title="Linkedin Profile" />
                </a>
              </div>
              <div>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                  <FaDribbble className="icons" title="Dribbble Portfolio" />
                </a>
              </div>
              <div>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                  <FaBehance className="icons" title="Behance Showcase" />
                </a>
              </div>
            </div>
          </div>

          {/* 4-column */}
          <div className="footer-contact">
              <h3>Contact Details</h3>
              <p><strong>Primary:</strong> <a href="tel:+15550192834" className="contact-link">+1 (555) 019-2834</a></p>
              <p><strong>Alt Phone:</strong> <a href="tel:+15550195678" className="contact-link">+1 (555) 019-5678</a></p>
              <p><strong>Email:</strong> <a href="mailto:contact@artdirection.com" className="contact-link">contact@artdirection.com</a></p>
              <p><strong>Alt Email:</strong> <a href="mailto:support@artdirection.com" className="contact-link">support@artdirection.com</a></p>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
            <hr />
            <p className="btm-para">@{new Date().getFullYear()} Art Direction. All Rights Reserved.</p>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    border:1px solid #0A1435;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 140px 0px 3px 0px;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    .grid-four-column {
      grid-template-columns: 1fr 1.2fr 1fr 1.2fr;
      gap: 3rem;
    }
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 8px;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      margin-top: 0.5rem;
      font-size: 1.45rem;
    }
    .contact-link {
      color: ${({ theme }) => theme.colors.white};
      transition: color 0.2s ease;
      &:hover {
        color: ${({ theme }) => theme.colors.helper};
        text-decoration: underline;
      }
    }
    .footer-social--icons {
      display: flex;
      gap: 1.5rem;
      div {
        padding: 0.8rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
          transition: transform 0.2s;
          &:hover {
            transform: scale(1.15);
          }
        }
      }
    }
    .footer-bottom--section {
      padding-top: 6rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
      .btm-para{
        text-align:center;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer {
      .grid-four-column {
        grid-template-columns: 1fr;
      }
      .footer-bottom--section {
        padding-top: 3.2rem;
        h3{
          margin-bottom:3px;
        }
      }
    }
  }
`;
export default Footer;
