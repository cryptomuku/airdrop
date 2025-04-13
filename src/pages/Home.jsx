import { Link } from 'react-router-dom';
// import AirdropCard from '../components/AirdropCard';
// import Newsletter from '../components/Newsletter';
import '../styles/Home.css';
import '../styles/AirdropSlider.css';
import AirdropSections from '../components/AirdropSections';
import AirdropResources from '../components/AirdropResources';
import AirdropSlider from '../components/AirdropSlider.jsx';
import TradeCrypto from '../components/TradeCrypto';
import NewsletterForm1 from '../components/NewsletterForm1.jsx';
import PopularArticles from '../components/PopularArticles.jsx';




function Home() {
  // स्लाइडर के लिए डेटा (10 कार्ड्स, इमेज के अनुसार टेक्स्ट और इमेज URL)
  const airdropData = [
    {
      title: "Complete tasks & Mint NFTs to Earn Points for $GTAI",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/ChainGPT-GT-Protocol-AI-Mastery-Airdrop.jpeg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Join the knight quest: $17,5k in $BNB or $SOL",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/07/Wordt-airdrop.jpg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Up to $30K Deposit Bonus for signing up Today!",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/1690090677127698-1.png?w=1080&quality=50&ssl=1",
    },
    {
      title: "Get rewarded for clicks & referrals with no limits on Ton",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/ClickHub-Airdrop.jpeg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Earn $THEO tokens with simple tasks on Testnet",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/jpeg-optimizer_Autheo-Airdrop-Alert.jpg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Start your Journey by Earning Free Crypto",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/07/Binance-Learn-and-Earn.jpeg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Memecoin on BNB with P2E - Claim yours today!",
      description: "",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/BabyPepe-Airdrop.jpeg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Airdrop 8",
      description: "Mint NFTs and earn points",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/ChainGPT-GT-Protocol-AI-Mastery-Airdrop.jpeg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Airdrop 9",
      description: "Participate in Testnet to earn $ABC",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/jpeg-optimizer_Autheo-Airdrop-Alert.jpg?w=1080&quality=50&ssl=1",
    },
    {
      title: "Airdrop 10",
      description: "Earn $DEF by completing tasks",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/07/Binance-Learn-and-Earn.jpeg?w=1080&quality=50&ssl=1",
    },
  ];

  return (
    <div className="home">
      {/* हीरो सेक्शन */}
      <div className="hero-section">
        <h1 className="typing-animation">
          <span className="highlight">Home</span> of Airdrop Farmers
        </h1>
        <div className="button-group">
          <Link to="/new-airdrops" className="btn primary-btn">Start browsing</Link>
          <Link to="/solana-airdrops" className="btn secondary-btn">Solana Airdrops</Link>
        </div>
      </div>
      {/* नया स्लाइडर सेक्शन */}
      <section className="airdrop-slider">
        <div className="slider-container">
          <div className="slider">
            {airdropData.map((airdrop, index) => (
              <div key={index} className="slider-card">
                <div className="card-content">
                  <img src={airdrop.image} alt={airdrop.title} className="card-image" />
                  <div className="card-text">
                    <h3>{airdrop.title}</h3>
                    {airdrop.description && <p>{airdrop.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AirdropSections />

      <AirdropResources />
      
      {/* मौजूदा Featured Airdrops सेक्शन */}
      <section className="featured-section">
      <AirdropSlider />
      </section>

      <PopularArticles />

      <TradeCrypto />

      {/* <Newsletter /> */}
      <NewsletterForm1 />
    </div>
    
  );
}

export default Home;