import AirdropCard from '../components/AirdropCard';
import '../styles/NFTAirdrops.css';

function NFTAirdrops() {
  return (
    <div className="nft-airdrops">
      <h1>NFT Airdrops</h1>
      <div className="airdrop-grid">
        <AirdropCard title="NFT Airdrop 1" description="Free NFT drop" />
        <AirdropCard title="NFT Airdrop 2" description="Exclusive collection" />
      </div>
    </div>
  );
}

export default NFTAirdrops; // डिफॉल्ट एक्सपोर्ट यहाँ जोड़ा गया