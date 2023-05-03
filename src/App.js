// import logo from './logo.svg'; if i don'y use it should i comment it [delete logo from my project]
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
// App.js => Root component (first execute=> component tree)
function App() {

  // const person={name:'yoshi',age:25}; un objet on peut pas mettre const
  return (
    <div className="App">
       {/* <Navbar></Navbar> */}

<Navbar/>

      <div className="content">
       <Home />
       

      </div>
    </div>
  );
}

export default App;
//export our component to use it in our index.js (import it)
