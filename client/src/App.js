import { Container } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
// import { Switch } from "react-router";
// import Test from "./Components/Test/Test";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        {/* <Home /> */}
        {/* <Test />
        <Auth /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
