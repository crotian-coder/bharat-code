import './App.css';
import aimastery from "./images/aimastery.jpg"
import htmlcss from "./images/htmlcss.jpg"
import SimpleSlider from './SimpleSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    // <>
    // <SimpleSlider/>
    // </>
    <>


      <header>
        <nav>
          <div className="logo">
            <h1>Code for Bharat</h1>
          </div>
          <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <div className="hero">
          <h2>Welcome to Code for Bharat</h2>
          <p>Empowering tier 2 cities and marginalized students through coding education</p>
          <a href="#courses" className="btn">Explore Courses</a>
        </div>
      </section>

      <section id="courses">
        <h2>Our Courses</h2>
        <SimpleSlider/>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Code for Bharat is a web bootcamp aimed at promoting coding literacy among students in tier 2 cities and
          marginalized communities. Our mission is to provide accessible and affordable coding education to empower the
          next generation of developers.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 Code for Bharat. All rights reserved.</p>
      </footer>

      <div id="schedule-modal" className="modal">
        <div className="modal-content">
          <span id="close-btn">&times;</span>
          <h2>AI Mastery className Schedule</h2>
          <ul>
            <li>Week 1: Introduction to AI</li>
            <li>Week 2: Machine Learning Basics</li>
            <li>Week 3: Neural Networks and Deep Learning</li>
            <li>Week 4: Natural Language Processing</li>
            <li>Week 5: Computer Vision</li>
            <li>Week 6: AI Ethics and Responsible AI</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
