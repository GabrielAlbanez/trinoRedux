import React from 'react';
import { Provider as ReduxProvider } from "react-redux"
import { store } from './store';
import Player from './pages/Player';
import "./styles/global.css"
function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Player/>
      </ReduxProvider>
    </div>
  );
}

export default App;
