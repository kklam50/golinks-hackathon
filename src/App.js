import './App.css';
import SearchAPI from './components/SearchAPI';
import RenderSearch from './components/RenderSearch';
import {Route, Routes} from "react-router-dom";
import RepoDetails from "./components/RepoDetails";

function App() {
  return (
    <>
      <div className="App">
        <div className="page-contents">
          <Routes>
            <Route path="/" element={<SearchAPI/>}/>
            <Route path="results" element={<RenderSearch/>}/>
            <Route path="results/:query" element={<RenderSearch/>}/>
            <Route path="repo/:org/:name" element={<RepoDetails/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
