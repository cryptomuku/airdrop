import { Link } from 'react-router-dom'; // Link इम्पोर्ट करें
import '../styles/AirdropSections.css';

function AirdropSections() {
  const featuredAirdrops = [
    {
      title: "Portal To Bitcoin",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Portal-To-Bitcoin-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+1"],
      blockchain: "Testnet",
      blockchainLogo: "",
      values: [
        { amount: "Lite Node Drop 🪂", approx: "5% Block Emissions 🤑" },
        { amount: "Atomic Swaps ⚡", approx: "Bitcoin Protocol ₿" },
      ],
      ribbon: "new",
      to: "/portal-to-bitcoin",
    },
    {
      title: "Somnia Network",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/10/Somnia-Network.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+1"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Weekly Rewards 💰", approx: "Complete Quests 🔥" },
        { amount: "EVM Layer 1 ⚡", approx: "1 million+ TPS 🚀" },
      ],
      ribbon: "",
      to: "/new-airdrops",
    },
    {
      title: "WORDT",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/WORDT-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram"],
      blockchain: "Solana",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$17,500 💰", approx: "$BNB & $SOL" },
        { amount: "Strategy Game", approx: "Empire Builder 🏰" },
      ],
      ribbon: "Featured",
      to: "/solana-airdrops",
    },
    {
      title: "ChainGPT",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/ChainGPT-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Trade"],
      blockchain: "Binance",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/binance-coin-logo-white.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Earn $GTAI 💎", approx: "$50K Prize Pool 🎁" },
        { amount: "AI infrastructure 🤖", approx: "Sophisticated Solutions" },
      ],
      ribbon: "Featured",
      to: "/new-airdrops",
    },
    {
      title: "ClickHub",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/ClickHub-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Other Requirements"],
      blockchain: "TON",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/06/TON-logo-white.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Free $CLICK 🪂", approx: "For every click 🎯" },
        { amount: "Social Marketing 🤝", approx: "Click & Earn Economy" },
      ],
      ribbon: "Featured",
      to: "/new-airdrops",
    },
    {
      title: "BabyPepe",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/BabyPepe-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram"],
      blockchain: "Binance",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/binance-coin-logo-white.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Season 2 🪂", approx: "Free $BABYPEPE" },
        { amount: "Bold Memecoin 🐸", approx: "Binance Smart Chain" },
      ],
      ribbon: "Featured",
      to: "/new-airdrops",
    },
    {
      title: "Autheo",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Autheo-Network-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Trade"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Earn $THEO 🪂", approx: "Testnet Phase 1 🔥" },
        { amount: "Layer-1 Blockchain", approx: "Web2-Web3 Interop." },
      ],
      ribbon: "Featured",
      to: "/new-airdrops",
    },
    {
      title: "Liftoff Monster",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Liftoff-Monster-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Youtube"],
      blockchain: "Solana",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Cosmic Airdrop", approx: "223,026,400 $LOX 🪂" },
        { amount: "AI Launchpad 🚀", approx: "Solana Blockchain" },
      ],
      ribbon: "Featured",
      to: "/solana-airdrops",
    },
    {
      title: "NodeFoundry AI",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/NodeFoundry-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "40M $NEF 🪂", approx: "∼$2 Million 💥" },
        { amount: "DePIN marketplace", approx: "Upwork for AI Agents 🤖" },
      ],
      ribbon: "Featured",
      to: "/defi-airdrops",
    },
    {
      title: "Cognify AI",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Cognify-AI-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Email", "+1"],
      blockchain: "Solana",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Free $CAIN 🎁", approx: "Presale Active ⏳" },
        { amount: "Automated Trading", approx: "AI-Driven Investments 🤖" },
      ],
      ribbon: "Featured",
      to: "/solana-airdrops",
    },
  ];

  const newAirdrops = [
    {
      title: "Unimon",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Unimon-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade", "Other Requirements"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Mint Eggs 🥚", approx: "40 ETH Prize Pool ✨" },
        { amount: "NFT battle game 🦄", approx: "Uniswap v4 Hook 🪝" },
      ],
      ribbon: "new",
      to: "/nft-airdrops",
    },
    {
      title: "KickDom",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/KickDom-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["App", "Other Requirements"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Rise to glory 🏆", approx: "$KDC & $KDG 🎁" },
        { amount: "Football Game ⚽", approx: "build your empire 🏟️" },
      ],
      ribbon: "Gaming",
      to: "/new-airdrops",
    },
    {
      title: "Wonder Wars",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Wonder-Wars-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["App", "Other Requirements"],
      blockchain: "Ronin",
      blockchainLogo: "",
      values: [
        { amount: "$WONDER 🪂", approx: "Plat to Airdrop" },
        { amount: "$WONDER", approx: "iOS and Android" },
      ],
      ribbon: "Gaming",
      to: "/new-airdrops",
    },
    {
      title: "Pirate Nation",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Pirate-Nation-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Email", "Trade", "Other Requirements"],
      blockchain: "Arbitrum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/artibutrum-logo-white.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "10M $PIRATE 🏴‍☠️", approx: "Battle your mateys" },
        { amount: "onchain RPG ⛵", approx: "Arbitrum Nova L2" },
      ],
      ribbon: "Gaming",
      to: "/new-airdrops",
    },
    {
      title: "3DOS™",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/3DOS-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "App", "+1"],
      blockchain: "Sui",
      blockchainLogo: "",
      values: [
        { amount: "Run AI Node 💻", approx: "Earn $3DOS tokens" },
        { amount: "D-Manufacturing 🏭", approx: "3D Printing Network" },
      ],
      ribbon: "",
      to: "/new-airdrops",
    },
    {
      title: "Parasail",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Parasail-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+1"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Season 0 🔥", approx: "Earn Sail Points" },
        { amount: "DePIN Layer 🌐", approx: "Trustless Protocol" },
      ],
      ribbon: "",
      to: "/new-airdrops",
    },
    {
      title: "SHRAPNEL",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Shrapnel-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["App", "Email", "Other Requirements"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Play & Earn 🎮", approx: "$SHRAP tokens 🚀" },
        { amount: "AAA Shooter Game 💥", approx: "China's Gov RWA Chain 🇨🇳" },
      ],
      ribbon: "Gaming",
      to: "/new-airdrops",
    },
    {
      title: "CESS Network",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/CESS-Network-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+1"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "DeShare Airdrop", approx: "$CESS rewards 🪂" },
        { amount: "Data Storage L1", approx: "DeSci + AI + DePIN" },
      ],
      ribbon: "",
      to: "/new-airdrops",
    },
    {
      title: "TLC Token",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/TLC-Token-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram"],
      blockchain: "Binance",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/binance-coin-logo-white.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Airdrop Live 🪂", approx: "Earn 500 $TLC 💰" },
        { amount: "Tough Memecoin🛞", approx: "Built on BNB Chain 🌋" },
      ],
      ribbon: "Meme Coin",
      to: "/new-airdrops",
    },
    {
      title: "Recall",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Recall-LOGO.png?w=1080&quality=50&ssl=1",
      socials: ["X", "Discord", "Trade"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Join the Surge", approx: "Collect Fragments" },
        { amount: "Onchain Intelligence", approx: "AI Agent Competitions" },
      ],
      ribbon: "",
      to: "/new-airdrops",
    },
  ];

  const defiAirdrops = [
    {
      title: "World Liberty",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/%E2%80%8BWorld-Liberty-Financial-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Email", "Other Requirements"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "$USD1 Airdrop", approx: "Test Proposal 🗳️" },
        { amount: "Compliant DeFi ⚖️", approx: "Treasury-Backed 🏦" },
      ],
      ribbon: "new",
      to: "/defi-airdrops",
    },
    {
      title: "Superform",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Superform-LOGO.png?w=1080&quality=50&ssl=1",
      socials: ["Trade", "Deposit"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Super Vaults 📈", approx: "Grow Your Portfolio 🐖" },
        { amount: "Onchain Wealth 💰", approx: "Yield Management 💼" },
      ],
      ribbon: "Audited",
      to: "/defi-airdrops",
    },
    {
      title: "GTE",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/GTE-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Testnet 🔥", approx: "Try the Beta 💻" },
        { amount: "Real-Time DEX ⚡", approx: "MegaETH Blockchain" },
      ],
      ribbon: "Testnet",
      to: "/defi-airdrops",
    },
    {
      title: "Virtuals Protocol",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Virtuals-Protocol-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade"],
      blockchain: "Base",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/05/base-blockchain-logo.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Virgen Points 🚀", approx: "Pre-TGE allocations" },
        { amount: "AI Agents Hub 🤖", approx: "Hyper Synchronicity" },
      ],
      ribbon: "AI Tech",
      to: "/defi-airdrops",
    },
    {
      title: "Incentiv",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Incentiv-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+2"],
      blockchain: "Testnet",
      blockchainLogo: "",
      values: [
        { amount: "Public Testnet 🔥", approx: "Earn $CENT Badges 🎖️" },
        { amount: "L-1 Blockchain", approx: "EVM Compatible" },
      ],
      ribbon: "Testnet",
      to: "/defi-airdrops",
    },
    {
      title: "Hyperbeat",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Hyperbeat-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade", "Deposit"],
      blockchain: "Other",
      blockchainLogo: "",
      values: [
        { amount: "Earn Hearts 🤍", approx: "Points Program ✨" },
        { amount: "HyperEVM Liquidity", approx: "Hyperliquid Protocol" },
      ],
      ribbon: "",
      to: "/defi-airdrops",
    },
    {
      title: "Opinion Labs",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Opinion-Labs-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["X", "Telegram", "Discord", "+1"],
      blockchain: "Testnet",
      blockchainLogo: "",
      values: [
        { amount: "O.LAB Beta 🔥", approx: "Stack Points ✨" },
        { amount: "Human Opinions", approx: "Prediction Markets" },
      ],
      ribbon: "Testnet",
      to: "/defi-airdrops",
    },
    {
      title: "MegaETH",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/MegaETH-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Discord", "Trade"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Testnet ⚡", approx: "MEGA Ether 🚀" },
        { amount: "1st Real-Time 💥", approx: "Settled on Ethereum" },
      ],
      ribbon: "Testnet",
      to: "/defi-airdrops",
    },
    {
      title: "Chronicle",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Chronicle-Protocol-LOGO.png?w=1080&quality=50&ssl=1",
      socials: ["Trade", "Deposit"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Farm $CLE 🪂", approx: "Airdrop Points ✨" },
        { amount: "MakerDAO's Oracle 🔮", approx: "Cheaper than Chainlink ⛽" },
      ],
      ribbon: "Verified",
      to: "/defi-airdrops",
    },
    {
      title: "Eclipse",
      logo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/03/Eclipse-LOGO.jpg?w=1080&quality=50&ssl=1",
      socials: ["Trade", "Deposit"],
      blockchain: "Ethereum",
      blockchainLogo: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png?w=1080&quality=50&ssl=1",
      values: [
        { amount: "Mainnet 🔥", approx: "Potential Airdrop" },
        { amount: "Solana on Ethereum", approx: "Ethereum's first SVM L2" },
      ],
      ribbon: "",
      to: "/defi-airdrops",
    },
  ];

  // सामान्य कार्ड रेंडर करने का फंक्शन
  const renderAirdropCards = (airdrops, showMoreLink) => (
    <div className="container-listing">
      <div className="scrollable-content">
        {airdrops.map((airdrop, index) => (
          <Link key={index} to={airdrop.to} className="card card-item"> {/* href की जगह to */}
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
                          {social === "Youtube" && <i className="fa-brands fa-youtube"></i>}
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
        <Link to={showMoreLink} className="btn btn-show-more"> {/* href की जगह to */}
          Show More {showMoreLink.includes("featured") ? "Featured" : showMoreLink.includes("new") ? "New" : "DeFi"} Airdrops
        </Link>
      </div>
    </div>
  );

  return (
    <div className="airdrop-sections">
      <div className="et_pb_row">
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>Featured Airdrops</h2>
            {renderAirdropCards(featuredAirdrops, "/featured-airdrops")} {/* Show More लिंक अपडेट */}
          </div>
        </div>
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>New Airdrops</h2>
            {renderAirdropCards(newAirdrops, "/new-airdrops")} {/* Show More लिंक अपडेट */}
          </div>
        </div>
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>DeFi Airdrops</h2>
            {renderAirdropCards(defiAirdrops, "/defi-airdrops")} {/* Show More लिंक अपडेट */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirdropSections;