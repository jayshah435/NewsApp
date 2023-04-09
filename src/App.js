import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { routes } from "./Routers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fake from "./components/Fake";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  exact
                  path={route.path}
                  element={
                    <News
                      key={route.key}
                      category={route.category}
                      country={route.country}
                      apikey={route.apikey}
                      pageSize={route.pageSize}
                    />
                  }
                ></Route>
              );
            })}
          </Routes>
        </Router>
        {/* <h1>Hi</h1>
        <Fake/> */}
      </div>
    </>
  );
}

export default App;
