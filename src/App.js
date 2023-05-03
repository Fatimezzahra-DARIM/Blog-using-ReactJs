// import logo from './logo.svg'; if i don'y use it should i comment it [delete logo from my project]
import './App.css';

function App() {
  //create a variable
  const title='Welcome in my new blog';
  const likes=25;
  // const person={name:'yoshi',age:25}; un objet on peut pas mettre const
  return (
    <div className="App">
      <div className="content">
        <h1>App component</h1>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p> {10}</p>
        <p> {"hello darim"}</p>

      </div>
    </div>
  );
}

export default App;
//export our component to use it in our index.js (import it)
