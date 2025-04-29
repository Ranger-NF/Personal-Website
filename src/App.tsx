import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/home";
import ProjectsListPage from "./Pages/projectsList";
import ProjectPage from "./Pages/project";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsListPage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
