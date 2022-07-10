
import './App.css';
import {Header} from "./Header/Header";
import {BlogContent} from "./components/BlogContent";
import {Footer} from "./Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";

function App() {

  return (
      <Router>
          <div className="App">
              <Header/>

              <main>
                  <Routes>
                      <Route exact path="/" element={<BlogContent/>}/>
                  </Routes>

                  <Routes>
                      <Route exact path="/login" element={<LoginPage/>}/>
                  </Routes>
              </main>

              <Footer/>

          </div>
      </Router>
  );
}

export default App;
