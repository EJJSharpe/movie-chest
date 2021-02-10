import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import MovieList from './pages/MovieList'
import MyMovies from './pages/MyMovies'
import { Router } from '@reach/router'


Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <Router>
        <MovieList path='/' />
        <MovieList path='/:searchTerm' />
        <MyMovies path='/mymovies' />
      </Router>

    </div>
  );
}

export default withAuthenticator(App);
