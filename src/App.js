import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/user/add',
      element: <AddUser></AddUser>
    }
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
