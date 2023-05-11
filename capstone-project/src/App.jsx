import { Outlet } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";

const App = () => {
  return (
    <Outlet context={UserProvider} />
  )
};

export default App;
