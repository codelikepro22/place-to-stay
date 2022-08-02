const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return { ...state, openLogin: true };
    case 'CLOSE_LOGIN':
      return { ...state, openLogin: false };

    case 'START_LOADING':
      return { ...state, loading: true };
    case 'END_LOADING':
      return { ...state, loading: false };

    case 'UPDATE_ALERT':
      return { ...state, alert: action.payload };

    case 'UPDATE_PROFILE':
      return { ...state, profile: action.payload };

    case 'UPDATE_USER':
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };

    case 'UPDATE_IMAGES':
      return { ...state, images: [...state.images, ...action.payload] };
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter((image) => image !== action.payload),
      };
    case 'UPDATE_DETAILS':
      return { ...state, details: { ...state.details, ...action.payload } };
    case 'UPDATE_LOCATION':
      return { ...state, location: action.payload };
    case 'UPDATE_UPDATED_ROOM':
      return { ...state, updatedRoom: action.payload };
    case 'UPDATE_DELETED_IMAGES':
      return {
        ...state,
        deletedImages: [...state.deletedImages, ...action.payload],
      };
    case 'UPDATE_ADDED_IMAGES':
      return {
        ...state,
        addedImages: [...state.addedImages, ...action.payload],
      };
    case 'RESET_ROOM':
      return {
        ...state,
        images: [],
        details: { title: '', description: '', price: 0 },
        location: { lng: 0, lat: 0 },
        updatedRoom: null,
        deletedImages: [],
        addedImages: [],
      };

    case 'UPDATE_ROOMS':
      return {
        ...state,
        rooms: action.payload,
        addressFilter: null,
        priceFilter: 50,
        filteredRooms: action.payload,
      };
    case 'FILTER_PRICE':
      return {
        ...state,
        priceFilter: action.payload,
        filteredRooms: applyFilter(
          state.rooms,
          state.addressFilter,
          action.payload
        ),
      };
    case 'FILTER_ADDRESS':
      return {
        ...state,
        addressFilter: action.payload,
        filteredRooms: applyFilter(
          state.rooms,
          action.payload,
          state.priceFilter
        ),
      };
    case 'CLEAR_ADDRESS':
      return {
        ...state,
        addressFilter: null,
        priceFilter: 50,
        filteredRooms: state.rooms,
      };

    case 'UPDATE_ROOM':
      return { ...state, room: action.payload };

    case 'UPDATE_USERS':
      return { ...state, users: action.payload };
    case 'DELETE_ROOM':
      return {
        ...state,
        rooms: state.rooms.filter((room) => room._id !== action.payload),
      };

    case 'UPDATE_SECTION':
      return { ...state, section: action.payload };

    default:
      throw new Error('No matched action!');
  }
};

export default reducer;

const applyFilter = (rooms, address, price) => {
  let filteredRooms = rooms;
  if (address) {
    const { lng, lat } = address;
    filteredRooms = filteredRooms.filter((room) => {
      const lngDifference = Math.abs(lng - room.lng);
      const latDifference = Math.abs(lat - room.lat);
      return lngDifference <= 1 && latDifference <= 1;
    });
  }

  if (price < 50) {
    filteredRooms = filteredRooms.filter((room) => room.price <= price);
  }

  return filteredRooms;
};
