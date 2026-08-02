
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../style/ConnectWithUs.scss';

const ConnectWithUs = () => {
  return (
    <div className='main'>
      <div className="connect-with-us">
   <p> Connect with Us:</p>  
      <a href="https://wa.me/9541969102" target="_blank" rel="noopener noreferrer">
      <p>Whatsapp</p> <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      {' '}
    <a href="https://linkedin.com/in/ahmad-murtaza-khan-820b082a9" target="_blank" rel="noopener noreferrer">
    <p>Linkedin</p> <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {' '}
      <a href="https://twitter.com/AhMurtazakhan" target="_blank" rel="noopener noreferrer">
      <p>Twitter</p> <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
    <p>Welcome to Knowledge Hub, the digital gateway to stay in touch with our vibrant community. We believe in fostering meaningful connections and invite you to join the conversation. Follow us on social media to stay updated on the latest news, events, and behind-the-scenes glimpses. Engage with us through comments, likes, and shares – your voice matters! For more in-depth discussions and exclusive content, subscribe to our newsletter and be part of our inner circle. We value your feedback, so feel free to reach out through our contact form. Let's build a strong bond, share experiences, and create memories together. Connect with us and become a vital part of our ever-growing community.
Additionally, explore our blog for insightful articles, expert interviews, and in-depth analyses on topics that matter to you. Participate in polls, surveys, and interactive quizzes to have your say in shaping the direction of our content. We love showcasing our community, so tag us in your photos and posts using our official hashtag to be featured on our website or social media platforms. If you're passionate about collaborating or have a story to tell, check out our submission guidelines for guest posts and partnerships. Our Connect With Us page is not just a platform; it's a dynamic space where ideas thrive, friendships blossom, and innovation flourishes. Join us on this exciting journey, and let's make every connection count!





</p>
    </div>
    
  );
};

export default ConnectWithUs;

