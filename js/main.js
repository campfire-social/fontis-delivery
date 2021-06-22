var theForm = document.forms["fontisForm"];

var water_prices = new Array();
water_prices["2 bottles of water $27.98"]=27.98;
water_prices["4 bottles of water $43.80"]=43.80;
water_prices["6 bottles of water $59.94"]=59.94;

var coffee_prices = new Array();
coffee_prices["1 bag of coffee $15.00"]=15.00;
coffee_prices["2 bags of coffee $30.00"]=30.00;
coffee_prices["3 bags of coffee $45.00"]=45.00;

function getWaterPrice()
{
    var waterPrice=0;
    //Get a reference to the form id="fontisForm"
    var theForm = document.forms["fontisForm"];
    //Get a reference to the cake the user Chooses name=water":
    var selectedWater = theForm.elements["water"];
    //Here since there are 3 radio buttons selectedWater.length = 3
    //We loop through each radio buttons
    for(var i = 0; i < selectedWater.length; i++)
    {
        //if the radio button is checked
        if(selectedWater[i].checked)
        {
            //we set waterPrice to the value of the selected radio button
            //i.e. if the user choose the 2 bottles we set it to 27.98
            //by using the water_prices array
            //We get the selected Items value
            //For example water_prices["2 Bottles $27.98".value]"
            waterPrice = water_prices[selectedWater[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the waterPrice
    return waterPrice;
}

function getCoffeePrice()
{
    var coffeePrice=0;
    //Get a reference to the form id="fontisForm"
    var theForm = document.forms["fontisForm"];
    //Get a reference to the cake the user Chooses name=coffee":
    var selectedCoffee = theForm.elements["coffee"];
    //Here since there are 3 radio buttons selectedCoffee.length = 3
    //We loop through each radio buttons
    for(var i = 0; i < selectedCoffee.length; i++)
    {
        //if the radio button is checked
        if(selectedCoffee[i].checked)
        {
            //we set coffeePrice to the value of the selected radio button
            //i.e. if the user choose the 1 bag we set it to 15.00
            //by using the water_prices array
            //We get the selected Items value
            //For example water_prices["1 Bag $15.00".value]"
            coffeePrice = coffee_prices[selectedCoffee[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the waterPrice
    return coffeePrice;
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalPrice = getWaterPrice() + getCoffeePrice();

    //display the result
    document.getElementById('formTotalInput').value = "$" + totalPrice.toFixed(2);
    document.getElementById('formTotalVis').innerHTML = totalPrice.toFixed(2);
}

var validate = new Bouncer('fontisForm');


$(document).ready(function(){

        $('.water-option').click(function() {
            var target = $('#stepTwo');
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 100);
      });

      $('.coffee-option').click(function() {
        var target = $('#stepThree');
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 100);
  });

 
    
});


