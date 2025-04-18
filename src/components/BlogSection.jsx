import '../styles/BlogSection.css';

function BlogSection() {
  const featuredPost = {
    id: 305982,
    title: '17 Legit Crypto X Accounts to Follow (No Shills, No Rugs)',
    link: '/',
    image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Crypto-X-Accounts.png?fit=1600%2C900&quality=50&ssl=1',
    alt: '17 Legit Crypto X Accounts to Follow (No Shills, No Rugs)',
    date: 'Apr 2025',
  };

  const sidebarPosts = [
    {
      id: 305971,
      title: 'Crypto News and Airdrop Updates: Major Trump Unlock Coming',
      link: '/',
      image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Crypto-news-Trump-unlock.png?resize=400%2C250&quality=50&ssl=1',
      alt: 'Crypto News and Airdrop Updates: Major Trump Unlock Coming',
      date: 'Apr 2025',
    },
    {
      id: 305956,
      title: 'Bitcoin vs. Gold Price: Which Asset is the Best Hedge Against Inflation?',
      link: '/',
      image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Bitcoin-vs-Gold-price.jpg?resize=400%2C250&quality=50&ssl=1',
      alt: 'Bitcoin vs. Gold Price: Which Asset is the Best Hedge Against Inflation?',
      date: 'Apr 2025',
    },
    {
      id: 305912,
      title: 'Raydium Launches LaunchLab, Competing with Pump.fun: RAY Token Surges 13%',
      link: '/',
      image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Raydium-LaunchLab.jpg?resize=400%2C250&quality=50&ssl=1',
      alt: 'Raydium Launches LaunchLab, Competing with Pump.fun: RAY Token Surges 13%',
      date: 'Apr 2025',
    },
    {
      id: 305886,
      title: 'AirdropAlert Memories: How it All Started in 2017',
      link: '/',
      image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Gibli-AirdropAlert-Memories.png?resize=400%2C250&quality=50&ssl=1',
      alt: 'AirdropAlert Memories: How it All Started in 2017',
      date: 'Apr 2025',
    },
    {
      id: 305862,
      title: 'List of Best Crypto Casinos: The rise of 8 Platforms to Watch in 2025',
      link: '/',
      image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/Best-crypto-casinos.png?resize=400%2C250&quality=50&ssl=1',
      alt: 'List of Best Crypto Casinos: The rise of 8 Platforms to Watch in 2025',
      date: 'Apr 2025',
    },
    {
      id: 305852,
      title: 'Man Faces Jail Time After CryptoPunks Tax Fraud Case',
      link: '/',
      image: 'https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/04/CryptoPunks-Tax-Fraud.jpg?resize=400%2C250&quality=50&ssl=1',
      alt: 'Man Faces Jail Time After CryptoPunks Tax Fraud Case',
      date: 'Apr 2025',
    },
  ];

  return (
    <div className="blog-section-unique et_pb_row_unique">
      <div className="et_pb_column_unique et_pb_column_2_3_unique">
        <div className="et_pb_module_unique dgbm_blog_module_unique">
          <div className="et_pb_module_inner_unique">
            <div className="dg-blog-module-unique">
              <div className="dg-blog-inner-wrapper-unique full-width-unique image-top-unique">
                <div className="et_pb_ajax_pagination_container_unique">
                  <article className="dgbm_post_item_unique v2_unique">
                    <div className="dg-post-thumb-unique">
                      <p className="post-meta-unique post-meta-over-image-unique over-image-top-unique">
                        <span className="published-unique">
                          <span className="meta-icon-unique"></span> {featuredPost.date}
                        </span>
                      </p>
                      <a className="featured-image-link-unique" href={featuredPost.link}>
                        <img decoding="async" src={featuredPost.image} alt={featuredPost.alt} />
                      </a>
                    </div>
                    <div className="content-wrapper-unique">
                      <h2 className="dg_bm_title_unique">
                        <a href={featuredPost.link}>{featuredPost.title}</a>
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_column_unique et_pb_column_1_3_unique">
        <div className="et_pb_module_unique dgbm_blog_module_unique">
          <div className="et_pb_module_inner_unique">
            <div className="dg-blog-module-unique content-top-unique">
              <div className="dg-blog-inner-wrapper-unique full-width-unique image-left-unique">
                <div className="et_pb_ajax_pagination_container_unique">
                  {sidebarPosts.map((post) => (
                    <article key={post.id} className="dgbm_post_item_unique v2_unique">
                      <div className="column-image-unique">
                        <div className="dg-post-thumb-unique">
                          <a className="featured-image-link-unique" href={post.link}>
                            <img decoding="async" src={post.image} alt={post.alt} />
                          </a>
                        </div>
                      </div>
                      <div className="column-content-unique">
                        <div className="content-wrapper-unique">
                          <h2 className="dg_bm_title_unique">
                            <a href={post.link}>{post.title}</a>
                          </h2>
                          <p className="post-meta-unique post-meta-position-bottom-unique">
                            <span className="published-unique">
                              <span className="meta-icon-unique"></span> {post.date}
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default BlogSection;