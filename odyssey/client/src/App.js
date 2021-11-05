import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "fontsource-roboto";
import NavBar from "./components/Navbar/NavBar";
import Featured from "./screens/Home/Featured";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <main>
          <Featured />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;