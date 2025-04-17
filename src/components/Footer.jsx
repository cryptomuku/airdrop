import '../styles/Footer.css';
import { FaTelegram, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import airdropLogo from '../assets/airdrop-alert-logo.png';

function Footer() {
  const socialLinks = [
    { name: 'Telegram', icon: <FaTelegram />, url: 'https://t.me/airdrop_alert_dot_com' },
    { name: 'X', icon: <FaTwitter />, url: 'https://twitter.com/Airdropalertcom' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/AirdropAlertcom/' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/airdropalert/' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/channel/UCo7PW5Kp_MPekw2bNHcRtXg' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/airdropalert/' },
  ];

  const companyLinks = [
    { name: 'About Us', url: '#' },
    { name: 'General Terms', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Disclaimer', url: '#' },
    { name: 'Contact', url: '#' },
  ];

  const usefulLinks = [
    { name: 'Browse Airdrops', url: '#' },
    { name: 'Search Projects', url: '#' },
    { name: 'Exchanges', url: '#' },
    { name: 'Stay Safe', url: '#' },
    { name: 'FAQs', url: '#' },
    { name: 'RSS Feed', url: '#' },
  ];

  const actionButtons = [
    { name: 'List Airdrop', url: '/AdvertisingPage' },
    { name: 'Advertise', url: '/advertising' },
    { name: 'Partnerships', url: 'mailto:morten@airdropalert.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-row">
        {/* Column 1: Logo, Description, Social Icons */}
        <div className="footer-column footer-column-1">
        <div className="logo">Airdrop Alert</div>
          <p className="footer-description">
            AirdropAlert.com is the crypto industry’s #1 rated library to find trusted airdrop campaigns, giveaways and more. Helping millions of people discover new projects & find new ways to earn cryptocurrency since 2017.
          </p>
          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" title={`Follow on ${link.name}`}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Company Links */}
        <div className="footer-column footer-column-2">
          <p className="footer-heading"><strong>Company</strong></p>
          {companyLinks.map((link, index) => (
            <p key={index}>
              <a href={link.url} className="footer-link">{link.name}</a>
            </p>
          ))}
        </div>

        {/* Column 3: Useful Links */}
        <div className="footer-column footer-column-3">
          <p className="footer-heading"><strong>Useful links</strong></p>
          {usefulLinks.map((link, index) => (
            <p key={index}>
              <a href={link.url} className="footer-link">{link.name}</a>
            </p>
          ))}
        </div>

        {/* Column 4: Action Buttons */}
        <div className="footer-column footer-column-4">
          {actionButtons.map((button, index) => (
            <a key={index} href={button.url} className="footer-button">
              {button.name}
            </a>
          ))}
        </div>
      </div>

      {/* Disclaimer and Copyright */}
      <div className="footer-row footer-disclaimer">
        <div className="divider"></div>
        <p className="disclaimer-text">
          Disclaimer: The information provided on this website is for informational purposes only and does not, under any circumstances, constitute investment advice, financial advice, trading advice, or any other form of advice. AirdropAlert explicitly disclaims any recommendation or endorsement for the purchase, sale, or retention of any cryptocurrency by any visitor or user of this website. Prior to making any investment decisions, it is imperative that individuals conduct thorough due diligence and seek consultation with a qualified financial advisor.
        </p>
        <p className="copyright">
          © AirdropAlert.com 2024 – All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;