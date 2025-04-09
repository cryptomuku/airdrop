import AirdropCard from '../components/AirdropCard';
import '../styles/FeaturedAirdrops.css';

function FeaturedAirdrops() {
  return (
    <div className="featured-airdrops">
      <h1>Featured Airdrops</h1>
      <div className="airdrop-grid">
        <AirdropCard title="HyperLiquid" description="Trade and earn rewards" />
        <AirdropCard title="PhotonSol" description="Solana-based airdrop" />
      </div>
    </div>
  );
}

export default FeaturedAirdrops; // डिफॉल्ट एक्सपोर्ट यहाँ जोड़ा गया