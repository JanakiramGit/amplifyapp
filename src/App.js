import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <div>
        Hi now with Auth!

        {/* <AmplifySignOut/> */}
      </div>
    </div>
  );
}

export default App;
