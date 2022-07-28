import { useState } from "react";
import { signUp } from "../utils";

const SignOrLog = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = setState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
        e.preventDefault() //preventing refresh but can be used in ther ways
        await signUp(username, email, password) //arguments must be in same order
    }

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)} />
            <input onChange={(e) => setUsername(e.target.value)} />
            <input onChange={(e) => setUsername(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignOrLog