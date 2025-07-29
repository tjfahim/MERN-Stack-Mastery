import './App.css';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import AddUser from './components/adduser/Add';
import User from './components/getuser/User';
import EditUser from './components/edituser/Edit';
import ViewUser from './components/viewuser/View';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element:<User/>,
    },
    {
      path: '/add',
      element: <AddUser />, 
    },
    {
      path: '/edit/:id',
      element: <EditUser />,
    },
    { 
      path: '/view/:id',
      element: <ViewUser />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
