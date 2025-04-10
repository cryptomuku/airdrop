import { useEffect } from 'react';
import '../styles/NewsletterForm1.css';

function NewsletterForm1() {
  // EmailOctopus स्क्रिप्ट को डायनामिकली लोड करने के लिए useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://arborescens.eomail1.com/form/1d52090e-b713-11ee-891b-0d95c7a1c588.js';
    script.async = true;
    script.setAttribute('data-form', '1d52090e-b713-11ee-891b-0d95c7a1c588');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="newsletter-form">
      <div className="et_pb_row et_pb_row_10">
        <div className="et_pb_column empty-column"></div>
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>Be the first to know</h2>
          </div>
          <div className="et_pb_text description">
            <p>Join our newsletter and receive the latest giveaways, airdrops and crypto news straight in your inbox.</p>
          </div>
          <div className="et_pb_text form-container">
            {/* EmailOctopus स्क्रिप्ट यहाँ फॉर्म रेंडर करेगी */}
            <div
              className="inline-container"
              data-form="1d52090e-b713-11ee-891b-0d95c7a1c588"
              data-version="2"
            ></div>
          </div>
        </div>
        <div className="et_pb_column empty-column"></div>
      </div>
    </div>
  );
}

export default NewsletterForm1;