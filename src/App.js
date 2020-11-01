import "./App.css";
import runnersUp from "./runnersUp";

function App() {
  const winners = [
    {
      weekNumber: 1,
      image:
        "https://cdn.discordapp.com/attachments/766230724093018133/771058223469690910/SPOILER_unknown.png",
      winnerName: "Moudhi",
      Umers: 16,
    },
  ];

  const runners = runnersUp.map((element) => (
    <div>
      <img src={element.image} className="runnerImage" />
      <div className="label">
        <p>Submitted by: {element.winnerName}</p>
        <p>{element.Umers} Umers</p>
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div className="container">
        <h1>Meme of the Week ┏ʕ •ᴥ•ʔ┛</h1>
        <div>
          <h3 className="winnerTitle">Week#1 Winner</h3>
          <div className="winnerContainer">
            <img src={winners[0].image} className="winnerImage" />
            <div className="label">
              <p>Submitted by: {winners[0].winnerName}</p>
              <p>{winners[0].Umers} Umers</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Week#1 Runners-Ups</h3>
          <div className="runnerContainer">{runners}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
