import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import {
  CLEAR_CART_ACTION,
  DECREASE_QUANTITY_ACTION,
  DELETE_ITEM_ACTION,
  GET_TOTAL_ACTION,
  INCREASE_QUANTITY_ACTION,
  LOADING_ACTION,
  VIEW_ITEMS_ACTION,
} from './actions';
import mobiles from './mobiles';
import reducer from './reducer';

interface AppState {
  loading: boolean;
  cart: typeof mobiles; // Assuming `mobiles` is an array of objects
  total: number;
  quantity: number;
}

interface AppContextType extends AppState {
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  deleteItem: (id: number) => void;
  clearCart: () => void;
  toggleQuantity: (id: number, type: string) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState = {
  loading: false,
  cart: mobiles,
  total: 0,
  quantity: 0,
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: LOADING_ACTION });
    const cart = mobiles;
    dispatch({ type: VIEW_ITEMS_ACTION, payload: cart });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: INCREASE_QUANTITY_ACTION, payload: { id } });
  };
  const decreaseQuantity = (id: number) => {
    dispatch({ type: DECREASE_QUANTITY_ACTION, payload: { id } });
  };
  const deleteItem = (id: number) => {
    dispatch({ type: DELETE_ITEM_ACTION, payload: { id } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART_ACTION });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: GET_TOTAL_ACTION });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider };
