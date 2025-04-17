
import AirdropSearch from '../components/AirdropSearch';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/NFTAirdrops.css';

function NFTAirdrops() {
  return (
    <div className="nft-airdrops">
       <ErrorBoundary componentName="AirdropSearch">
        <AirdropSearch />
      </ErrorBoundary>
    </div>
  );
}

export default NFTAirdrops; // डिफॉल्ट एक्सपोर्ट यहाँ जोड़ा गया