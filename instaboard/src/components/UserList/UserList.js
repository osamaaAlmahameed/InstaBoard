import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=12');
      setUsers([...users, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="users-grid">
        {filteredUsers.map((user, index) => (
          <UserCard key={`${user.login.uuid}-${index}`} user={user} />
        ))}
      </div>
      <button className="load-more" onClick={fetchUsers}>
        Load More
      </button>
    </div>
  );
};

export default UserList;