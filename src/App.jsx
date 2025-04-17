import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FeaturedAirdrops from './pages/FeaturedAirdrops';
import NewAirdrops from './pages/NewAirdrops';
import DeFiAirdrops from './pages/DeFiAirdrops';
import NFTAirdrops from './pages/NFTAirdrops';
import EarnCrypto from './pages/EarnCrypto';
import LatestNews from './pages/LatestNews';
// import Cointracker from './pages/Cointracker';
import SolanaAirdrops from './pages/SolanaAirdrops';
import PortalToBitcoin from './pages/PortalToBitcoin';
import ListAirdrop from './components/AdvertisingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured-airdrops" element={<FeaturedAirdrops />} />
          <Route path="/new-airdrops" element={<NewAirdrops />} />
          <Route path="/defi-airdrops" element={<DeFiAirdrops />} />
          <Route path="/nft-airdrops" element={<NFTAirdrops />} />
          <Route path="/earn-crypto" element={<EarnCrypto />} />
          <Route path="/latest-news" element={<LatestNews />} />
          {/* <Route path="/cointracker" element={<Cointracker />} /> */}
          <Route path="/solana-airdrops" element={<SolanaAirdrops />} />
          <Route path="/portal-to-bitcoin" element={<PortalToBitcoin />} />
          <Route path="/AdvertisingPage" element={<ListAirdrop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;