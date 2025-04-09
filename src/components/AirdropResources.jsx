import { Link } from 'react-router-dom'; // Link इम्पोर्ट करें
import '../styles/AirdropResources.css';

function AirdropResources() {
  // डेटा (इमेज के अनुसार)
  const nftAirdrops = [
    {
      title: "Shape",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Shape-Network-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn Medals 🏅", approx: "10% $SHAPE Supply 🪂" },
        { amount: "NFT Ecosystem", approx: "Ethereum Layer 2" },
      ],
      ribbon: "",
      to: "/nft-airdrops/shape-network",
    },
    {
      title: "Mintify",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Mintify-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Season 1 🪂", approx: "60M $MINT 💥" },
        { amount: "Onchain Markets", approx: "Multiple Blockchains" },
      ],
      ribbon: "",
      to: "/nft-airdrops/mintify",
    },
    {
      title: "Sugartown",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Sugartown-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Trade"],
      blockchain: "Abstract",
      blockchainLogo: "",
      values: [
        { amount: "200k NFT Airdrop 🔥", approx: "to over 130k wallets 💥" },
        { amount: "Web3 gaming hub", approx: "Pwr'd by D20 Labs 🎲" },
      ],
      ribbon: "",
      to: "/nft-airdrops/sugartown",
    },
    {
      title: "Zora",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Zora-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Email", "Trade"],
      blockchain: "Base",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/base-blockchain-logo.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$ZORA 🪂", approx: "Earn Sparks 🔥" },
        { amount: "Coin Your Content", approx: "Base Blockchain 🖼️" },
      ],
      ribbon: "",
      to: "/nft-airdrops/zora",
    },
    {
      title: "Doodles",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/Doodles-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Email", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$DOOD 🪂", approx: "68% Supply 🔥" },
        { amount: "Generative Art 🌈", approx: "Immersive Storytelling" },
      ],
      ribbon: "",
      to: "/nft-airdrops/doodles",
    },
    {
      title: "BEEPLE",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/Beeple-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Trade", "Other Requirements"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "HUMAN ONE", approx: "Chapter 5 👨‍🚀" },
        { amount: "Beeple's Legacy", approx: "Digital Masterpiece 🎨" },
      ],
      ribbon: "Verified",
      to: "/nft-airdrops/beeple-human-one-chapter-5",
    },
    {
      title: "TeleMafia",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/TeleMafia-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Telegram", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn Respect", approx: "Grow your Mob 🔥" },
        { amount: "Play & Earn ⚔️", approx: "By Sonzai Labs" },
      ],
      ribbon: "",
      to: "/nft-airdrops/telemafia",
    },
    {
      title: "Pindora",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/01/Pindora-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Discord"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$LUCIA 🪂", approx: "Sovereign role ⏳" },
        { amount: "Your private AI 🧠", approx: "personal tasks 24/7" },
      ],
      ribbon: "AI Tech",
      to: "/nft-airdrops/pindora",
    },
    {
      title: "OpenSea 2.0",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/01/OpenSea-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Email", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Private Beta 🔥", approx: "$SEA Airdrop 🪂" },
        { amount: "NFT Powerhouse ⛵️", approx: "New Horizons Ahead" },
      ],
      ribbon: "",
      to: "/nft-airdrops/opensea-2-0-beta",
    },
    {
      title: "REVENGE",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/01/REVENGE-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Email", "Trade"],
      blockchain: "Immutable",
      blockchainLogo: "",
      values: [
        { amount: "Early access 🔥", approx: "Play-To-Earn 💰" },
        { amount: "Co-op Shooter 🎯", approx: "by Everreach Labs 🕹️" },
      ],
      ribbon: "Gaming",
      to: "/nft-airdrops/revenge",
    },
  ];

  const earnCrypto = [
    {
      title: "Billions Network",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Billions-Network-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Email", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn Power ✨", approx: "Personhood 🥇" },
        { amount: "Reputation Layer", approx: "Human & AI Internet" },
      ],
      ribbon: "Verified",
      to: "/earn-crypto/billions-network",
    },
    {
      title: "InfiniFi",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/InfiniFi-LOGO.png?w=1080&quality=50&ssl=1",
      socials: ["X", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Click the Button", approx: "Get Rewarded 💰" },
        { amount: "Better than Banks", approx: "Backed by the best" },
      ],
      ribbon: "",
      to: "/earn-crypto/infinifi",
    },
    {
      title: "Wayfinder AI",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Wayfinder-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Trade", "Deposit"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$PROMPT 🪂", approx: "2% of Supply 🔥" },
        { amount: "auto. AI Agents 🤖", approx: "Machine intelligence" },
      ],
      ribbon: "AI Tech",
      to: "/earn-crypto/wayfinder-ai",
    },
    {
      title: "Voltix AI",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Voltix-AI-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "App"],
      blockchain: "Solana",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn $VOLT 💰", approx: "idle CPU power 💻" },
        { amount: "d-AI computing", approx: "Powered by Solana" },
      ],
      ribbon: "AI Tech",
      to: "/earn-crypto/voltix-ai",
    },
    {
      title: "Sapien",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Sapien-Game-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Email", "Other Requirements"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Train AI 🧠", approx: "Earn Crypto ✨" },
        { amount: "Crowdsourced Data", approx: "Decentralized Labeling" },
      ],
      ribbon: "AI Tech",
      to: "/earn-crypto/sapien",
    },
    {
      title: "Exabits",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Exabits-AI-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Email"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Earn $EXA 💰", approx: "Airdrop rewards" },
        { amount: "Cloud Computing 💻", approx: "AI Orchestration Layer" },
      ],
      ribbon: "AI Tech",
      to: "/earn-crypto/exabits-ai",
    },
    {
      title: "Ambo Invest",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Ambo-Invest-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: [],
      blockchain: "Solana",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$AMBO Airdrop 🪂", approx: "5,000,000 tokens 🔥" },
        { amount: "RWA Marketplace", approx: "Fractional Investment" },
      ],
      ribbon: "",
      to: "/earn-crypto/ambo-invest",
    },
    {
      title: "The Honey Jar",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/The-Honey-Jar-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade", "Other Requirements"],
      blockchain: "Berachain",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/berachain-logo-white.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn $YEET 🪂", approx: "Claim $HENLO ⏳" },
        { amount: "Cult Venture Studio", approx: "Berachain Gateway 🐻⛓" },
      ],
      ribbon: "",
      to: "/earn-crypto/the-honey-jar",
    },
    {
      title: "NodeGo AI",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/NodeGo-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+2"],
      blockchain: "Solana",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Mine $GO 🪂", approx: "DePIN Connect" },
        { amount: "D-computing 💻", approx: "by ProofFlow Labs" },
      ],
      ribbon: "AI Tech",
      to: "/earn-crypto/nodego-ai",
    },
    {
      title: "Firewall",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Firewall-LOGO.png?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Other Requirements"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn Sparks ✨", approx: "Random Lottery 🍀" },
        { amount: "Safe Sequencer", approx: "Blockspace for Rollups" },
      ],
      ribbon: "",
      to: "/earn-crypto/firewall-sparks",
    },
  ];

  const cryptoResources = [
    { title: "Crypto Casinos", to: "/crypto-resources/crypto-casinos", icon: "fa-solid fa-dice" },
    { title: "Blockchain Bridges", to: "/crypto-resources/blockchain-bridges", icon: "fa-solid fa-link" },
    { title: "Gaming Platforms", to: "/crypto-resources/gaming-platforms", icon: "fa-solid fa-gamepad" },
    { title: "Staking & Restaking", to: "/crypto-resources/staking-restaking", icon: "fa-solid fa-coins" },
    { title: "DEX Token Swapping", to: "/crypto-resources/dex-token-swapping", icon: "fa-solid fa-exchange-alt" },
    { title: "Crypto Wallets", to: "/crypto-resources/crypto-wallets", icon: "fa-solid fa-wallet" },
  ];

  // सामान्य कार्ड रेंडर करने का फंक्शन
  const renderAirdropCards = (airdrops, showMoreLink, category) => (
    <div className="container-listing">
      <div className="scrollable-content">
        {airdrops.map((airdrop, index) => (
          <Link key={index} to={airdrop.to} className="card card-item">
            {airdrop.ribbon && (
              <div className={`ribbon ${airdrop.ribbon.toLowerCase()}`}>
                {airdrop.ribbon}
              </div>
            )}
            <div className="card-header-container">
              <div className="column column1">
                <div className="logo">
                  <img src={airdrop.logo} alt={airdrop.title} />
                </div>
              </div>
              <div className="column column2">
                <div>
                  <h4 className="title">{airdrop.title}</h4>
                  <div className="card-socials">
                    {airdrop.socials.map((social, i) => (
                      <div key={i} className="social-item" title={social}>
                        <span className={`${social.toLowerCase()}-icon`}>
                          {social === "X" && <i className="fa-brands fa-x-twitter"></i>}
                          {social === "Telegram" && <i className="fa-brands fa-telegram"></i>}
                          {social === "Discord" && <i className="fa-brands fa-discord"></i>}
                          {social === "Email" && <i className="fa-solid fa-envelope"></i>}
                          {social === "Trade" && <span>⇆</span>}
                          {social === "Deposit" && <span>$</span>}
                          {social === "App" && <span>APP</span>}
                          {social === "Other Requirements" && <span>OTH</span>}
                          {social.startsWith("+") && <span>{social}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="column column3">
                <div className="blockchain-logo" title={airdrop.blockchain}>
                  {airdrop.blockchainLogo && <img src={airdrop.blockchainLogo} alt={airdrop.blockchain} />}
                </div>
              </div>
            </div>
            <div className="card-airdrop-footer">
              {airdrop.values.map((value, i) => (
                <div key={i} className="value">
                  <div className="amount">{value.amount}</div>
                  <div className="approx">{value.approx}</div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed-button">
        <Link to={showMoreLink} className="btn btn-show-more">
          Show More {category}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="airdrop-resources">
      <div className="et_pb_row">
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>NFT Airdrops</h2>
            {renderAirdropCards(nftAirdrops, "/nft-airdrops", "NFT Airdrops")}
          </div>
        </div>
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>Earn Crypto</h2>
            {renderAirdropCards(earnCrypto, "/earn-crypto", "Ways to Earn Crypto")}
          </div>
        </div>
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>Crypto Resources</h2>
          </div>
          {cryptoResources.map((resource, index) => (
            <div key={index} className="et_pb_button_module_wrapper">
              <Link to={resource.to} className="et_pb_button">
                <i className={resource.icon}></i> {resource.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AirdropResources;