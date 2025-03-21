import React from 'react';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="content">
        <h1>Contact Us</h1>
        <div className="content-text">
          We are excited to hear from you and welcome your questions and
          feedback about the foundation and our website. Feel free reach out to
          us at: {/*<br />*/}
          <a
            className="text-link"
            href="mailto:team@nilitocf.org"
          >
            team@nilitocf.org
          </a>
          <p>
            Please include your name and preferred contact information, and
            we'll be happy to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}
