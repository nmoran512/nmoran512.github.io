import moranImage from './images/THE MORAN-112.jpeg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="NoahMoran">
          <h1>Noah Moran</h1>
          <img src={moranImage} className="App-logo" alt="Noah Moran" />
          <p>
            I'm a college student majoring in Computer Science with a Minor in Mathematics.
            This is where you can learn more about my skills and explore my projects.
          </p>
          <div className="Skills">
            <h3>Skills:</h3>
            <ul>
              <li key="combatVeteran">Former Combat Veteran</li>
              <li key="compTIAAPlus">Certified in CompTIA A+</li>
              <li key="compTIANetworkPlus">Certified in CompTIA Network+</li>
              <li key="javaKnowledge">Knowledge in JAVA</li>
              <li key="tsKnowledge">Knowledge in TypeScript</li>
              <li key="reactKnowledge">Knowledge in React</li>
            </ul>
          </div>
          <a
              className="App-link"
              href="https://github.com/nmoran512"
              target="_blank"
              rel="noopener noreferrer"
          >
            Visit My GitHub Profile
          </a>
        </header>
      </div>
  );
}

export default App;

