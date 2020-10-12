const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      // Recorre todos los elementos de la lista y si ya existe no lo agrega.
      // eslint-disable-next-line no-case-declarations
      const exist = state.myList.find((element) => element.id === action.payload.id);
      if (exist) return { ...state };

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        // Cuando se ejecuta este action basicamente se filtran todos los ids que no sean el a eliminar y se vuelven el nuevo objeto.
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }

};

export default reducer;
