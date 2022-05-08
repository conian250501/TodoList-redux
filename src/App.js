
import './App.scss';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Filters />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
