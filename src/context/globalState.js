import React , {createContext,useReducer} from 'react'
import AppReducer from './appReducer';
//intail state or data for the application

const initialState = {
    transactions : [
    ]
}

//create context

export const GlobalContext = createContext(initialState);


//provider component to make all components as it's children
//children will wrap all components in this
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    //actions 

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransactions(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}

 