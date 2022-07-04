
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componants/Navbar'
import NewsList from './Componants/NewsList/NewsList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewsList/>
      
    </div>
  );
}

export default App;
