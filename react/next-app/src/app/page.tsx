import { use, Suspense } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  return res.json();
}

const App = () => {
  const data = use(getData());

  console.log('data > ', data);

  return data.title;

}

export default App;
