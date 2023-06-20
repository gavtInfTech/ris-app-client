import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from '../axiosConfig';
import * as adminInfo from '../components/admin/adminInfo';
import * as berezinskoeInfo from '../components/admin/berezinskoeInfo';
import * as bugskoeInfo from '../components/admin/bugskoeInfo';
import * as dvinskoeInfo from '../components/admin/dvinskoeInfo';

export const MessageContext = createContext(null);

export function MessageProvider(props) {

    const [message, setMessage] = useState({
        open: false,
        messageText: "",
        severity: ""
    });

    return <MessageContext.Provider value={{message, setMessage}}>
            {props.children}
           </MessageContext.Provider>
}