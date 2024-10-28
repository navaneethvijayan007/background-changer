import './App.css';

function App() {
  const handleClickFunction = () => {
    document.body.style.background = getRandomColor();
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container">
      <h1 className="title">✨"Unlock the Colorful Vibes!"✨</h1>
      <button type="button" className="btn" onClick={handleClickFunction}>
        Click for a Surprise!
      </button>
      <h3 className="subhead">Let the colors take over your screen! 🎨</h3>
    </div>
  );
}

export default App;
