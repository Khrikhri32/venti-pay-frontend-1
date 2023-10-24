import React, { useState, useEffect  } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { getUserList } from '../services/api';

function FormLayout() {
  const [showForm, setShowForm] = useState(true); 
  const [users, setUsers] = useState([]);

  const handleFormSubmit = () => {
    setShowForm(false);
  };  

  const handleBackToForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if(showForm === false){
        getUserList()
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error('Error fetching user list:', error);
        });
    }
  }, [showForm]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-4">
          {showForm ? (
            <UserForm onSubmit={handleFormSubmit} />
          ) : (
            <UserList users={users} onBackClick={handleBackToForm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FormLayout;
