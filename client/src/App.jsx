import MainRouter from "./Routes/MainRouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <MainRouter />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default App;
