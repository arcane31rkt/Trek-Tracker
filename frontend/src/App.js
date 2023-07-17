import Header from "./header/Header";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './home/Home';
import Auth from "./auth/Auth";
import Diaries from './diaries/Diaries'
import { useSelector } from "react-redux";
import Add from "./diaries/Add";
import Profile from "./profile/Profile";
import DiaryUpdate from "./diaries/DiaryUpdate";

function App() {
  const isLoggedIn = useSelector( (state) => state.isLoggedIn );
  console.log(isLoggedIn);
  return (
  <BrowserRouter>
      <Header/>
    <section>
      <Routes>
        <Route path="/" element = { <Home/> } />
        <Route path="/auth" element = { <Auth/> } />
        <Route path="/diaries" element = { <Diaries/> } />
        { isLoggedIn && 
          <>
          <Route path="/add" element = { <Add/> } />
          <Route path="/profile" element = { <Profile/> } />
          <Route path="/posts/:id" element={ <DiaryUpdate/> } />
          </> 
        }
      </Routes>
    </section>
  </BrowserRouter>
  )
}

export default App;
