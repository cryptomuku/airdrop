import AirdropCard from '../components/AirdropCard';
import '../styles/SolanaAirdrops.css';

function SolanaAirdrops() {
  return (
    <div className="solana-airdrops">
      <h1>Solana Airdrops</h1>
      <div className="airdrop-grid">
        <AirdropCard title="Solana Airdrop 1" description="Details here" />
        <AirdropCard title="Solana Airdrop 2" description="More details" />
      </div>
    </div>
  );
}

export default SolanaAirdrops;