import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePages";
import Page404 from "./Pages/Pages404";
import LoginPage from "./Pages/LoginPage";
import LoginForm from "./Pages/LoginPage/LoginForm";
import RegistrationFrom from "./Pages/LoginPage/RegistrationForm";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="join" element={<LoginPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationFrom />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
