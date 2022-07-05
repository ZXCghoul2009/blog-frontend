
import './App.css';
import {Header} from "./Header/Header";
import {BlogContent} from "./BlogContent/BlogContent";
import {Footer} from "./Footer/Footer";

function App() {
  return (
      <div className="App">
        <Header/>

        <main>
          <BlogContent/>
        </main>

          <Footer/>

      </div>

  );
}

export default App;
