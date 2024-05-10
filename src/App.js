import './App.css';
import Menu from './Reusability/Menu/Menu';
import MenuButton from './Reusability/Menu/MenuButton';
import MenuDropdown from './Reusability/Menu/MenuDropdown';
import MenuItem from './Reusability/Menu/MenuItem';

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={sports}>
        {sports.map(sport =>
          <MenuItem key={sport}>{sport}</MenuItem>
        )}
      </MenuDropdown>
    </Menu>
  );
}

export default App;
