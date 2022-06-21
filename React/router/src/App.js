import { Route, Redirect, Switch } from 'react-router-dom';
import AllQuote from './components/pages/allquotes';
import NewQuote from './components/pages/newquote';
import QuoteDetail from './components/pages/quotedetail';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/Notfound';
function App() {
  return (
    <Layout>
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
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
   
  );
}

export default App;
