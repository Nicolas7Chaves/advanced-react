import './App.css';
import Menu from './Reusability/Menu/Menu';
import MenuButton from './Reusability/Menu/MenuButton';
import MenuDropdown from './Reusability/Menu/MenuDropdown';

function App() {
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
    </Menu>
  );
}

export default App;
