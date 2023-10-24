import React from 'react';

function UserList({ users, onBackClick }) {
  return (
        <div>
          <h2>User List</h2>
          <ul className="list-group">
            {users.map((user, index) => (
              <li key={index} className="list-group-item">
                <strong>Name:</strong> {user.name}<br />
                <strong>Email:</strong> {user.email}<br />
                <strong>Phone:</strong> {user.phone}<br />
                <strong>Address:</strong> {user.address}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={onBackClick}>
            Back to Form
          </button>
        </div>
  );
}

export default UserList;
