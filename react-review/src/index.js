import React from 'react';
import ReactDOM from 'react-dom';


// import TodoList from './TodoList';
// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import TodoListReactRedux from './TodoListReactRedux'
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <TodoListReactRedux />
  </Provider>,
  document.getElementById('root')
);