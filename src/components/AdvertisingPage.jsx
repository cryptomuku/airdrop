import '../styles/AdvertisingPage.css';
import { FaPlus } from 'react-icons/fa';
import ceekLogo from '../assets/ceek-logo.png';
import bybitLogo from '../assets/ceek-logo.png';
import bitgetLogo from '../assets/ceek-logo.png';
import cexLogo from '../assets/ceek-logo.png';
import nexoLogo from '../assets/ceek-logo.png';
import BoostCampaign from './BoostCampaign';

function AdvertisingPage() {
  const stats = [
    { value: '5K+', label: 'Airdrops listed' },
    { value: '1M', label: 'Monthly active sessions' },
    { value: '500K', label: 'Email subscribers' },
  ];

  const packages = [
    {
      name: 'Listing Package',
      price: 300,
      features: [
        'Airdrop listed within 48 hours',
        'Minimum 3 days on the homepage as New Airdrop',
        'Promoted on our X, Facebook & Telegram Channel',
        'Listing active until your airdrop is closed or full',
      ],
    },
    {
      name: 'Featured Package',
      price: 550,
      features: [
        'Priority listing within 24 hours',
        'Minimum 7 days on the homepage as Featured Airdrop',
        'Airdrop promo banner at top of the homepage',
        'Promoted on our X, Facebook & Telegram Channel',
        '2 Extra reminders across our social media channels over the next week',
        'Pinned on our social media for 1 day',
        'Email newsletter mention',
        'Listing active until your airdrop is closed or full',
      ],
    },
    {
      name: 'Boost Package',
      price: 1250,
      features: [
        'Includes everything from Featured Package (550)',
        'Dedicated blog deep-dive about your project',
        'Expert advice to boost campaign when needed',
        'More exposure in our community, including: extra social reminder, extra pinned day on socials, extra newsletter Mention, 7 Bonus days on the homepage',
      ],
    },
  ];

  const trustedPartners = [
    { name: 'Ceek', logo: ceekLogo },
    { name: 'Bybit', logo: bybitLogo },
    { name: 'Bitget', logo: bitgetLogo },
    { name: 'Cex', logo: cexLogo },
    { name: 'Nexo', logo: nexoLogo },
  ];



  const topCountries = [
    'United States',
    'India',
    'Germany',
    'Indonesia',
    'Pakistan',
    'United Kingdom',
    'Netherlands',
  ];

  const audienceDemographics = [
    { region: 'Europe', percentage: 30 },
    { region: 'America', percentage: 25 },
    { region: 'Asia', percentage: 35 },
    { region: 'Africa', percentage: 8 },
  ];

  const handlePurchase = (packageId, packageName, packagePrice) => {
    // Simulate AJAX request (replace with actual API call if needed)
    const response = { success: true }; // Mock response
    if (response.success) {
      window.location.href = 'https://airdropalert.com/form';
    } else {
      alert('Failed to save package information.');
    }
  };

  return (
    <main id="main-content" className="advertising-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="gradient-heading">
            Reach thousands of crypto enthusiasts and users with AirdropAlert
          </h2>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <h2>Packages</h2>
        <div className="packages-list">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <span>${pkg.price}</span>
              </div>
              <div className="package-description">
                <ul>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="package-footer">
                <button
                  className="purchase-btn"
                  onClick={() => handlePurchase(index + 1, pkg.name, pkg.price)}
                >
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <p>Trusted by</p>
        <div className="trusted-logos">
          {trustedPartners.map((partner, index) => (
            <div key={index} className="trusted-logo">
              <img src={partner.logo} alt={`${partner.name} logo`} />
            </div>
          ))}
        </div>
      </section>

      {/* Boost Campaign Section */}
      <section className="boost-campaign">
      <BoostCampaign />
    </section>

      {/* Audience Section */}
      <section className="audience-section">
        <h3 className="gradient-heading">Thousands of Airdrop Farmers</h3>
        <div className="audience-row">
          <div className="countries-column">
            <h3>Top countries</h3>
            {topCountries.map((country, index) => (
              <div key={index} className="country-item">
                <FaPlus className="country-icon" />
                <p><strong>{country}</strong></p>
              </div>
            ))}
          </div>
          <div className="demographics-column">
            {audienceDemographics.slice(0, 2).map((demo, index) => (
              <div key={index} className="demographic-item">
                <div className="circle-counter">
                  <div className="percent">
                    <span className="percent-value">{demo.percentage}</span>
                    <span className="percent-sign">%</span>
                  </div>
                  <div className="circle-bg"></div>
                  <div className="circle-fill" style={{ transform: `rotate(${(demo.percentage / 100) * 360}deg)` }}></div>
                </div>
                <h3>{demo.region}</h3>
              </div>
            ))}
          </div>
          <div className="demographics-column">
            {audienceDemographics.slice(2).map((demo, index) => (
              <div key={index} className="demographic-item">
                <div className="circle-counter">
                  <div className="percent">
                    <span className="percent-value">{demo.percentage}</span>
                    <span className="percent-sign">%</span>
                  </div>
                  <div className="circle-bg"></div>
                  <div className="circle-fill" style={{ transform: `rotate(${(demo.percentage / 100) * 360}deg)` }}></div>
                </div>
                <h3>{demo.region}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer-section">
        <p className="disclaimer-text">
          <em>
            Our platform conducts thorough vetting of airdrop projects to safeguard against scams, dedicating significant time and resources to this process. However, projects identified as fraudulent after listing will be removed without refunds, as resources spent on verification are non-recoverable. This reflects our dedication to a secure and reliable environment, acknowledging that complete scam prevention is not always possible.
          </em>
        </p>
      </section>
    </main>
  );
}

export default AdvertisingPage;