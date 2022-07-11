// const Box = (props) => {
const Box = ({name}) => {
    return(
        <div>
            {/* <h1>{props.name}</h1> */}
            <h1>{name}</h1>
        </div>
    )
};

export default Box;