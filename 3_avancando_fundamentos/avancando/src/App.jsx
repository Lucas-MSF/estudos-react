import { useState } from "react";
import City from "./assets/city.jpg"
import "./App.css";
import TestState from "./components/TestState";
import ListItens from "./components/ListItens";
import UsingProps from "./components/UsingProps";
import TestFunctionPattern from "./components/TestFunctionPattern";
import ShowMessage from "./components/ShowMessage";
import SelectMessage from "./components/SelectMessage";
import UserDetail from "./components/UserDetail";

function App() {
  const users = [
    {
      id: 1,
      name: 'Lucas',
      job: 'Developer',
      age: 24
    },
    {
      id: 2,
      name: 'Marcos',
      job: 'Estagiario',
      age: 17
    },
    {
      id: 3,
      name: 'Kleber',
      job: 'Aposentado',
      age: 65
    },
  ];

  const [message, setMessage] = useState();

  const handleSetMessage = (newMessage) => {
    setMessage(newMessage);
  }

  const sumNumbers = (a, b) => {
    return a + b;
  }

  return (
    <>
      <h1>Avançando react</h1>
      <UsingProps name="Lucas"/>
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
        <img src={City} alt="cidade" />
      </div>
      <TestState />
      <ListItens />
      <TestFunctionPattern sumNumbers={sumNumbers(1,3)} />
      <ShowMessage message={message} />
      <SelectMessage handleSetMessage={handleSetMessage}/>
      {users.map(user => <UserDetail key={user.id} user={user}/>)}
    </>
  );
}

export default App;
