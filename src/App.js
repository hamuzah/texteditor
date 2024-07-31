//import logo from './logo.svg';
import './App.css';
import TextEditor from './components/texteditor';
import Movie from './components/moviesearch';
import PhoneBook from './components/PhoneBook';


function App() {
  return (
    <div className="App">
       <TextEditor/>
       <Movie />
       <br/> 
       <PhoneBook />
    </div>
  );
}

export default App;
