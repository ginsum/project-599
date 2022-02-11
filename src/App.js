import './App.css';
import MainCalender from './container/Calender';
import MainChart from './container/Chart';
import SignInForm from './container/SignIn';
import LetMeKnow from './container/LetMeKnow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Project 599</h3>
        <SignInForm />
      </header>

      <div className="App-body">
        <div className="Let-me-know">
          <LetMeKnow />
        </div>
        <div className="Main-chart">
          <MainChart />
        </div>
        {/* <div className="Main-calender">
          <MainCalender />
        </div> */}
      </div>
    </div>
  );
}

export default App;
