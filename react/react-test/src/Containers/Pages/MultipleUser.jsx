import { useParams } from 'react-router-dom';

const MultipleUser = () => {
  const params = useParams(); // Отримання параметрів з URL
  console.log('params > ', params);

  return (
    <div>MultipleUser</div>
  );
};

export default MultipleUser;
