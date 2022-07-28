export const signUp = async (username, email, password) => {
    try {
            const response = await fetch("http//localhost:5001/user", {
            method: "POST", ///from routes (HTTP verb)
            headers: {"Content-Type": "appplication/json"}, // sending JSON data instructions
            // body: {"username": "AndyB", "email": "andyb@email.com", "password": "test123"}
            // body: {"username": username, "email": email, "password": password}
            // ---------------
            // body: JSON.stringify({
            //     username: username, 
            //     email: email, 
            //     password: password,
                // ------- key / value
            // ---------------
            body: JSON.stringify({
                username, 
                email, 
                password,
            }), //body that has been turned into JSON with stringify
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}