import { useState, useEffect } from 'react';

import axios from 'axios';

const AxiosTest = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // : string

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('https://jsonplacsdfgeholder.typicode.com/users');

        setUsers(usersResponse.data);
      } catch (error) {
        setError('Помилка отримання даних: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <h1>Loading...</h1>
  );

  if (error) return (
    <h2 style={{ color: 'red' }}>{error}</h2>
  );

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>Ім'я: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosTest;
