import {useContext} from "react";
import './App.css';
import {Header} from "./Header/Header";
import {BlogContent} from "./components/BlogContent";
import {Footer} from "./Footer/Footer";
import { Route, Routes} from "react-router-dom";
import {AddNewPostPage} from "./components/AddNewPostPage/AddNewPostPage";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import Layout from "./components/Layout/Layout";
import SignUpPage from "./pages/SignUpPage";
import AuthContext from "./store/auth-context";

function App() {
    const authCtx = useContext(AuthContext)

  return (
          <div className="App">
                  <Header/>
              <main>

                      <Routes>
                          <Route exact path="/addpost" element={<AddNewPostPage/>}/>

                          <Route exact path="/" element={<BlogContent/>}/>

                          {!authCtx.isLoggedIn && (
                              <Route exact path="/login" element={<AuthPage/>}/>

                          )}

                          {!authCtx.isLoggedIn && (
                              <Route exact path="/signup" element={<SignUpPage/>}/>

                          )}

                          {authCtx.isLoggedIn && (
                              <Route exact path="/profile" element={<UserProfile/>}/>
                          )}
                          <Route exact path="*" element={<BlogContent/>}/>

                      </Routes>
              </main>
              <Footer/>
          </div>
  );
}

export default App;
