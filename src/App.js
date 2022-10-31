import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>,
      loader:()=> fetch('http://localhost:5000/users')
    },
    {
      path:'/user/add',
      element: <AddUser></AddUser>
    },
    {
      path:'/update/:id',
      element: <UpdateUser></UpdateUser>,
      loader: ({params}) => fetch(` http://localhost:5000/users/${params.id}`)
    }
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
