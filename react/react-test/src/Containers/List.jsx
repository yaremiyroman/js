// Дані користувачів
const users = [
  { id: 234523451, name: 'Іван', email: 'ivan@email.com' },
  { id: 2856785678, name: 'Марія', email: 'maria@email.com' },
  { id: 246523456734563, name: 'Петро', email: 'petro@email.com' }
];

// Компонент для відображення інформації про користувача
const UserItem = ({ name, email }) => {
  return (
    <div className="user-item">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};



// Компонент списку користувачів
const List = () => {
  return (
    <div className="user-list">
      {users.map((user, i) => (
        <UserItem
          key={user.id + '1'}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default List;


