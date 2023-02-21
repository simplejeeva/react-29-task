import "./App.css";
import Button from "@mui/material/Button";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { StudentForm } from "./StudentForm";
import { Home } from "./Home";
import { Mentor } from "./Mentor";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="heading">
          <h1>JEEVA Institution</h1>
        </div>
        <div navButton>
          <Button onClick={() => navigate("Home")} color="inherit">
            home
          </Button>
          <Button onClick={() => navigate("/")} color="inherit">
            Student
          </Button>
          <Button onClick={() => navigate("Mentor")} color="inherit">
            Mentors
          </Button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="Home" element={<Home />} />
        <Route path="Mentor" element={<Mentor />} />
      </Routes>
    </div>
  );
}
