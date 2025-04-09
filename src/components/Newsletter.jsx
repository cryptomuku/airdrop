import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Be the First to Know</h2>
      <p>Join our newsletter and receive the latest giveaways, airdrops, and crypto news straight in your inbox.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  );
}

export default Newsletter;