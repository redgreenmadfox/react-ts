import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UserPage from './components/UserPage';

const App = () =>  {
  
  return (
    <BrowserRouter>
      <div>
        <div>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/todos'}>Todos</NavLink>
        </div>
        <Route path={'/users'} exact>
            <UserPage/>
        </Route>
        <Route path={'/todos'} exact>
            <TodosPage/>
        </Route>
        <Route path={'/users/:id'} exact>
            <UserItemPage/>
        </Route>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
