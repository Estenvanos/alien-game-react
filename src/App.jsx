import PropTypes from "prop-types";

const App = ({ message }) => {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
