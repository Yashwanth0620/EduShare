import React from "react";
import "../../styles/Home.css";
import Timeline from "./Timeline";

export default function Home() {
  return (
    <div className="home">
      <div className="bg-overlay">
        <div className="bg-image">
          <div className="hero">
            <h1>Welcome to StudyNet</h1>
            <p>
              Join study groups, connect with fellow students, and achieve more
              together.
            </p>
            <div className="hero-buttons">
              <a href="/register`" className="btn btn-primary">
                Get Started
              </a>
              <a href="/login" className="btn btn-outline-light btn-login">
                Login
              </a>
            </div>
          </div>
          <div className="features">
            <h2>Features</h2>
            <div className="features-flex row">
              <div className="feature-item col-md-4">
                <i className="icon-group"></i>
                <h3>Find Study Groups</h3>
                <p>
                  Search and join study groups that match your interests and
                  courses.
                </p>
              </div>
              <div className="feature-item col-md-4">
                <i className="icon-calendar"></i>
                <h3>Group Calendar</h3>
                <p>
                  Keep track of upcoming study sessions and events with your group
                  calendar.
                </p>
              </div>
              <div className="feature-item col-md-4">
                <i className="icon-chat"></i>
                <h3>Chat with Members</h3>
                <p>
                  Communicate with group members through our integrated chat
                  feature.
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className="how-it-works">
        <Timeline />
      </div>

      <div className="testimonials">
        <h2>What Students Say</h2>
        <blockquote>
          <p>
            StudyNet has completely transformed my study habits. I love
            connecting with my peers and working together!
          </p>
          <cite>- Sanjini</cite>
        </blockquote>
        <blockquote>
          <p>
            The group calendar keeps me organized and I never miss a study
            session.
          </p>
          <cite>- Rishitha</cite>
        </blockquote>
      </div>
    </div>
  );
}
