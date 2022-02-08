import './App.css';
import MainCalender from './container/Calender';
import MainChart from './container/Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project 599</h1>
      </header>
      <div className="App-body">
        <div className="Main-chart">
          <MainChart />
        </div>
        <div className="Main-calender">
          <MainCalender />
        </div>
      </div>
    </div>
  );
}

export default App;
