import './App.css';
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Plans from './components/Plans/Plans';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <VideoPlayer/>
          <Plans />
    </div>
  );
}

export default App;
