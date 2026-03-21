import MainRouter from "./Routes/MainRouter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Home />
    </div>
    </>
  );
};

export default App;
