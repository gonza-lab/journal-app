import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { logged } = useSelector((state) => state.auth);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  if (!logged) {
    return <h1>Espere...</h1>;
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    );
  }
};
