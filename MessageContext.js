"use client"
import { createContext, useState } from "react"

export const MessageContext = createContext(null);

export const MessageProvider = ({children}) => {
    const [message, setActiveMessage] =useState("any")
    const [withPerson, setWithPerson] = useState(false);

    return(
        <MessageContext.Provider value={{message, setActiveMessage, withPerson, setWithPerson}}>{children}</MessageContext.Provider>
    )
};

export default MessageContext;