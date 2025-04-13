import '../styles/BoostCampaign.css';
import { Link } from 'react-router-dom';

function BoostCampaign() {
  const boostOptions = [
    { label: 'Most purchased', name: 'Social boost', description: 'Promote your listing an extra time on AirdropAlert’s social channels', price: 95 },
    { label: '', name: 'Pin to top', description: 'Stay on top of a category on homepage for 1 week (FCFS). The top listing gets the most clicks.', price: 995 },
    { label: 'Great value', name: 'Newsletter Spotlight', description: 'Get a featured spot in the weekly newsletter. Guaranteed clicks and traffic to your listing.', price: 169 },
    { label: 'Great SEO value', name: 'Dedicated blog', description: 'A deepdive into your project or other content. Take this chance to turn the airdrop hunters into community members or investors.', price: 425 },
    { label: '', name: 'Partner promo', description: 'Get your airdrop listing on 5+ other popular airdrop websites.', price: 1875 },
    { label: 'Great SEO value', name: 'Press release', description: 'Receive over 1M impressions and 100 backlinks with a custom press release', price: 3200 },
    { label: '', name: 'Telegram bot', description: 'Create an airdrop campaign with Telegram bot to automate signups and distribution.\nDelivery time ~7 days', price: 1400 },
    { label: 'Great value', name: 'Dedicated email', description: 'An email entirely dedicated to your project or airdrop campaign.', price: 1250 },
    { label: '', name: 'Social ads campaign', description: 'Let Airdrop Alert run your social media ads on Telegram, X and Facebook. Budget included.', price: 4200 },
  ];

  return (
    <section className="boost-campaign">
      <h2>Boost your airdrop campaign</h2>
      <p className="boost-description">
        Want to add extra promotion to your campaign? Here are several additional marketing and promotion options to maximize your airdrop listing and make the most out of your campaign.
      </p>
      <div className="boost-options">
        {boostOptions.map((option, index) => (
          <div key={index} className="boost-card">
            {option.label && <span className="boost-label">{option.label}</span>}
            <h4>{option.name}</h4>
            <p className="boost-description-text">{option.description}</p>
            <h4 className="boost-price">${option.price}</h4>
          </div>
        ))}
      </div>
      <div className="boost-buttons">
        <a href="mailto:morten@airdropalert.com" className="boost-button">
          Request add-ons
        </a>
        <p>
          Don’t have an active campaign but still want to drive traffic? Take a look at our advertising options.
        </p>
        <Link to="/advertising" className="boost-button">
          Advertise on AirdropAlert
        </Link>
      </div>
    </section>
  );
}

export default BoostCampaign;