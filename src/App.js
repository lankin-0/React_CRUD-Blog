//Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import EditPost from "./pages/EditPost";
//Router
import { Route, Switch } from "react-router-dom";
//Context
import { DataProvider } from "./context/DataContex";

function App() {
  return (
    <div className="App">
      <Header title="BLOG" />
      <DataProvider>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post">
            <NewPost />
          </Route>
          <Route path="/edit/:id">
            <EditPost />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>

          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
