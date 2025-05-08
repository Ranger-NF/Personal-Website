import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";
import ProjectsListPage from "./pages/projectsList";
import ProjectPage from "./pages/project";
import Layout from "./components/layout";
import AboutPage from "./pages/about";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsListPage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
