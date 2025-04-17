
import AirdropSearch from '../components/AirdropSearch';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DeFiAirdrops.css';

function DeFiAirdrops() {
  return (
    <div className="defi-airdrops">
       <ErrorBoundary componentName="AirdropSearch">
        <AirdropSearch />
      </ErrorBoundary>
    </div>
  );
}

export default DeFiAirdrops; 