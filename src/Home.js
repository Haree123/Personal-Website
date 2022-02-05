import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

import './css/Home.css';
import './css/About.css';
import './css/Contact.css';
import './css/Footer.css';
import emojiOne from './assets/emojione.png';
import avatar from './assets/avatar.png';
import resume from './assets/Hp-Resume.pdf';

const Home = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [message, setMessage] = useState(null);

  const deleteMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    const timer = setTimeout(deleteMessage, 7000);
    return () => clearTimeout(timer);
  }, [message]);

  const scrollElement = () => {
    ref.current.scrollIntoView();
  };
  const scrollElement2 = () => {
    ref2.current.scrollIntoView();
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ok0saco',
        'template_7kw124p',
        e.target,
        'user_LvCnh0eV5IjnRvJqXWXQO'
      )
      .then((res) => {
        if (res) {
          setMessage('Message Sent');
        }
      })
      .catch((err) => {
        setMessage('Error! Please Try Again Later');
      });
  };

  const NavBar = () => {
    return (
      <div className='navbar'>
        <p className='navbar-logo'>Hp</p>
        <div className='navbar-right'>
          <ul className='navbar-items'>
            <li onClick={scrollElement2} className='navbar-item display-none'>
              About
            </li>
            <li onClick={scrollElement} className='navbar-item display-none'>
              Contact
            </li>
            <li className='navbar-item'>
              <a
                className='a-nostyle'
                href={resume}
                target='_blank'
                rel='noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const HomeLinks = () => {
    return (
      <div className='home-links'>
        <a href='https://github.com/Haree123' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon className='home-links-icon' icon={faGithub} />
        </a>
        <a
          href='https://www.linkedin.com/in/haree-prasad-275180158/'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon className='home-links-icon' icon={faLinkedinIn} />
        </a>
        <a
          href='https://www.instagram.com/haree._.hp/'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon className='home-links-icon' icon={faInstagram} />
        </a>
      </div>
    );
  };
  const HomeContent = () => {
    return (
      <div className='home-content'>
        <div className='home-content-left'>
          <p className='home-content-s1'>
            Hi, there{' '}
            <span>
              <img className='home-content-emoji' src={emojiOne} alt='' />
            </span>{' '}
            I'm
          </p>
          <p className='home-content-s2'>Haree Prasad</p>
          <p className='home-content-s2 s-opacity'>Web Developer</p>
          <p className='home-content-s1 s-opacity'>
            Hi, I'm MERN Stack developer and I love creating web applications
            with great user experiences
            <span className='home-content-display-none'>
              , best practices and speed. Designed and developed web
              applications across multiple APIs
            </span>
            .
          </p>
          <button
            className='home-content-contact-btn'
            type='button'
            onClick={scrollElement}>
            Contact Me
          </button>
          <HomeLinks />
        </div>
        <div className='home-content-right'>
          <img className='home-content-right-avatar' src={avatar} alt='' />
        </div>
      </div>
    );
  };

  const About = () => {
    const BoxIcon = ({ icon, name }) => {
      return (
        <div className='about-box-icon'>
          <i class={icon}></i>
          <p>{name}</p>
        </div>
      );
    };
    return (
      <div ref={ref2} className='about'>
        <p className='about-title'>About</p>
        <div className='about-content'>
          <p className='about-contents-bold'>
            Hi, I'm Haree Prasad - but you can call me Hp 😉 .
          </p>
          <p className='about-contents-p'>
            I'm a self-taught web developer from Tiruppur, India and I build
            websites with focus on responsive design and accessbility. I have
            BCA degree in Park's College of Arts and Science,and a certificate
            of Responsive Web Design from freeCodeCamp.
          </p>
          <p className='about-contents-p'>
            I have the ability to learn and collaborate in rapidly changing
            environments and compositions. Knowledgeable in user interface,
            testing, and debugging process's. Able to effectively self-manage
            during independent project, As well as collaborate in a team
            setting.{' '}
          </p>
          <p className='about-contents-p'>
            When I am not writing code, I listen to music, enjoy travelling,
            playing Cricket or Basketball (SC30).
          </p>
          <p className='about-contents-p'>
            Currently working on improving my skills and looking for any new
            opportunities. Whether you got a question or or just want to say
            hello? Go ahead and contact me, I'll try to get back with you soon.
          </p>
          <p className='about-contents-p'>
            Here are a few technologies and tools I've been working with
            recently:
          </p>
          <div className='about-container-icon'>
            <BoxIcon icon='devicon-html5-plain devicon' name='HTML5' />
            <BoxIcon icon='devicon-css3-plain devicon' name='CSS3' />
            <BoxIcon icon='devicon-bootstrap-plain devicon' name='Bootstrap' />
            <BoxIcon
              icon='devicon-javascript-plain devicon'
              name='Javascript'
            />
            <BoxIcon icon='devicon-react-original devicon' name='React' />
            <BoxIcon icon='devicon-nodejs-plain devicon' name='NodeJS' />
            <BoxIcon icon='devicon-express-original devicon' name='Express' />
            <BoxIcon icon='devicon-mongodb-plain devicon' name='MongoDB' />
            <BoxIcon icon='devicon-firebase-plain devicon' name='Firebase' />
            <BoxIcon icon='devicon-github-original devicon' name='Github' />
            <BoxIcon icon='devicon-figma-plain devicon' name='Figma' />
            <BoxIcon icon='devicon-vscode-plain devicon' name='VsCode' />
          </div>
          <p className='about-contents-p'>
            For more details, see my{' '}
            <span>
              <a href={resume} target='_blank' rel='noreferrer'>
                Resume
              </a>
            </span>{' '}
            or{' '}
            <span>
              <a
                href='https://www.linkedin.com/in/haree-prasad-275180158/'
                target='_blank'
                rel='noreferrer'>
                LinkedIn
              </a>
            </span>{' '}
            .
          </p>
        </div>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div ref={ref} className='contact'>
        <p className='contact-title'>Contact</p>
        <p className='contact-content'>Send Me a Message!</p>
        <p className='contact-content-2'>
          Got a question or just want to say hello? Go ahead.
        </p>
        <div className='contact-inner-content'>
          <form
            className='contact-form'
            onSubmit={SubmitForm}
            autocomplete='off'>
            <div className='contact-form-row'>
              <div className='contact-form-input'>
                <p>Your Name</p>
                <input name='name' type='text' placeholder='Enter Your Name' />
              </div>
              <div>
                <p>Email Address</p>
                <input
                  name='email'
                  type='email'
                  placeholder='Enter Your Email Address'
                />
              </div>
            </div>
            <div className='contact-form-row'>
              <div className='contact-form-textarea'>
                <p>Your Message</p>
                <textarea
                  name='message'
                  placeholder='Enter Your Message'
                  rows='10'
                />
              </div>
            </div>
            {message === null ? null : (
              <p className='contact-form-message'>{message}</p>
            )}
            <button className='contact-form-submit' type='submit'>
              <div className='contact-form-div-submit'>Submit</div>
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className='footer'>
        <p>Designed and Built by Hp (Haree Prasad).</p>
      </div>
    );
  };

  return (
    <div className='home'>
      <NavBar />
      <div className='home-nested'>
        <HomeContent />
      </div>

      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
