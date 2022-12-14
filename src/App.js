import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/testimony';

//Here I'll create an array to get the props for the component

const testimonies = [
  {
    name: 'Emma',
    lastName: 'Bostian',
    country: 'Sweden',
    image: './images/emma-testimony.png',
    position: 'Software Engineer',
    company: 'Spotify',
    testimony: "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
  },
  {
    name: 'Sarah',
    lastName: 'Chima',
    country: 'Nigeria',
    image: './images/sarah-testimony.png',
    position: 'Software Engineer',
    company: 'ChatDesk',
    testimony: "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
  },
  {
    name: 'Shawn',
    lastName: 'Wang',
    country: 'Singapore',
    image: './images/emma-testimony.png',
    position: 'Software Engineer',
    company: 'Amazon',
    testimony: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
  }
]

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
          {testimonies.map(testimony => (
            <Testimony
            key={testimony.name}
            name={testimony.name}
            country={testimony.country}
            image={testimony.image}
            position={testimony.position}
            company={testimony.company}
            testimony={testimony.testimony}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
