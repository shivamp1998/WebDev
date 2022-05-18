import SimpleInput from './components/SimpleInput';

function App() {
  const handleLogin = () => {
    console.log('logging In....');
  }
  return (
    <div className="app">
      <SimpleInput />
    </div>
  );
}

export default App;
