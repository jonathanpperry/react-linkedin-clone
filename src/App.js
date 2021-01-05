import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  });

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* Side Bar */}
          <Sidebar />
          {/* Feed */}
          <Feed />

          {/* Widgets Here */}
        </div>
      )}
    </div>
  );
}

export default App;
