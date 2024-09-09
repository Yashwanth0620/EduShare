import React, { useState } from 'react';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState('');
  const [visibility, setVisibility] = useState('public');

  const handleSubmit = (e) => {
    e.preventDefault();
    const groupData = {
      groupName,
      description,
      members: members.split(',').map(member => member.trim()),
      visibility,
    };
    console.log(groupData);
    // You can send `groupData` to your backend API here
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow">
            <div className="card-header">
              <h3 className="text-center">Create a New Group</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="groupName" className="form-label">Group Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="members" className="form-label">Add Members (comma separated emails)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="members"
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    placeholder="example1@email.com, example2@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="visibility" className="form-label">Group Visibility</label>
                  <select
                    className="form-select"
                    id="visibility"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                    required
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">Create Group</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
