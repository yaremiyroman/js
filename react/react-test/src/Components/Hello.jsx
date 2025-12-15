const API_BASE_URL = 'https://api.example.com';
const MAX_ITEMS_PER_PAGE = 10;
const DEFAULT_SETTINGS = {
  theme: 'light',
  language: 'uk'
};






export default function Hello() {
  // Константи, які визначені на рівні модуля і не змінюються

  return (
    <div id="helloComponent">
      Hello, React! Hello, again!
      {MAX_ITEMS_PER_PAGE}
    </div>
  )
}


function Hello2() {
  // Константи, які визначені на рівні модуля і не змінюються

  return (
    <div id="helloComponent">
      Hello, React! Hello, again!
      {MAX_ITEMS_PER_PAGE}
    </div>
  )
}




export { Hello, Hello2 };




// Компоненти React завжди називаються з великої літери
// // щоб відрізняти їх від звичайних HTML елементів
// const UserProfile = () => {
//   return <div>Профіль користувача</div>;
// };

// const NavigationMenu = () => {
//   return <nav>Меню навігації</nav>;
// };