import { useState, useEffect, useRef } from 'react';
import AirdropSections from '../components/AirdropSections';
import AirdropSlider from '../components/AirdropSlider.jsx';
import '../styles/AirdropSearch.css';

function AirdropSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [kyc, setKyc] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('new');
  const [selectedBlockchains, setSelectedBlockchains] = useState([]);
  const [sort, setSort] = useState('');
  const [isBlockchainOpen, setIsBlockchainOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [airdrops, setAirdrops] = useState([]);
  const [filteredAirdrops, setFilteredAirdrops] = useState([]);

  const blockchainRef = useRef(null);
  const debounceTimeout = useRef(null);
  const itemsPerPage = 10; // प्रति पेज 10 आइटम्स
  const totalPages = 165; // कुल पेजेस (आपके डेटा के अनुसार)

  const blockchainOptions = [
    'Abstract', 'Algorand', 'ApeChain', 'Arbitrum', 'Avalanche', 'Base', 'Berachain',
    'Binance', 'Bitcoin', 'Blast', 'Cardano', 'Celestia', 'Cosmos', 'Dogechain',
    'Ethereum', 'Filecoin', 'Hyperliquid', 'Immutable', 'Injective', 'IoTeX', 'Linea',
    'Manta Network', 'Near Protocol', 'Optimism', 'Other', 'Polkadot', 'Polygon',
    'Ronin', 'Scroll', 'Solana', 'Soneium', 'Sui', 'Testnet', 'TON', 'Tron', 'zkSync',
  ];

  // डेटा (आपके HTML से लिया गया)
  const initialAirdrops = [
    {
      title: 'TrueNorthCoin',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/03/True-North-Coin-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/truenorthcoin/',
      ribbon: 'new',
      socials: [
        { tooltip: 'X', iconClass: 'twitter-icon', icon: <i className="fa-brands fa-x-twitter"></i> },
      ],
      blockchain: 'Binance',
      blockchainLogo: 'https://airdropalert.com/wp-content/uploads/2024/05/binance-coin-logo-white.png',
      value1: { amount: '750M $TNC 🚀', approx: 'For 500 Wallets 🦫' },
      value2: { amount: 'Canadian Meme 🇨🇦', approx: 'for freedom causes 🍁' },
    },
    {
      title: 'FogoChain',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/FogoChain-LOGO.png',
      link: 'https://airdropalert.com/airdrops/fogochain-flames/',
      ribbon: '',
      socials: [
        { tooltip: 'X', iconClass: 'twitter-icon', icon: <i className="fa-brands fa-x-twitter"></i> },
        { tooltip: 'Discord', iconClass: 'discord-icon', icon: <i className="fa-brands fa-discord"></i> },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
      ],
      blockchain: 'Solana',
      blockchainLogo: 'https://airdropalert.com/wp-content/uploads/2024/04/solana-logo-white-1.png',
      value1: { amount: 'Earn Flames 🔥', approx: 'by contributing' },
      value2: { amount: 'next-gen Layer 1 ⚡', approx: 'Solana Virtual Machine' },
    },
    {
      title: 'Bybit Gold ✨',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/02/Bybit-LOGO.png',
      link: 'https://airdropalert.com/airdrops/bybit-gold/',
      ribbon: 'featured',
      socials: [
        { tooltip: 'Kyc Signup', iconClass: 'icon-text', icon: 'KYC' },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
        { tooltip: 'Deposit', iconClass: 'icon-text', icon: '$' },
      ],
      blockchain: 'Ethereum',
      blockchainLogo: 'https://airdropalert.com/wp-content/uploads/2024/04/ethereum-logo-white-small.png',
      value1: { amount: '$1,000 Voucher', approx: 'Position Airdrop 📈' },
      value2: { amount: 'Top tier exchange 🏦', approx: 'Crypto, Forex, CFDs 💱📊' },
    },
    {
      title: 'Minereum',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/Minereum-LOGO.png',
      link: 'https://airdropalert.com/airdrops/minereum-tech/',
      ribbon: '',
      socials: [
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
        { tooltip: 'Other Requirements', iconClass: 'icon-text', icon: 'OTH' },
      ],
      blockchain: 'Abstract',
      blockchainLogo: '',
      value1: { amount: 'Mine $METH ⛏️', approx: '5% Auto-Referrals 💸' },
      value2: { amount: 'Smart Mining ⚙️', approx: 'built on Abstract ✳️' },
    },
    {
      title: 'xU3O8',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/xU3O8-LOGO.png',
      link: 'https://airdropalert.com/airdrops/uranium-xu3o8/',
      ribbon: 'featured',
      socials: [
        { tooltip: 'X', iconClass: 'twitter-icon', icon: <i className="fa-brands fa-x-twitter"></i> },
        { tooltip: 'Telegram', iconClass: 'telegram-icon', icon: <i className="fa-brands fa-telegram"></i> },
        { tooltip: 'Reddit', iconClass: 'reddit-icon', icon: <i className="fa-brands fa-reddit"></i> },
        { tooltip: 'more...', iconClass: 'remaining', icon: '+1' },
      ],
      blockchain: 'Other',
      blockchainLogo: '',
      value1: { amount: 'Gamified Miner ⛏️', approx: 'Tap & collect Shards ✨' },
      value2: { amount: 'Uranium Market ☢️', approx: 'fractional ownership' },
    },
    {
      title: 'Runelings',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/Runelings-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/runelings/',
      ribbon: '',
      socials: [
        { tooltip: 'X', iconClass: 'twitter-icon', icon: <i className="fa-brands fa-x-twitter"></i> },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
      ],
      blockchain: 'Bitcoin',
      blockchainLogo: '',
      value1: { amount: '$1M+ Lottery 💥', approx: 'Mega Airdrop 🔥' },
      value2: { amount: 'Ordinals collection🏅', approx: 'Runestone Legacy ᛤ' },
    },
    {
      title: 'The Wizard of Abstract',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/The-Wizard-of-Abstract-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/the-wizard-of-abstract/',
      ribbon: '',
      socials: [
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
        { tooltip: 'Other Requirements', iconClass: 'icon-text', icon: 'OTH' },
      ],
      blockchain: 'Abstract',
      blockchainLogo: '',
      value1: { amount: 'Earn $WIZARD 🚀', approx: 'Quest Rewards ✨' },
      value2: { amount: 'Gamified DeFi 🧙‍♂️', approx: 'built on Abstract ✳️' },
    },
    {
      title: 'Minetendo',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/Minetendo-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/minetendo-money/',
      ribbon: '',
      socials: [
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
      ],
      blockchain: 'Abstract',
      blockchainLogo: '',
      value1: { amount: 'Mine $MINE 💸', approx: 'Dig Deep, Big Win' },
      value2: { amount: 'Virtual Mining ⛏️', approx: 'built on Abstract ✳️' },
    },
    {
      title: 'Crestal',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/Crestal-Network-LOGO.jpeg',
      link: 'https://airdropalert.com/airdrops/crestal-network-testnet/',
      ribbon: 'testnet',
      socials: [
        { tooltip: 'X', iconClass: 'twitter-icon', icon: <i className="fa-brands fa-x-twitter"></i> },
        { tooltip: 'Discord', iconClass: 'discord-icon', icon: <i className="fa-brands fa-discord"></i> },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
        { tooltip: 'more...', iconClass: 'remaining', icon: '+1' },
      ],
      blockchain: 'Other',
      blockchainLogo: '',
      value1: { amount: 'Earn Rocks 🪨', approx: '$NATION Airdrop 🎯' },
      value2: { amount: 'AI Agent Hub 🤖', approx: 'Modular Layer 1 🧱' },
    },
    {
      title: 'Huddle01',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/Huddle01-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/huddle01-testnet/',
      ribbon: 'testnet',
      socials: [
        { tooltip: 'X', iconClass: 'twitter-icon', icon: <i className="fa-brands fa-x-twitter"></i> },
        { tooltip: 'Discord', iconClass: 'discord-icon', icon: <i className="fa-brands fa-discord"></i> },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
      ],
      blockchain: 'Arbitrum',
      blockchainLogo: 'https://airdropalert.com/wp-content/uploads/2024/05/artibutrum-logo-white.png',
      value1: { amount: 'HUDL Testnet', approx: 'Join the Nexus 💫' },
      value2: { amount: 'Real-time DePIN 🎥', approx: 'powered by Arbitrum' },
    },
    {
      title: 'SuperVol',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/SuperVol-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/supervol-binary-options/',
      ribbon: '',
      socials: [
        { tooltip: 'Telegram', iconClass: 'telegram-icon', icon: <i className="fa-brands fa-telegram"></i> },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
        { tooltip: 'Deposit', iconClass: 'icon-text', icon: '$' },
        { tooltip: 'more...', iconClass: 'remaining', icon: '+1' },
      ],
      blockchain: 'Soneium',
      blockchainLogo: '',
      value1: { amount: 'Predict & Earn 📈', approx: 'Perks + Airdrops 🎁' },
      value2: { amount: 'Binary Options ✨', approx: 'Soneium L2 Mainnet' },
    },
    {
      title: 'BloFin',
      logo: 'https://airdropalert.com/wp-content/uploads/2025/04/BloFin-Exchange-LOGO.jpg',
      link: 'https://airdropalert.com/airdrops/blofin-exchange/',
      ribbon: 'featured',
      socials: [
        { tooltip: 'Email', iconClass: 'email-icon', icon: <i className="fa-solid fa-envelope"></i> },
        { tooltip: 'Trade', iconClass: 'icon-text', icon: '⇆' },
        { tooltip: 'Deposit', iconClass: 'icon-text', icon: '$' },
      ],
      blockchain: 'Other',
      blockchainLogo: '',
      value1: { amount: 'Claim $300 🎁', approx: 'Deposit Bonus 💸' },
      value2: { amount: 'Crypto Exchange', approx: 'Smart Strategies 📈' },
    },
  ];

  useEffect(() => {
    setAirdrops(initialAirdrops);
    setFilteredAirdrops(initialAirdrops);
  }, []);

  const handleBlockchainSelect = (blockchain) => {
    if (selectedBlockchains.includes(blockchain)) {
      setSelectedBlockchains(selectedBlockchains.filter((item) => item !== blockchain));
    } else {
      setSelectedBlockchains([...selectedBlockchains, blockchain]);
    }
  };

  const handleSearch = () => {
    let filtered = [...airdrops];

    if (kyc) {
      filtered = filtered.filter((airdrop) => airdrop.kyc === kyc);
    }
    if (status) {
      filtered = filtered.filter((airdrop) => airdrop.status === status);
    }
    if (category) {
      filtered = filtered.filter((airdrop) => airdrop.category === category || airdrop.ribbon === category);
    }
    if (selectedBlockchains.length > 0) {
      filtered = filtered.filter((airdrop) =>
        selectedBlockchains.some((blockchain) => airdrop.blockchain === blockchain)
      );
    }
    if (sort) {
      if (sort === 'newest') {
        filtered.sort((a, b) => new Date(b.to) - new Date(a.to));
      } else if (sort === 'ending') {
        filtered.sort((a, b) => new Date(a.to) - new Date(b.to));
      }
    }
    if (searchQuery.length >= 3) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter((airdrop) =>
        airdrop.title.toLowerCase().includes(searchLower)
      );
    }

    setFilteredAirdrops(filtered);
    setCurrentPage(1); // सर्च के बाद पेज को रीसेट करें
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (blockchainRef.current && !blockchainRef.current.contains(event.target)) {
        setIsBlockchainOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      setMessage('');
      clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        handleSearch();
      }, 1000);
    } else if (searchQuery.length > 0) {
      setMessage('Please type at least 3 characters to search.');
    } else {
      setMessage('');
      handleSearch();
    }
    return () => clearTimeout(debounceTimeout.current);
  }, [searchQuery, kyc, status, category, selectedBlockchains, sort]);

  // पेजिनेशन के लिए फ़िल्टर किए गए डेटा को स्लाइस करें
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAirdrops = filteredAirdrops.slice(indexOfFirstItem, indexOfLastItem);

  // पेजिनेशन हैंडलर
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // पेज बदलने पर स्क्रॉल टॉप पर ले जाएँ
  };

  // पेजिनेशन नंबर्स उत्पन्न करें
  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    
    <div className="airdrop-search-unique">
      <AirdropSlider />
      <div className="airdrop-search-input-unique">
        <div className="airdrop-input-group-unique search-unique">
          <h4 className="airdrop-title-unique">Find an airdrop</h4>
          <div className="airdrop-search-box-unique">
            <input
              type="text"
              id="airdrop-search-box"
              placeholder="Search airdrops"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="airdrop-message-unique">{message}</div>
          </div>
        </div>
      </div>

      <div className="airdrop-advanced-filters-unique">
        <button className="airdrop-btn-unique airdrop-project-info-unique">Advanced Filters</button>
        <div className="airdrop-filters-unique">
          <div className="airdrop-select-unique">
            <select
              id="filter-kyc"
              value={kyc}
              onChange={(e) => setKyc(e.target.value)}
              aria-label="KYC filter"
            >
              <option value="">KYC?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="airdrop-select-styled-unique">
              <span>{kyc || 'KYC?'}</span>
            </div>
          </div>

          <div className="airdrop-select-unique">
            <select
              id="filter-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
            <div className="airdrop-select-styled-unique">
              <span>{status || 'Status'}</span>
            </div>
          </div>

          <div className="airdrop-select-unique">
            <select
              id="filter-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categories</option>
              <option value="ai-tech">AI tech</option>
              <option value="defi">DeFi</option>
              <option value="earn-crypto">Earn Crypto</option>
              <option value="featured">Featured</option>
              <option value="gaming">Gaming</option>
              <option value="new">New</option>
              <option value="nft">NFT</option>
              <option value="potential-airdrops">Potential</option>
              <option value="sponsored">Sponsored</option>
              <option value="testnet">Testnet</option>
            </select>
            <div className="airdrop-select-styled-unique">
              <span>{category || 'Categories'}</span>
            </div>
          </div>

          <div className="airdrop-multiselect-dropdown-unique select-dim-unique" ref={blockchainRef}>
            <button
              className="airdrop-dropbtn-unique"
              onClick={() => setIsBlockchainOpen(!isBlockchainOpen)}
            >
              <div className="airdrop-selected-options-unique">
                {selectedBlockchains.map((blockchain, index) => (
                  <span key={index} className="airdrop-selected-option-unique">
                    {blockchain}
                  </span>
                ))}
              </div>
              <span className="airdrop-button-text-unique">{selectedBlockchains.length > 0 ? '' : 'Blockchain'}</span>
              <i className="fa-solid airdrop-arrow-unique fa-chevron-down"></i>
            </button>
            {isBlockchainOpen && (
              <div className="airdrop-dropdown-content-unique">
                {blockchainOptions.map((blockchain) => (
                  <div
                    key={blockchain}
                    className="airdrop-dropdown-item-unique"
                    data-value={blockchain.toLowerCase()}
                    onClick={() => handleBlockchainSelect(blockchain)}
                  >
                    {blockchain}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="airdrop-select-unique">
            <select
              id="filter-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="newest">Newest first</option>
              <option value="ending">Ending soon</option>
            </select>
            <div className="airdrop-select-styled-unique">
              <span>{sort || 'Sort by'}</span>
            </div>
          </div>

          <button className="airdrop-btn-unique airdrop-project-info-unique" id="airdrop-search-btn-unique" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="airdrop-search-container-unique">
        {currentAirdrops.map((airdrop, index) => (
          <a
            key={index}
            href={airdrop.link}
            className={`airdrop-row-unique airdrop-card-unique airdrop-card-item-unique airdrop-card-anchor-unique ${airdrop.ribbon ? `airdrop-active-label-unique airdrop-label-${airdrop.ribbon.toLowerCase().replace(/\s/g, '-')}-unique` : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {airdrop.ribbon && (
              <div className={`airdrop-ribbon-unique ${airdrop.ribbon.toLowerCase().replace(/\s/g, '-')}`}>
                {airdrop.ribbon}
              </div>
            )}
            <div className="airdrop-card-header-container-unique">
              <div className="airdrop-column-unique airdrop-column1-unique">
                <div className="airdrop-logo-unique">
                  <img src={airdrop.logo} alt={airdrop.title} />
                </div>
              </div>
              <div className="airdrop-column-unique airdrop-column2-unique">
                <div>
                  <div tooltip={airdrop.title}>
                    <h4 className="airdrop-title-unique">{airdrop.title}</h4>
                  </div>
                  <div className="airdrop-card-socials-unique">
                    {airdrop.socials.map((social, i) => (
                      <div key={i} tooltip={social.tooltip} className="airdrop-social-item-unique">
                        <span className={social.iconClass}>{social.icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="airdrop-column-unique airdrop-column3-unique">
                <div className="airdrop-blockchain-logo-unique" tooltip={airdrop.blockchain}>
                  {airdrop.blockchainLogo ? (
                    <img src={airdrop.blockchainLogo} alt={airdrop.blockchain} />
                  ) : (
                    <span>{airdrop.blockchain}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="airdrop-card-footer-unique">
              <div className="airdrop-value-unique">
                <div className="airdrop-amount-unique">{airdrop.value1.amount}</div>
                <div className="airdrop-approx-unique">{airdrop.value1.approx}</div>
              </div>
              <div className="airdrop-value-unique">
                <div className="airdrop-amount-unique">{airdrop.value2.amount}</div>
                <div className="airdrop-approx-unique">{airdrop.value2.approx}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
        <AirdropSections />
      <div className="airdrop-pagination-unique">
        <ul className="airdrop-page-numbers-unique">
          {currentPage > 1 && (
            <li>
              <button
                className="airdrop-prev-unique airdrop-page-numbers-unique"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                «
              </button>
            </li>
          )}
          {startPage > 1 && (
            <>
              <li>
                <button
                  className="airdrop-page-numbers-unique"
                  onClick={() => handlePageChange(1)}
                >
                  1
                </button>
              </li>
              {startPage > 2 && <li><span className="airdrop-page-numbers-unique airdrop-dots-unique">…</span></li>}
            </>
          )}
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={`airdrop-page-numbers-unique ${number === currentPage ? 'airdrop-current-unique' : ''}`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <li><span className="airdrop-page-numbers-unique airdrop-dots-unique">…</span></li>}
              <li>
                <button
                  className="airdrop-page-numbers-unique"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </button>
              </li>
            </>
          )}
          {currentPage < totalPages && (
            <li>
              <button
                className="airdrop-next-unique airdrop-page-numbers-unique"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                »
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AirdropSearch;