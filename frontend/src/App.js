import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./pages";
import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
