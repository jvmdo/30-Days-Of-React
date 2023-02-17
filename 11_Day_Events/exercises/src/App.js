import "./global.css";

const maxX = window.innerWidth;
const maxY = window.innerHeight;

export function App() {
  function handleNewPosition(event) {
    let x = Math.ceil(Math.random() * maxX);
    if (x + event.currentTarget.offsetWidth > maxX) {
      x -= event.currentTarget.offsetWidth + 5;
    }

    let y = Math.ceil(Math.random() * maxY);
    if (y + event.currentTarget.offsetHeight > maxY) {
      y -= event.currentTarget.offsetHeight + 5;
    }

    event.currentTarget.style.left = `${x}px`;
    event.currentTarget.style.top = `${y}px`;
  }

  return (
    <div className="container">
      <div className="box" onMouseEnter={handleNewPosition}>
        Day 11/30 of React - Events
      </div>
    </div>
  );
}
