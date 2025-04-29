// Prompt Used: Show how to render the UserListWithFetch React functional component using TypeScript

import React from 'react';
import ReactDOM from 'react-dom';
import UserListWithFetch from './components/UserListWithFetch';

const App: React.FC = () => {
  return (
    <div>
      <UserListWithFetch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));