import React from "react";
import "../style/Mainpage.scss";
import img3 from "../Assets/books.jpg";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="pagemp">
      <div className="main-secmp">
        <div>
          <img src={img3} alt="error" />
        
        </div>
        
       
      </div>
      <Link to ='/bookstore'>Book Store</Link>
      <p>Welcome to the Knowledge Hub, where curiosity meets discovery. Dive into a world of endless possibilities as you explore a rich tapestry of knowledge spanning diverse subjects and disciplines. From science to literature, history to technology, our curated collection is designed to ignite your intellect and broaden your horizons. Whether you're a lifelong learner seeking to deepen your understanding or a newcomer eager to embark on a journey of exploration, our platform offers a wealth of resources to satisfy your thirst for knowledge. Join our vibrant community of thinkers, creators, and enthusiasts as we celebrate the joy of learning and the power of shared wisdom. Start your journey today at Knowledge Hub and unlock the secrets of the universe, one discovery at a time.</p>
    </div>
  );
};

export default Mainpage;
