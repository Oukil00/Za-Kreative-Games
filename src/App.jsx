import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './Componenets/Header';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('dark');
  const [genres, setGenres] = useState([
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'Strategy' },
    // Add more genres here or fetch dynamically
  ]);

  const onGenreSelect = (genre) => {
    console.log(`Selected Genre: ${genre.name}`);
    // Add your genre filtering logic here (e.g., filter games based on the selected genre)
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : ''} min-h-[100vh]`}>
        <Header genreList={genres} onGenreSelect={onGenreSelect} /> {/* Pass the genres and handler */}
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
