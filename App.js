import './App.css';

function MyComponent(){
  return (
    <div>
      <h1>Reusable component</h1>
      <button>Click</button>
    </div>
  )
}

function App() {
  return( 
  <div className="App">
    <MyComponent />
    <MyComponent />
  </div>
  )
}

export default App;
