import Navbar from './Navbar';
import Home from './Home';

function App() {
  //const title = "Welcome to the New Blog";
  // const likes = 50;
  // //const person = {name : 'yoshi',age : 30};
  // const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
       <div className='content'>
        <Home />
        {/* <h1>{title}</h1> */}
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{'hello'}</p>
        <p>{Math.random() * 10 }</p>
        
        <a href={link} >Google Site</a> */}
       </div>
    </div>
  );
}

export default App;
