import './App.css';
import Menu from './Reusability/Menu/Menu';

function App() {
  return (
    <>
      <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </>
  );
}

export default App;
