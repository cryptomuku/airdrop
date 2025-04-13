import '../styles/NewsletterForm1.css';

function NewsletterForm() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <p className="overline">Hundreds of Airdrops</p>
        <h1>Be the first to know</h1>
        <p className="subheading">
          Join our newsletter and receive the latest giveaways, airdrops and
          crypto news straight in your inbox
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Email address"
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
          <label className="consent-checkbox">
            <input type="checkbox" required />
            <span>
              I consent to receiving your weekly newsletter and special offers
              via email.
            </span>
          </label>
        </form>
        <p className="powered-by">
          Powered by <span className="highlight">EmailOctopus</span>
        </p>
      </div>
    </div>
  );
}

export default NewsletterForm;