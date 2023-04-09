import * as React from 'react';
import { MyCanvas } from './components/MyCanvas'

function App() {
  React.useEffect(() => {
    document.title = "Portfolio"
  }, []);

  return (
    <MyCanvas />
  );
}

export default App;
