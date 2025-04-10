import '../styles/PopularArticles.css';

function PopularArticles() {
  const articles = [
    {
      title: "Airdrop Farming Guide & Strategy For Beginners & Experts",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_Airdrop-Farming-2025.jpg?resize=1080%2C612&quality=50&ssl=1",
      alt: "Airdrop Farming Guide",
    },
    {
      title: "MUST READ: A Guide on how to trade Meme Coins",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/10/jpeg-optimizer_trading-meme-coins.jpg?resize=600%2C343&quality=50&ssl=1",
      alt: "trading meme coins",
    },
    {
      title: "A Series of Trading Fundamentals Guides",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_Guide-to-RSI-bullish-and-bearish-divergence.png?resize=1069%2C609&quality=50&ssl=1",
      alt: "Guide to RSI bullish and bearish divergence",
    },
    {
      title: "Short updates on the hottest crypto news",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/10/jpeg-optimizer_Crypto-news-report.jpg?resize=1080%2C617&quality=50&ssl=1",
      alt: "Crypto news by Airdrop Alert",
    },
    {
      title: "The Biggest Airdrops of 2024 that made new Millionaires",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_Biggest-airdrops-2024.jpg?resize=1080%2C611&quality=50&ssl=1",
      alt: "Biggest airdrops of 2024",
    },
    {
      title: "Be early to Farm the best Testnet Airdrops in 2025",
      image: "https://i0.wp.com/airdropalert.com/wp-content/uploads/2024/03/jpeg-optimizer_Farming-testnet-airdrops.jpg?resize=1080%2C617&quality=50&ssl=1",
      alt: "Farming testnet airdrops",
    },
  ];

  return (
    <div className="popular-articles">
      <div className="et_pb_row et_pb_row_13">
        <div className="et_pb_column">
          <div className="et_pb_text">
            <h2>Popular Airdrop Articles & Guides</h2>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_14">
        {articles.slice(0, 3).map((article, index) => (
          <div key={index} className="et_pb_column">
            <div className="et_pb_blurb">
              <div className="et_pb_blurb_content">
                <div className="et_pb_main_blurb_image">
                  <span className="et_pb_image_wrap">
                    <img src={article.image} alt={article.alt} />
                  </span>
                </div>
                <div className="et_pb_blurb_container">
                  <h4 className="et_pb_module_header">
                    <span>{article.title}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="et_pb_row et_pb_row_15">
        {articles.slice(3).map((article, index) => (
          <div key={index} className="et_pb_column">
            <div className="et_pb_blurb">
              <div className="et_pb_blurb_content">
                <div className="et_pb_main_blurb_image">
                  <span className="et_pb_image_wrap">
                    <img src={article.image} alt={article.alt} />
                  </span>
                </div>
                <div className="et_pb_blurb_container">
                  <h4 className="et_pb_module_header">
                    <span>{article.title}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularArticles;