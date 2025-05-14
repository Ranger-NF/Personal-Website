import "./app.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/layout";
import { SpinnerDiamond } from "spinners-react";
import { HelmetProvider } from "react-helmet-async";

const HomePage = lazy(() => import("./pages/home"));
const ProjectsListPage = lazy(() => import("./pages/projectsList"));
const ProjectPage = lazy(() => import("./pages/project"));
const AboutPage = lazy(() => import("./pages/about"));

const Loading = () => (
  <div className="loading-container">
    <SpinnerDiamond color="#d87739" size={100} />
  </div>
);

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
  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
