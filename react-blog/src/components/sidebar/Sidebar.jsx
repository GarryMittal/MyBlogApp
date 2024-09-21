import { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";

function Sidebar() {
  const [topNews, setTopNews] = useState(null);

  useEffect(() => {
    // Function to fetch the top news article
    const fetchTopNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news"); // Adjust the URL if needed
        setTopNews(response.data);
      } catch (error) {
        console.error("Error fetching top news:", error);
      }
    };

    fetchTopNews();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Fresh off the press</span>
        {topNews ? (
          <>
            <img src={topNews.urlToImage} alt={topNews.title} />
            <h3>{topNews.title}</h3>
            <p>{topNews.description}</p>
            <a href={topNews.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </>
        ) : (
          <p>Loading top news...</p>
        )}
      </div>
      <div className="sidebarItem">
        {/* Other sidebar items */}
      </div>
    </div>
  );
}

export default Sidebar;
