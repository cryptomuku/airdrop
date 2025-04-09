import AirdropCard from '../components/AirdropCard';
import '../styles/NewAirdrops.css';

function NewAirdrops() {
  return (
    <div className="new-airdrops">
      <h1>New Airdrops</h1>
      <div className="airdrop-grid">
        <AirdropCard title="New Airdrop 1" description="Details here" />
        <AirdropCard title="New Airdrop 2" description="More details" />
      </div>
    </div>
  );
}

export default NewAirdrops;