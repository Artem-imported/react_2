import './App.css';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

function App() {
    const clicked = () => {
        console.log('clicknuta');
    }
    return (
        <div>
        <Greeting name="Артем" />
        <Message text="dovilne powidomlennia" />
        <Button onClick={clicked} />
        </div>
    );
}

export default App;
