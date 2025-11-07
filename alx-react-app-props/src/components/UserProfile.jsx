import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{userData.name}</h2>
      <p style={{ fontSize: '18px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span>
      </p>
      <p style={{ fontSize: '16px', color: '#555' }}>{userData.bio}</p>
    </div>
  );
}

export default UserProfile;
