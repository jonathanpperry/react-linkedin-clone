import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

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
