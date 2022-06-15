import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuote from './components/pages/allquotes';
import NewQuote from './components/pages/newquote';
import QuoteDetail from './components/pages/quotedetail';
function App() {
  return (
    <Switch>
      <Route exact path="/quotes">
        <AllQuote/>
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail/>
      </Route>
      <Route path="/new-quote">
        <NewQuote/>
      </Route>
      <Route path="/">
        <Redirect to="/quotes"/>
      </Route>
    </Switch>
  );
}

export default App;
