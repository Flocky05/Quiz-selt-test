import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Topic from './Components/Topic/Topic';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Fontpage from './Components/FontPage/Fontpage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Main ></Main >,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Fontpage></Fontpage>
        },
        {
          path: '/Topic',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Fontpage></Fontpage>
        },
        {
          path: '/Topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Topic></Topic>
        },
        {
          path: '/Statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
