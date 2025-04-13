import '../styles/PackagesSection.css';

function PackagesSection() {
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
    <section className="packages-section">
      <h2>Packages</h2>
      <div className="packages-list">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <div className="package-header">
              <h3>{pkg.name}</h3>
              <span className="package-price">${pkg.price}</span>
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
            
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PackagesSection;