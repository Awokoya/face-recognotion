import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/Rank';
// import Particles from 'particles.js';
import './App.css';

function App() {

  // const particleStyling = 
  //   particles: {
  //     line_linked: {
  //       shadow: {
  //         enable: true,
  //         color: '#3CA9D1',
  //         blur : 5
  //       }
  //     }
  //   }
  

  return (
    <div className="App">
      {/* <Particles 
        params={{particleStyling}}
      /> */}
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageForm/>
    </div>
  );
}

export default App;
