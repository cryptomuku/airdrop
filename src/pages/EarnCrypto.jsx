import AirdropSearch from '../components/AirdropSearch';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/EarnCrypto.css';

function EarnCrypto() {
  return (
    <div className="earn-crypto">
       <ErrorBoundary componentName="AirdropSearch">
        <AirdropSearch />
      </ErrorBoundary>
    </div>
  );
}

export default EarnCrypto; // डिफॉल्ट एक्सपोर्ट यहाँ जोड़ा गया