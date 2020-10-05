import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';
import { firebase } from '../firebase/firebase-config';

import { ClipLoader } from 'react-spinners';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {
  const { logged: isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(false);
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        const notes = await loadNotes(user.uid);
        dispatch(setNotes(notes));
      }

      setCheck(true);
    });
  }, [dispatch]);

  if (!check) {
    return (
      <div className="journal__loader">
        <ClipLoader size={150} />
      </div>
    );
  } else {
    return (
      <Router>
        <Switch>
          <PublicRoute
            isLogged={isLogged}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            isLogged={isLogged}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    );
  }
};
