import { useState, useEffect } from "react";
import './App.css';
import Box from "./box";
import SignOrLog from "./components/signOrLog";

const App = () => {
    const [user, setUser] = useState("Steve");
    const [photos, setPhotos] = useState();

//* ------------------------------ *//
// // pops image immedietly
// // useEffect(() => {}, [what is is listening for])
// useEffect(() => {
//     fetchImages()
// }, [user]) //everytime user's value changes, useEffecr will run again
//* ------------------------------ *//

// Array for previous activity
// const arr = [{ name: "Steve" }, { name: "Gary" }, { name: "Tony" }];

//* ------------------------------ *//


// Taking/fetching images from API
    const fetchImages = async () => {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();
        setPhotos(data);
};

useEffect(() => {
    fetchImages();
  }, [user]); //every time user's value changes, useEffect will run again


//* ------------------------------ *//


return (
    <div className="App">
       <SignOrLog />


    <input onChange={(event) => setUser(event.target.value)} />


    {user ?   
    <Box name= 
    {photos.map((item, index) => {
        return (
        <div>
        <h2>{item.author}</h2>
            <img src={item.download_url} />
        </div>
        );
    })}
/> :
    <Box name="Work gosh darn it" />
    
    }

    </div>
    );

};

export default App;

//* ------------------------------ *//


    // return (
    //     <div className="App">
    //         <button onClick={(e) => fetchImages()}>Fetch photos</button>
    //         {/* <h1>{user}</h1> */}
    //         {/* can pass arguments to function */}
    //         {/* passing a prop below */}
    //         <Box name="Gary"/>
    //         <Box name="Clive"/>
    //         <Box name="Kevin"/>

    //         <Box name={user}/>

        /* <div>
            <Box name={item.name}/>


        </div> */

//* ------------------------------ *//

/* onChange when the value of input alter then run */
            /* <input onChange={(event) => console.log(event.target.value)} /> */
            /* through dot notation goes into object and logs input into console */

/* dynamic redering */
    /* links to user state */

        // CODE EXAMPLE START (need below)
    /* <input onChange={(event) => setUser(event.target.value)} /> */
        // CODE EXAMPLE END
                /* shorthand if statement */
                // CODE EXAMPLE START
                /* {user && <Box name="Tony" />} */
        // CODE EXAMPLE END

/* ------------------------------ */

    /* conditional rendering (links to if / else) */


    /* shorthand if/else statement */

    // CODE EXAMPLE START
    /* {user ? <Box name="Jeff" /> : <Box name="Not Jeff" />} */
    // CODE EXAMPLE END

// MISC NOTES
/* ------------------------------ */
// Typical loop
/* ------------------------------ */
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     };
// // map method
//     arr.map((item, index) => {
//         console.log(item)
//     })
/* ------------------------------ */
