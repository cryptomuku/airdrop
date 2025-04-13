import '../styles/TradeCrypto.css';
import bybitLogo from '../assets/bybit-logo.png';
import binanceLogo from '../assets/bybit-logo.png';
import kucoinLogo from '../assets/bybit-logo.png';
import photonSolLogo from '../assets/bybit-logo.png';
import mexcLogo from '../assets/bybit-logo.png';
import hyperliquidLogo from '../assets/bybit-logo.png';

function TradeCrypto() {
  const exchanges = [
    { name: 'BYBIT', logo: bybitLogo, link: 'https://airdropalert.com/affiliate/bybit' },
    { name: 'BINANCE', logo: binanceLogo, link: 'https://airdropalert.com/affiliate/binance' },
    { name: 'KUCOIN', logo: kucoinLogo, link: 'https://airdropalert.com/affiliate/kucoin' },
    { name: 'PHOTON SOL', logo: photonSolLogo, link: 'https://airdropalert.com/affiliate/photon' },
    { name: 'MEXC', logo: mexcLogo, link: 'https://airdropalert.com/affiliate/mexc' },
    { name: 'HYPERLIQUID', logo: hyperliquidLogo, link: 'https://airdropalert.com/affiliate/hyperliquid' },
  ];

  return (
    <div className="exchange-section">
      <div className="exchange-content">
        <h2>Trade your crypto</h2>
        <p>
          Support us by using our referral link on these exchanges. Claim their
          sign up bonus and trade your airdropped coins and other
          cryptocurrencies.
        </p>
        <a href="/exchanges" className="learn-button">
          Learn about exchanges
        </a>
      </div>
      <div className="exchange-logos">
        {exchanges.map((exchange, index) => (
          <a
            key={index}
            href={exchange.link}
            target="_blank"
            rel="noopener noreferrer"
            className="exchange-logo"
          >
            <img src={exchange.logo} alt={`${exchange.name} logo`} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TradeCrypto;