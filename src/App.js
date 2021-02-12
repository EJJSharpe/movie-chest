import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import MovieList from './pages/MovieList'
import MyMovies from './pages/MyMovies'
import { Router } from '@reach/router'
import Nav from './components/Nav'
import './styles/index.scss';
import 'boxicons';


Amplify.configure(awsconfig)

function App() {

  return (

    <div className="App">
      <Nav />
      <Router>
        <MovieList path='/' />
        <MovieList path='/:searchTerm' />
        <MyMovies path='/mymovies' />
      </Router>

    </div>
  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"]
  }
});
