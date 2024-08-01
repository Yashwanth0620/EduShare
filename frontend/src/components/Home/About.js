import React from 'react';
import '../../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faComments, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About StudyNet</h1>
        <p>Your go-to platform for connecting with fellow students and enhancing your study experience.</p>
      </section>

      <section className="about-content">
      <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={require("../../assets/about.jpg")}
                alt="Our Design Process"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2>What We Offer</h2>
        <p>At StudyNet, we make it easy for you to find and join study groups, schedule study sessions, and collaborate effectively. Our intuitive platform helps you stay organized with a group calendar, track upcoming sessions, and communicate seamlessly with your peers.</p>
        <p>Whether you're tackling assignments, preparing for exams, or seeking study partners, StudyNet is here to support you every step of the way.</p>
        <p>Join our community and experience the power of collaborative learning, where together we achieve more.</p>
                </div>
              </div>
            </div>
          </div>
        
      </section>

      <section className="about-features">
        <h2>Key Features</h2>
        <ul>
        <li>
        <FontAwesomeIcon icon={faUsers} style={{ marginRight: '8px' }} />
        Find and join study groups that match your interests and courses.
      </li>
      <li>
        <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />
        Stay organized with a group calendar for tracking sessions and events.
      </li>
      <li>
        <FontAwesomeIcon icon={faComments} style={{ marginRight: '8px' }} />
        Communicate seamlessly with group members through our chat feature.
      </li>
      <li>
        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '8px' }} />
        Participate in study sessions and collaborate with peers effectively.
      </li>
        </ul>
      </section>

      <section className="about-footer">
        <h2>Get Started</h2>
        <p>Ready to enhance your study experience? <a href="/sign-up">Sign up now</a> and join the StudyNet community today!</p>
      </section>
    </div>
  );
};

export default About;
