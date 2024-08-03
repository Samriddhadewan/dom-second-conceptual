

const allBtn = document.getElementsByClassName("cart-btn");
for(let btn of allBtn){
    btn.addEventListener('click', function(event){

        const playerContainer = document.getElementById("selected-player-container");

        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const cetegory = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const budget = getNumberFromId("budget");
        const cart = getNumberFromId("cart");
        const left = getNumberFromId("left");
        
        if( cart + 1 > 6 || left === 0){
            alert("the highest limit is taken");
            return;
        }
        
         event.target.setAttribute("disabled", false)
         event.target.parentNode.style.backgroundColor = "grey"; 

       document.getElementById('budget').innerText = budget - parseInt(price);
       document.getElementById("cart").innerText = cart + 1;
       document.getElementById("left").innerText = left - 1;


        const div = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        div.classList.add("flex");
        div.classList.add("justify-around");

        p.innerText = name;
        p2.innerText = price;
        p3.innerText = cetegory;

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        playerContainer.appendChild(div);
        

        updateTotalCostValue(price);
        updateGrandTotal()
    })
}
function updateTotalCostValue(value){
    const initialValue = getNumberFromId("total-cost");
    const sum = initialValue + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

function updateGrandTotal(value){
    const totalCost = document.getElementById("total-cost").innerText;
    if(value == undefined){
        document.getElementById("grand-total").innerText = totalCost;
    } 
    else{
        const couponCode = document.getElementById("coupon-code").value;
        const discount = totalCost * 0.2;
        if(couponCode === "20percentOff"){
            document.getElementById("grand-total").innerText = totalCost - discount;
        }
        else{
            alert("please enter a valid coupon");
        }
    }
    
    



}


function getNumberFromId(id){
    const valueInString = document.getElementById(id).innerText;
    const value = parseInt(valueInString);
    return value;
}