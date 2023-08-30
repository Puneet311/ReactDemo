import './App.scss';
import Home from './Components/home/home'
import About from './Components/about/about'
import Skill from './Components/skill/skill'
import Projects from './Components/projects/projects'
import Contact from './Components/contact/contact'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import MainPorfile from './Components/profilepage/main-profile';
import ReactDOM from 'react-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"",
        element:<Navigate to="/home" replace /> 
      },
      {
        path: "home",
        element: <MainPorfile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
