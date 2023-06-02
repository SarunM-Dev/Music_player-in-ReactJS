import './App.css';
import '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaControlCard from './Music/music';
import { NavbarContent } from './Navbar/Navbar';
function App() {
  return (
    <div>
    <NavbarContent/>
    <MediaControlCard/>
    </div>
  );
}

export default App;
