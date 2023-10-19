function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>My name is Fabrice Ntalindwa and I am the timekeeper</h1>
      <h2>The Date and time: {currDate.toLocaleDateString()}{currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;