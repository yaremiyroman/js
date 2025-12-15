import { useState, useEffect } from 'react';

const UserData = () => {
  // Створення стану для збереження даних користувача
  const [user, setUser] = useState(null);

  // Виконання запиту до API після монтування компонента
  useEffect(() => {
    // Функція для отримання даних
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data); // Збереження отриманих даних
      } catch (error) {
        console.error('Помилка отримання даних:', error);
      }
    };

    fetchData();
  }, []); // Пустий масив залежностей - ефект виконається один раз

  return (
    <div>
      {user ? (
        // Відображення даних користувача
        <div>
          <p>Ім'я: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        // Відображення стану завантаження
        <p>Завантаження даних користувача...</p>
      )}
    </div>
  );
};

export default UserData;


// COMPONENT = {state, props}

// - willmount
// -- mount/ render
// - didmount

// - willReRender
// -- rerender/changes
// - didReRender


// -- unmount
