var myName = 'David';
document.write(myName);
myName = 'William';
document.write(myName);

document.write("<br><br>");

var circleRadius = 8;
var piConst = 3.1415927;
var circumferance = 2 * piConst * circleRadius;
document.write("If circle radius is ", circleRadius, "cm, then ")
document.write("circle circumference is ", circumferance, "cm");

document.write("<br><br>");

document.write("Boeing 777 Fuel Uplift Calculation:", "<br>");

var fuelRequired_kg = 40000;
var fuelShutdown_kg = 5700;
var fuelUsedAPU_kg = 200;
var calcUplift_kg = fuelRequired_kg - (fuelShutdown_kg - fuelUsedAPU_kg);
document.write("Fuel Required Next Sector = ", fuelRequired_kg, "kg", "<br>");
document.write("Fuel Remaining Previous Sector = ", fuelShutdown_kg, "kg", "<br>");
document.write("Fuel Burned by APU = ", fuelUsedAPU_kg, "kg", "<br>");
document.write("Calculated Fuel uplift = ", calcUplift_kg, "kg");

document.write("<br><br>");

var bowserSupply_ltr = 44300;
var specGravity = .780;
var bowserSupply_kg = bowserSupply_ltr * specGravity;
var discrepancy_kg = calcUplift_kg - bowserSupply_kg;
var percentDiscrep = (discrepancy_kg / fuelRequired_kg) * 100;
document.write("Actual Fuel Supplied by Bowser (ltr) = ", bowserSupply_ltr, "ltr", "<br>");
document.write("Actual Fuel Supplied by Bowser (kg) = ", bowserSupply_kg, "kg", "<br>");
document.write("Fuel Discrepancy (Calculated minus Actual) (kg) = ", discrepancy_kg, "kg", "<br>");
document.write("Percentage Discrepancy = ", percentDiscrep, "%", "<br>");
document.write("Confirm discrepancy does not exceed 1000kg or 5%");

document.write("<br><br>");

var favoriteFood = 'Lamb Kofta Curry';
document.write("My favorite food is ", favoriteFood);
