"use client"

import {createContext, ReactNode, useState} from "react";

export const TapContext = createContext({
    tab: 'rec',
    setTab: (value: 'rec' | 'fol') => {},
});

type Props = { children: ReactNode }
export default function TapProvider({ children }: props) {
    const [tab, setTab] = useState('rec');

    return (
        <TapContext.Provider value={{tab, setTab}}>
            {children}
        </TapContext.Provider>
    )
}