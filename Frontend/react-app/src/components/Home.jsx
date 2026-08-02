import React from 'react';
import { Link } from "react-router-dom";
import '../style/Home.scss';

const Home = () => {
  return (
    <main className="page">
      <section className="main-sec">
        <p>
          Welcome to our knowledge hub, your gateway to a world of information and insight. Here, you'll find a curated collection of resources spanning various topics, from technology and science to arts and culture. Whether you're a curious mind seeking to expand your understanding or a professional aiming to stay ahead in your field, our hub offers articles, videos, and interactive content to suit your interests and learning style. Dive into our rich repository of knowledge, where exploration knows no bounds and discovery awaits at every click. Join us on a journey of learning and enlightenment, where the pursuit of knowledge is celebrated and curiosity is cherished.
        </p>
      </section>
      
      <nav className="links" aria-label="Main navigation">
        <Link to="/about" >Why Knowledge Hub</Link>
        <Link to="/signup">Explore Our Website</Link>
        <Link to="/connectwithus">Connect With Us</Link> 
      </nav>
    </main>
  );
};

export default Home;
