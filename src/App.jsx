import "./App.css";

function App() {
  return (
    <main>
      <div className="cardBox">
        <div className="imgBox">
          <img src="/illustration-article.svg" alt="astrapto"></img>
        </div>

        <p className="learning">Learning</p>
        <p className="cardDate">Published 21 Dec 2023</p>
        <p className="foundations">HTML & CSS foundations</p>
        <p className="cardText">
          These languages are the backbone of every <br /> website, defining
          structure, content, and <br /> presentation.
        </p>
        <div className="cardUserBox">
          <img className="photo" src="/image-avatar.webp" alt="Greg Hooper" />
          <p className="cardUsername">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}

export default App;
