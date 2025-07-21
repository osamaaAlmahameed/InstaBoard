import React, { useState } from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      {showEmail && <p>{user.email}</p>}
      <div className="card-actions">
        <button onClick={() => setLikes(likes + 1)}>
          Like ({likes})
        </button>
        <button onClick={() => setShowEmail(!showEmail)}>
          {showEmail ? 'Hide Email' : 'Show Email'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;