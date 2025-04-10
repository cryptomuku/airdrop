import { Link } from 'react-router-dom';


function AirdropSlider() {
  const airdropData = [
    {
      title: "China Trade Wars and Tariffs are Heating up!",
      subtitle: "NEWS",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/jpeg-optimizer_China-Tariffs.png?w=1080&quality=50&ssl=1",
      to: "/news/china-trade-wars",
    },
    {
      title: "Ethereum Price Crashes to 1500, Is it over?",
      subtitle: "TRADING",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_ethereum-price-crashes-1500.png?w=1080&quality=50&ssl=1",
      to: "/news/ethereum-price-crashes",
    },
    {
      title: "List of 8 New Testnet Airdrop to Farm and Earn",
      subtitle: "AIRDROPS",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_List-of-new-testnet-airdrops-2025.png?w=1080&quality=50&ssl=1",
      to: "/news/testnet-airdrops-2025",
    },
    {
      title: "BNB Chain Metrics Exploding, Watch these 6 Airdrops!",
      subtitle: "AIRDROPS",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_BNB-Airdrops-1.jpg?w=1080&quality=50&ssl=1",
      to: "/news/bnb-airdrops",
    },
    {
      title: "List of 10 AI airdrops to join before AI takes off",
      subtitle: "Airdrops",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_AI-Airdrops-2025.jpg?w=1080&quality=50&ssl=1",
      to: "/news/ai-airdrops-2025",
    },
    {
      title: "List of 7 Free DePin Airdrops to Passively Farm",
      subtitle: "AIRDROPS",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_Free-Depin-Airdrops.jpg?w=1080&quality=50&ssl=1",
      to: "/news/depin-airdrops",
    },
    {
      title: "A Guide on Shorting Crypto - Earn in the Dump!",
      subtitle: "GUIDE",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_How-to-Short-Bitcoin.jpg?w=1080&quality=50&ssl=1",
      to: "/news/shorting-crypto-guide",
    },
  ];

  return (
    <section className="airdrop-slider">
      <h2>Explore More Airdrops</h2>
      <div className="slider-container">
        <div className="slider">
          {airdropData.map((airdrop, index) => (
            <Link key={index} to={airdrop.to} className="slider-card">
              <div className="card-content">
                <img src={airdrop.image} alt={airdrop.title} className="card-image" />
                <div className="card-text">
                  <h3>{airdrop.title}</h3>
                  <h6>{airdrop.subtitle}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AirdropSlider;