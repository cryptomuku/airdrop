import { useState, useEffect } from 'react';
import '../styles/CoinTracker.css';

function CoinTracker() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  // डेटा (HTML से लिया गया)
  const initialCoins = [
    {
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png',
      link: 'https://airdropalert.com/currencies/bitcoin',
      price: 84692.59,
      marketCap: '1.68 T',
      volume24h: '19.78 B',
      supply: '19.85 M BTC',
      change24h: '0.99%',
      changeDirection: 'up',
      priceGraph: [79774, 80608, 81483, 81917, 83889, 83172, 83543, 84928, 85507, 84961, 84451, 83971, 84141, 85255, 84620, 84677, 84645, 84882, 85853, 85010, 83900, 83758, 83311, 84267, 84575, 84152, 84619, 84139],
    },
    {
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://coin-images.coingecko.com/coins/images/279/small/ethereum.png',
      link: 'https://airdropalert.com/currencies/ethereum',
      price: 1579.82,
      marketCap: '191.18 B',
      volume24h: '11.06 B',
      supply: '120.70 M ETH',
      change24h: '1.70%',
      changeDirection: 'up',
      priceGraph: [1526.84, 1544.46, 1548.79, 1554.09, 1571.75, 1553.04, 1592.5, 1654.84, 1650.14, 1617.3, 1614.18, 1584.12, 1607.3, 1638.94, 1636.5, 1665.14, 1628.76, 1626.91, 1642.1, 1613.31, 1598.39, 1596.58, 1562.67, 1583.8, 1588.64, 1588.97, 1600.46, 1572.63],
    },
    {
      rank: 3,
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://coin-images.coingecko.com/coins/images/325/small/Tether.png',
      link: 'https://airdropalert.com/currencies/tether',
      price: 1.00,
      marketCap: '144.81 B',
      volume24h: '36.64 B',
      supply: '144.80 B USDT',
      change24h: '0.00%',
      changeDirection: 'up',
      priceGraph: [0.999405, 0.999277, 0.999443, 0.999556, 0.99961, 0.99956, 0.999659, 0.999663, 0.999891, 0.999717, 0.999835, 0.999617, 0.999815, 0.9996, 0.999846, 0.999831, 0.999923, 0.999909, 0.999901, 0.999984, 1, 0.999896, 0.999899, 0.999925, 0.999999, 0.999977, 1, 0.999833],
    },
    {
      rank: 4,
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://coin-images.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
      link: 'https://airdropalert.com/currencies/xrp',
      price: 2.06,
      marketCap: '120.29 B',
      volume24h: '2.18 B',
      supply: '58.34 B XRP',
      change24h: '0.57%',
      changeDirection: 'down',
      priceGraph: [1.98, 2, 2, 2, 2.05, 2.02, 2.05, 2.16, 2.16, 2.14, 2.15, 2.15, 2.13, 2.16, 2.14, 2.15, 2.15, 2.13, 2.15, 2.14, 2.12, 2.09, 2.05, 2.1, 2.11, 2.07, 2.1, 2.07],
    },
    {
      rank: 5,
      name: 'BNB',
      symbol: 'BNB',
      logo: 'https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
      link: 'https://airdropalert.com/currencies/bnb',
      price: 589.53,
      marketCap: '86.05 B',
      volume24h: '492.89 M',
      supply: '145.89 M BNB',
      change24h: '1.31%',
      changeDirection: 'up',
      priceGraph: [575.81, 579.11, 579.42, 583.54, 588.06, 585.38, 589.4, 598.69, 598.56, 594.01, 593.13, 584.72, 584.06, 589.67, 590.43, 589.98, 586.28, 585.53, 588.68, 584.84, 581.77, 582.34, 577.63, 581.99, 585.16, 582.62, 583.02, 586.49],
    },
    // ... अन्य कॉइन्स (आपके HTML से लिया गया डेटा)
    // मैंने यहाँ 5 कॉइन्स जोड़े हैं। बाकी डेटा को इसी तरह जोड़ा जा सकता है।
  ];

  useEffect(() => {
    setCoins(initialCoins);
    setFilteredCoins(initialCoins);
  }, []);

  const handleSearch = () => {
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCoins(filtered);
    setCurrentPage(1); // सर्च के बाद पेज रीसेट करें
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  // पेजिनेशन के लिए डेटा स्लाइस करें
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = filteredCoins.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="cointracker-unique et_pb_row_unique">
      <div className="et_pb_column_unique">
        <div className="et_pb_module_unique">
          <div className="coinmc-table-unique">
            <div className="title-bar-unique">Cointracker</div>
            <div className="cdt-table-tools-unique">
              <div className="cmc-row-unique">
                <div className="cmc-lg-6-unique cmc-md-8-unique cmc-sm-8-unique cmc-xs-12-unique">
                  <div className="cmc-row-unique">
                    <div className="cmc-md-7-unique cmc-sm-7-unique cmc-xs-12-unique">
                      <div className="coinmc-input-group-unique">
                        <i className="coinmc-input-addon-unique fas fa-search"></i>
                        <input
                          type="text"
                          className="coinmc-control-unique coinmc-search-unique"
                          placeholder="Search.."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="cmc-md-3-unique cmc-sm-3-unique cmc-xs-7-unique">
                      <div className="coinmc-dropdown-unique">
                        <div className="coinmc-input-group-unique">
                          <i className="coinmc-input-addon-unique fas fa-angle-down"></i>
                          <select
                            className="coinmc-currency-unique"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                          >
                            <option value="USD">$ USD</option>
                            {/* अन्य करेंसी ऑप्शन्स यहाँ जोड़े जा सकते हैं */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="cmc-md-2-unique cmc-sm-2-unique cmc-xs-5-unique">
                      <div className="coinmc-control-unique coinmc-button-unique coinmc-wlist-btn-unique">
                        <div className="far fa-star"></div> 0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cmc-lg-6-unique cmc-md-4-unique cmc-sm-4-unique cmc-xs-12-unique coinmc-pagination-unique">
                  <div className="cmc-row-unique">
                    {currentPage > 1 && (
                      <div className="cmc-lg-4-unique cmc-md-unique cmc-sm-unique cmc-xs-unique coinmc-previous-btn-unique">
                        <button className="coinmc-control-unique coinmc-button-unique" onClick={handlePreviousPage}>
                          <i className="fas fa-long-arrow-alt-left"></i> Previous 100
                        </button>
                      </div>
                    )}
                    {currentPage < totalPages && (
                      <div className="cmc-lg-4-unique cmc-md-unique cmc-sm-unique cmc-xs-unique coinmc-next-btn-unique">
                        <button className="coinmc-control-unique coinmc-button-unique" onClick={handleNextPage}>
                          Next 100 <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="datatable-scroll-unique">
              <table className="coinmc-datatable-unique">
                <thead>
                  <tr>
                    <th className="col-rank-unique text-left-unique">#</th>
                    <th className="col-name-unique text-left-unique">Coin</th>
                    <th className="col-price_usd-unique">Price</th>
                    <th className="col-market_cap_usd-unique">Marketcap</th>
                    <th className="col-volume_usd_24h-unique">Volume (24h)</th>
                    <th className="col-available_supply-unique">Supply</th>
                    <th className="col-percent_change_24h-unique">Change (24H)</th>
                    <th className="col-weekly-unique">Price Graph (7D)</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCoins.map((coin) => (
                    <tr key={coin.rank}>
                      <td className="text-left-unique">{coin.rank}</td>
                      <td className="text-left-unique">
                        <div className="coin-unique">
                          <div className="coin-image-unique">
                            <img src={coin.logo} height="35" alt={coin.name} />
                          </div>
                          <a href={coin.link} className="coin-title-unique">
                            <div className="coin-name-unique">{coin.name}</div>
                            <div className="coin-symbol-unique">{coin.symbol}</div>
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="fiat-symbol-unique">$</span> {coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td>
                        <span className="fiat-symbol-unique">$</span> {coin.marketCap}
                      </td>
                      <td>
                        <span className="fiat-symbol-unique">$</span> {coin.volume24h}
                      </td>
                      <td>{coin.supply}</td>
                      <td>
                        <span className={coin.changeDirection}>{coin.change24h}</span>
                      </td>
                      <td className="chart-wrapper-unique">
                        {/* यहाँ चार्ट को रेंडर करने के लिए Chart.js या किसी अन्य लाइब्रेरी का उपयोग किया जा सकता है */}
                        <div className="chart-placeholder-unique">Chart Placeholder</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="coinmc-dt-footer-unique">
              <div className="cmc-row-unique">
                <div className="cmc-lg-6-unique cmc-md-8-unique cmc-sm-12-unique cmc-xs-12-unique">
                  <div className="cmc-row-unique">
                    <div className="cmc-md-unique">
                      <span className="dataTables_info-unique">
                        Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, totalItems)} of {totalItems} coins
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cmc-lg-6-unique cmc-md-4-unique cmc-sm-12-unique cmc-xs-12-unique coinmc-pagination-unique">
                  <div className="cmc-row-unique">
                    {currentPage > 1 && (
                      <div className="cmc-lg-4-unique cmc-md-unique cmc-sm-unique coinmc-previous-btn-unique">
                        <button className="coinmc-control-unique coinmc-button-unique" onClick={handlePreviousPage}>
                          <i className="fas fa-long-arrow-alt-left"></i> Previous 100
                        </button>
                      </div>
                    )}
                    {currentPage < totalPages && (
                      <div className="cmc-lg-4-unique cmc-md-unique cmc-sm-unique coinmc-next-btn-unique">
                        <button className="coinmc-control-unique coinmc-button-unique" onClick={handleNextPage}>
                          Next 100 <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinTracker;