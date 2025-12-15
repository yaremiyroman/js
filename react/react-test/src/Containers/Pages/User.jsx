import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router';

import { useNavigate } from 'react-router-dom';


import axios from 'axios';

const User = () => {
  const params = useParams(); // Отримання параметрів з URL
  console.log('params > ', params);

  const navigate = useNavigate();
  const location = useLocation(); // Отримання поточного місцезнаходження

  console.log('location > ', location);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams > ', searchParams.get('param2'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get(`http://jsonplacehasdfsafolder.typicode.com/posts/${params.id}`);

        console.log('usersResponse.data > ', usersResponse.data);
      } catch (error) {
        navigate('/');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>User</div>
    </>
  );
};

export default User;
