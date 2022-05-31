import React from "react";
import "./App.css";
import { Header } from "./Components/Header/index";
import { SearchPage } from "./Components/SearchPage/index";
import { Sidebar } from "./Components/SideBar/index";
import { RecommendedVideos } from "./Components/RecommendedVideos/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
