function Counter(){

    let quantity = 10;

    function upQuantity(){
        quantity += 1;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity);
    }

    function downQuantity(){
        quantity -= 1;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity);
    }

    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar sem Estado</button>
            <button onClick={downQuantity}>Diminuir sem Estado</button>
        </>    
    )
}

export default Counter;