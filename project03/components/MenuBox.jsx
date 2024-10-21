const MenuBox = (props) => {

    console.log('menu props', props);
    
    return(
        <div>
            <p>{props.temp} {props.name}</p>
            <p>{props.price}원</p>
            <br></br>
        </div>
    );
};

export default MenuBox;