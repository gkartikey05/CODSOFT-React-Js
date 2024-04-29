import './Portfolio.css'

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

import Counter from '../../assets/Counter-Web-App.png';
import GitHub from '../../assets/GitHub-user-finder.png';
import Instagram from '../../assets/Instagram-Login.png';
import Password from '../../assets/Password-generator.png';
import Pokedex from '../../assets/Pokedex.png';
import TicTacToe from '../../assets/Tic-Tac-Toe-game.png';


function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={GitHub} alt="" />
          <div className="portfolio-layer">
            <h4>GitHub User Finder</h4>
            <p>
              This little project is an user finder web app of GitHub user.
            </p>
            <Link><FontAwesomeIcon className='icon' icon={faUpRightFromSquare} /></Link>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={TicTacToe} alt="" />
          <div className="portfolio-layer">
            <h4>Tic Tac Toe Game</h4>
            <p>
              A tic tac toe game made to play with your friends and family.
            </p>
            <Link><FontAwesomeIcon className='icon' icon={faUpRightFromSquare} /></Link>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Pokedex} alt="" />
          <div className="portfolio-layer">
            <h4>Pokedex</h4>
            <p>
              This is a pokemon searching web app used to get pokemon details.
            </p>
            <Link><FontAwesomeIcon className='icon' icon={faUpRightFromSquare} /></Link>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Password} alt="" />
          <div className="portfolio-layer">
            <h4>Password Generator</h4>
            <p>
              This web app is used to create strong random password.
            </p>
            <Link><FontAwesomeIcon className='icon' icon={faUpRightFromSquare} /></Link>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Instagram} alt="" />
          <div className="portfolio-layer">
            <h4>Instagram Clone</h4>
            <p>
              This web app is an instagram login and sign up clone
            </p>
            <Link><FontAwesomeIcon className='icon' icon={faUpRightFromSquare} /></Link>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Counter} alt="" />
          <div className="portfolio-layer">
            <h4>Counter App</h4>
            <p>
              This web app is a simple click counter app.
            </p>
            <Link><FontAwesomeIcon className='icon' icon={faUpRightFromSquare} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;