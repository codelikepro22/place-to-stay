import React, { useEffect } from 'react';
import { useValue } from '../context/ContextProvider';
import jwtDecode from 'jwt-decode';

const useCheckToken = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
  useEffect(() => {
    if (currentUser) {
      const decodedToken = jwtDecode(currentUser.token);
      if (decodedToken.exp * 1000 < new Date().getTime())
        dispatch({ type: 'UPDATE_USER', payload: null });
    }
  }, []);
};

export default useCheckToken;
