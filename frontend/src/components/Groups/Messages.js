import React, { useState } from 'react';
import "../../styles/Messages.css"

const Messages = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const groups = [
    { id: 1, name: 'Math Study Group' },
    { id: 2, name: 'AI and ML Enthusiasts' },
    // Add more groups as needed
  ];

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="container-fluid my-4">
      <div className="row" style={{ height: "100%" }}>
        <div className={`col-lg-4 ${selectedGroup ? 'd-none d-lg-block' : ''} h-100`}>
          <div className="card shadow-sm h-100">
            <div className="card-header text-white">
              <h5 className="m-0">My Groups</h5>
            </div>
            <div className="card-body bg-light overflow-auto">
              <ul className="list-group">
                {groups.map(group => (
                  <React.Fragment key={group.id}>
                    <li 
                      className="list-group-item list-group-item-action bg-light"
                      onClick={() => handleGroupSelect(group)}
                      style={{ cursor: 'pointer' }}
                    >
                      {group.name}
                    </li>
                    <hr className="my-1" />
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-8 d-flex flex-column h-100">
          {selectedGroup ? (
            <div className="card border-primary flex-grow-1 shadow-sm h-100">
              <div className="card-header text-white d-flex justify-content-between align-items-center">
                <button 
                  className="btn btn-light d-lg-none" 
                  onClick={() => setSelectedGroup(null)}
                >
                  Back
                </button>
                <h5 className="m-0">{selectedGroup.name}</h5>
              </div>
              <div className="card-body bg-light overflow-auto">
                {/* Chat messages would be rendered here */}
              </div>
              <div className="card-footer bg-grey text-white">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control border-primary" 
                    placeholder="Type a message..." 
                  />
                  <button className="btn bg-darkblue btn-light">Send</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card border-primary flex-grow-1 shadow-sm h-100">
              <div className="card-body bg-light text-center text-muted">
                <p>Select a group to start chatting.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
