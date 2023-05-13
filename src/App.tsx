import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import NotFound from "./pages/notfound";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
