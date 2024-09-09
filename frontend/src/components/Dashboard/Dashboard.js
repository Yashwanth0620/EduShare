import React from 'react';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4">Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-primary text-white h-100">
            <div className="card-body">
              <h5 className="card-title">My Study Groups</h5>
              <p className="card-text">Manage and view all your study groups and their activities.</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="text-white">View Details</a>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-success text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Personal Messages</h5>
              <p className="card-text">Check your messages and stay connected with your study partners.</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="text-white">View Details</a>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-warning text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Upcoming Events</h5>
              <p className="card-text">Stay updated with all your scheduled study sessions and events.</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="text-white">View Details</a>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white h-100">
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View and edit your profile information and preferences.</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="text-white">View Details</a>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              Area Chart Example
            </div>
            <div className="card-body">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              Bar Chart Example
            </div>
            <div className="card-body">
              <canvas id="myBarChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
