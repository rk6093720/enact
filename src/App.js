
import './App.css';
import BottomNavbar from './Component/BottomNavbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
        <MainRoutes/>
        <BottomNavbar/>
    </div>
  );
}

export default App;
