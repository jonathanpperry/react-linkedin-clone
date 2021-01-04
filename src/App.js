import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        {/* Header */}
        <Header />
        {/* App Body */}
        <div className="app_body">
          {/* Side Bar */}
          <Sidebar />
          {/* Feed */}
          <Feed />

          {/* Widgets Here */}
        </div>
      </header>
    </div>
  );
}

export default App;
