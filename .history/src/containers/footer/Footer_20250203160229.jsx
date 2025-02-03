import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Links',
      links: ['Overons', 'Social Media', 'Counters', 'Contact'],
    },
    {
      title: 'Company',
      links: ['Terms & Conditions', 'Privacy Policy', 'Contact'],
    },
    {
      title: 'Get in touch',
      links: [
        'Crechterwoord K12 182 DK Alknjkcb',
        '085-132567',
        'info@payme.net',
      ],
    },
  ];

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others?</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="GPT-3 Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        {footerLinks.map((section, index) => (
          <div key={index} className="gpt3__footer-links_div">
            <h4>{section.title}</h4>
            {section.links.map((link, i) => (
              <p key={i}>{link}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; {new Date().getFullYear()} GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
