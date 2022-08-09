import React, { useEffect } from 'react';
import { useValue } from '../context/ContextProvider';
import jwtDecode from 'jwt-decode';
import { storeRoom } from '../actions/room';
import { logout } from '../actions/user';

const useCheckToken = () => {
  const {
    state: {
      currentUser,
      location,
      details,
      images,
      updatedRoom,
      deletedImages,
      addedImages,
    },
    dispatch,
  } = useValue();
  useEffect(() => {
    if (currentUser) {
      const decodedToken = jwtDecode(currentUser.token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        storeRoom(
          location,
          details,
          images,
          updatedRoom,
          deletedImages,
          addedImages,
          currentUser.id
        );
        logout(dispatch);
      }
    }
  }, []);
};

export default useCheckToken;
