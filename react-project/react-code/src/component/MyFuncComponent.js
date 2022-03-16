function MyFuncComponent(props)
{
    console.log("Properties : ",props)
    return(
        <div>
            <h1>From a functional component</h1>
            <p>Hi, {props.name}: age,{props.age}</p>
        </div>
    )
}
export default MyFuncComponent;