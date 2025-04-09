import AirdropCard from '../components/AirdropCard';
import '../styles/EarnCrypto.css';

function EarnCrypto() {
  return (
    <div className="earn-crypto">
      <h1>Earn Crypto</h1>
      <div className="airdrop-grid">
        <AirdropCard title="Earn Crypto 1" description="Earn rewards by staking" />
        <AirdropCard title="Earn Crypto 2" description="Participate in tasks" />
      </div>
    </div>
  );
}

export default EarnCrypto; // डिफॉल्ट एक्सपोर्ट यहाँ जोड़ा गया