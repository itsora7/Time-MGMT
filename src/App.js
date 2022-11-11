import './App.css';
import { Form } from './components/Form';
import { ListArea } from './components/ListArea';
import { Title } from './components/Title';

function App() {
  const handleOnSubmit = (e) =>{

  }
  return (
    <div className="wrapper">

        <div className="container">
          <Title />
          <Form />
          <ListArea />


            <div className="row fw-bold">
                <div className="col">The total hours allocated = <span id="totalhrs">0</span>hrs</div>
            </div>
        </div>
    </div>
  );
}

export default App;
