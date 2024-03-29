import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import ModelsPage from "../models-page/models-page";
import About from "../about/about";
import Contact from "../contact/contact";
import CarConfigurator from "../car-configuration/car-configurator";
import NotFoundPage from "../not-found-page/not-found-page";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback="...loading">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="configure/:id" element={<CarConfigurator />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
