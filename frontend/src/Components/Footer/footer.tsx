import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngellist, faFacebook, faGithub, faInstagram, faLinkedin, faSteam, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div>
      <footer className="footer">
        <ul className="icons">
          <li><a href="https://github.com/vaporjawn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" className='Github'/></a></li>
          <li><a href="https://twitter.com/vaporjawn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="3x" className='Twitter'/></a></li>
          <li><a href="https://instagram.com/vaporjawn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="3x" className='Instagram'/></a></li>
          <li><a href="https://www.facebook.com/victor.williams.jr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="3x" className='Facebook'/></a></li>
          <li><a href="https://twitch.com/vaporjawn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitch} size="3x" className='Twitch'/></a></li>
          <li><a href="https://steamcommunity.com/id/vaporjawn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSteam} size="3x" className='Steam'/></a></li>
          <li><a href="https://angel.co/victor-wiliams" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAngellist} size="3x" className='AngelList'/></a></li>
          <li><a href="https://linkedin.com/victorwilliams719" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="3x" className='LinkedIn'/></a></li>
        </ul>
        <ul className="copyright">
            <li>© Vaporjawn</li>
            <li>Design: <a className="GithubLink" href="http://github.com/vaporjawn/">Github</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
