import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MySidebar from './components/MySidebar';
import MyPlayer from './components/MyPlayer';
import Main from "./components/Main";
import ArtistPage from "./components/ArtistPage";
import Search from "./components/Search";
import PageNotFound from "./components/PageNotFound";
import MusicLibrary from "./components/MusicLibrary";
import MyTrackList from "./components/MyTrackList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MySidebar/>
        <MyPlayer/>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route  path="/album" element={<MyTrackList/>}/>
            <Route path="/artist" element={<ArtistPage />}/>
            <Route path="/search/:artistName" element={<Search/>} />
            <Route path="/MusicLibrary" element={<MusicLibrary/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/pageNonFound" element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
