import "./css/style.css";

import Main from './components/main/Main.js';
import Footer from './components/common/Footer.js';
import Load from "./components/common/Load";

function App() {

  
  return (
    <div className="App">
      <Load />
      <Main />
      

      <Footer />
    </div>
  );
}

export default App;
