import "./App.css";
import Header from "./components/header/Header";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./pages/search page/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>

        <Route path="/">
          <div className="app__page">
            <Sidebar />
            <RecommendedVideos />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
