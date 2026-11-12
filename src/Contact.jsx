import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Art Direction</h2>

      <div className="container contact-info-container">
        <div className="grid grid-four-column-contact">
          {/* Phone Details */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <FaPhoneAlt className="card-icon" />
            </div>
            <h3>Phone Numbers</h3>
            <p className="detail-item">
              <span className="badge">Primary:</span>
              <a href="tel:+15550192834">+1 (555) 019-2834</a>
            </p>
            <p className="detail-item">
              <span className="badge alt-badge">Alternative:</span>
              <a href="tel:+15550195678">+1 (555) 019-5678</a>
            </p>
          </div>

          {/* Email Details */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <FaEnvelope className="card-icon" />
            </div>
            <h3>Email Addresses</h3>
            <p className="detail-item">
              <span className="badge">Primary:</span>
              <a href="mailto:contact@artdirection.com">contact@artdirection.com</a>
            </p>
            <p className="detail-item">
              <span className="badge alt-badge">Alternative:</span>
              <a href="mailto:support@artdirection.com">support@artdirection.com</a>
            </p>
          </div>

          {/* Location Details */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="card-icon" />
            </div>
            <h3>Studio Locations</h3>
            <p className="detail-item">
              <span className="badge">Main Studio:</span>
              <span>104 Design Blvd, Suite 400, New York, NY</span>
            </p>
            <p className="detail-item">
              <span className="badge alt-badge">Alternative:</span>
              <span>42 Innovation Way, London, UK</span>
            </p>
          </div>

          {/* Hours Details */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <FaClock className="card-icon" />
            </div>
            <h3>Office Hours</h3>
            <p className="detail-item">
              <span className="badge">Mon - Fri:</span>
              <span>9:00 AM - 6:00 PM EST</span>
            </p>
            <p className="detail-item">
              <span className="badge alt-badge">Alt / Weekend:</span>
              <span>10:00 AM - 2:00 PM EST</span>
            </p>
          </div>
        </div>
      </div>

      <iframe
        title="Art Direction Studio Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0, marginTop: "4rem" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <div className="form-header">
            <h3>Send Us a Message</h3>
            <p>Have a question or proposal? Drop us a line below.</p>
          </div>
          <form
            action="https://formspree.io/f/mayzdlyk"
            method="POST"
            className="form_input"
          >
            <input
              type="text"
              name="uname"
              placeholder="Your Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Primary Email Address"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="alt_contact"
              placeholder="Alternative Email / Phone Number"
              autoComplete="off"
            />
            <textarea
              name="mesg"
              cols="30"
              rows="6"
              placeholder="Your Message / Project Details..."
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0 5rem 0;

  .contact-info-container {
    margin-bottom: 5rem;
  }

  .grid-four-column-contact {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
  }

  .contact-card {
    background: ${({ theme }) => theme.colors.bg};
    padding: 3rem 2rem;
    border-radius: 1.2rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(98, 84, 243, 0.15);
    }

    .icon-wrapper {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.btn};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;

      .card-icon {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.2rem;
      }
    }

    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom: 1.5rem;
    }

    .detail-item {
      font-size: 1.4rem;
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      align-items: center;
      color: ${({ theme }) => theme.colors.text};

      a {
        color: ${({ theme }) => theme.colors.btn};
        font-weight: 500;
        transition: color 0.2s;
        &:hover {
          text-decoration: underline;
        }
      }

      .badge {
        font-size: 1.1rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #6254f3;
        letter-spacing: 0.5px;
      }

      .alt-badge {
        color: #8490ff;
      }
    }
  }

  .container {
    margin-top: 5rem;
    text-align: center;

    .contact-form {
      max-width: 55rem;
      margin: auto;
      background: ${({ theme }) => theme.colors.bg};
      padding: 4rem 3rem;
      border-radius: 1.2rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};

      .form-header {
        margin-bottom: 3rem;
        h3 {
          font-size: 2.4rem;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.heading};
        }
        p {
          font-size: 1.45rem;
          margin-top: 0.5rem;
        }
      }

      .form_input {
        display: flex;
        flex-direction: column;
        gap: 2.2rem;

        input,
        textarea {
          width: 100%;
          max-width: 100%;
          border-radius: 0.6rem;
          text-transform: none;
          font-size: 1.5rem;
          transition: border-color 0.2s;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.btn};
          }
        }

        input[type="submit"] {
          margin: 1rem auto 0 auto;
          cursor: pointer;
          border-radius: 0.6rem;
          text-transform: uppercase;
          font-weight: 600;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.97);
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-four-column-contact {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-four-column-contact {
      grid-template-columns: 1fr;
    }
    .container .contact-form {
      padding: 3rem 1.5rem;
    }
  }
`;

export default Contact;
