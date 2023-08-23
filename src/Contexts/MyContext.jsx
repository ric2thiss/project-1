import { createContext , useState} from "react";

export const MyContext = createContext();

export const MyProvider = (props) => {
    // Declare Variable to store the state of our application.
    const [click, setClick] = useState(true) //toggle menu
    const [show, setShow] = useState(false) //modal
    const [log, setLog] = useState(false)
    const [reg,setReg] = useState(false);


    return(
        <>
            <MyContext.Provider 
            value={{
            click, setClick, show, setShow, log ,setLog, reg, setReg, setLog
            }}
            >
                {props.children}
            </MyContext.Provider>
        </>
    )
}