import React, {useState, createContext, useEffect} from 'react'



export const ContadorContexto = createContext();

export function ContadorProvider(props){
    const [mode, setMode] = useState(false)
    
    return (
        <ContadorContexto.Provider value={[mode, setMode]}>
            {props.children}
        </ContadorContexto.Provider>
    )
};