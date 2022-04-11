import React from "react";
const initialState = {
    expenses:{},
    expense:{},
    isOpen:false
}

const ExpensesContext = React.createContext()

const AppProvider = ({children})=>{
    return(
        <ExpensesContext.Provider value={{
            ...state
        }}>
        {children}
        </ExpensesContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ExpensesContext)
}

export {ExpensesContext, AppProvider}