import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navbar/Navbar";
import Porfolio from "./components/Porfolio/Porfolio";
import MyStack from "./components/MyStack/MyStack";
import AboutMe from "./components/AboutMe/AboutMe"
import ExtraAbilities from "./components/ExtraAbilities/ExtraAbilities";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {

  return (
    <div className="app">
      <NavBar/>
      <FrontPage/>
      <MyStack/>
      <Porfolio/>
      <AboutMe/>
      <ExtraAbilities/>
      <ContactMe/>
    </div>
  );
}

export default App;
