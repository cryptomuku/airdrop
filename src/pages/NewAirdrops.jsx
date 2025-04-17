
import AirdropSearch from '../components/AirdropSearch';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/NewAirdrops.css';

function NewAirdrops() {
  return (
    <div className="new-airdrops">
      <ErrorBoundary componentName="AirdropSearch">
        <AirdropSearch />
      </ErrorBoundary>
    </div>
  );
}

export default NewAirdrops;