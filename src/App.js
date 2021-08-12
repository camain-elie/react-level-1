import CheckboxList from './components/ChecboxList';

import './App.css';

function App() {

    const checkboxArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
        <div className="App">

            <CheckboxList checkboxArray={checkboxArray} />
      
        </div>
    );
}

export default App;