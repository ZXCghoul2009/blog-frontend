import {useContext} from "react";
import './App.css';
import {Header} from "./Header/Header";
import {BlogContent} from "./components/BlogContent";
import {Footer} from "./Footer/Footer";
import { Route, Routes} from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import Layout from "./components/Layout/Layout";
import SignUpPage from "./pages/SignUpPage";
import AuthContext from "./store/auth-context";
import CreatePostPage from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";

function App() {
    const authCtx = useContext(AuthContext)

  return (
          <div className="App">
                  <Header/>
              <main>

                      <Routes>
                          <Route exact path="/create-post" element={<CreatePostPage/>}/>

                          <Route exact path="/" element={<BlogContent/>}/>
                          <Route exact path="/post/:id" element={<PostPage/>}/>
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
