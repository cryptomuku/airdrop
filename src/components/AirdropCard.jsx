import '../styles/AirdropCard.css';

function AirdropCard({ title, description }) {
  return (
    <div className="airdrop-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default AirdropCard;