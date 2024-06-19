import {Routes, Route} from "react-router-dom";
import Authorisation from "./Authorisation/Authorisation";
import Home from "./Main/Home";
import Users from "./Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./redux/userSlice";

function App() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  return (
      <Routes>
          <Route path={'/'} element={<Authorisation/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={`/${user.id}`} element={<Users/>}/>
          <Route path={'*'} element={<Home/>}/>
      </Routes>
  );
}

export default App;
