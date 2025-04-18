import '../styles/LatestNews.css';
import AirdropSlider from '../components/AirdropSlider.jsx';
import BlogSection from '../components/BlogSection';
import ErrorBoundary from '../components/ErrorBoundary';


function LatestNews() {
  return (
    <div className="latest-news">
       <AirdropSlider />
       <ErrorBoundary componentName="BlogSection">
        <BlogSection />
      </ErrorBoundary>

    </div>
  );
}

export default LatestNews; // डिफॉल्ट एक्सपोर्ट यहाँ जोड़ा गया