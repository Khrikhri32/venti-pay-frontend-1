// services/api.js

export const createUser = async (userData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/create`, {
        method: 'POST',
        headers: {
          'key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getUserList = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/getAll`, {
        method: 'GET',
        headers: {
          'key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user list');
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      throw error;
    }
  };
  