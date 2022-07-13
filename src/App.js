
import './App.css';
import {Header} from "./Header/Header";
import {BlogContent} from "./components/BlogContent";
import {Footer} from "./Footer/Footer";
import { Route, Routes} from "react-router-dom";
import {AddNewPostPage} from "./components/AddNewPostPage/AddNewPostPage";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import Layout from "./components/Layout/Layout";

function App() {

  return (
          <div className="App">
                  <Header/>
              <main>

                      <Routes>
                          <Route exact path="/addpost" element={<AddNewPostPage/>}/>

                          <Route exact path="/" element={<BlogContent/>}/>


                          <Route exact path="/auth" element={<AuthPage/>}/>

                          <Route exact path="/profile" element={<UserProfile/>}/>
                      </Routes>
              </main>
              <Footer/>
          </div>
  );
}

export default App;
