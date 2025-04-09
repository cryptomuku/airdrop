import AirdropCard from '../components/AirdropCard';
import '../styles/DeFiAirdrops.css';

function DeFiAirdrops() {
  return (
    <div className="defi-airdrops">
      <h1>DeFi Airdrops</h1>
      <div className="airdrop-grid">
        <AirdropCard title="DeFi Airdrop 1" description="Details here" />
        <AirdropCard title="DeFi Airdrop 2" description="More details" />
      </div>
    </div>
  );
}

export default DeFiAirdrops; 