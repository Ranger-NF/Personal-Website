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
import Layout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsListPage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
