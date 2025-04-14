import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store';
import Mob from './Mob';
export const myStore = new Store()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mob />);

{/* <App store={myStore} />
 */}
