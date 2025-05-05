import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default route redirects to /users */}
        <Route path="/" element={<Navigate to="/users" />} />
        {/* User List Route */}
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
