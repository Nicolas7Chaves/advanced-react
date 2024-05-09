import ButtonApp from './Reusability/ButtonApp';
import './App.css';
import Avatar from './Reusability/Avatar';
import bob from './Reusability/images/bob.jpg';

function App() {
    return (
        <>
            <ButtonApp />
            <Avatar src={bob} alt="Bob" />
            <br />
            <Avatar>BZ</Avatar>
            <br />
            <Avatar />
        </>
    );
}

export default App;
