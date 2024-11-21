import { useSelector, useDispatch } from "react-redux";


const Footer = () => {
    const isLogged = useSelector ((state) => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div>
            <h2> your status: </h2>
            <button onClick={() => dispatch({type:"SIGN_IN"})}>Check</button>
            {isLogged ? (
                <p>you are signed in!</p>
            ) : <p>sorry, you must sign in...</p> }
        </div>
    )
}

export default Footer;