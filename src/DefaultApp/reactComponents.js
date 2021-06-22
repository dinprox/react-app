function Display(props){
    return (<div> {props.message}</div>)
}

function Button(props) {

    const handleOnClick = () => props.onClickFunc(props.increment);

    return (
    <button onClick={handleOnClick}>
        +{props.increment}
        </button>
        )
}

export {Button, Display}