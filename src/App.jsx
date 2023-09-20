import Passwordgenerator from "./components/Passwordgenerator";



function App() {


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

  

  return (
    <>

    <Passwordgenerator />

    
    
    </>
  
  );
}

export default App;
