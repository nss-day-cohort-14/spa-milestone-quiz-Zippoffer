var carLot = (function(eventHandlers) {



    var input = document.getElementById("descriptionInput");
    var currentCar;

    eventHandlers.activateEvents = function(car, inventory) {



        //triggers the click effect of each specific card
        car.addEventListener("click", function() {
            currentCar = event.currentTarget;
            var allCars = document.getElementsByClassName("card");
            for (var i = 0; i < allCars.length; i++) {
                let carCards = allCars[i]
                carCards.style.borderWidth = "1px";
                carCards.style.backgroundColor = "cornsilk";
            }


            eventHandlers.clickEffect(currentCar, inventory, input);


            input.addEventListener("keyup", function() {
                var outPutTarget = currentCar.children[2];
                outPutTarget.innerHTML = input.value;

            });
        });

    }


    return eventHandlers;





})(carLot || {});