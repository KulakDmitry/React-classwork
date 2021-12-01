import "./App.css";
import Message from "./components/Message";

function App() {
  const firstText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ea.";
  const firstHeader = "Hello";

  const secondText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut, commodi ducimus error hic iste laboriosam quas recusandae rem vitae?";

  const secondHeader = "Hi";
  return (
    <div className="App">
      <Message header={firstHeader} text={firstText} />
      <Message header={secondHeader} text={secondText} />
    </div>
  );
}

export default App;
