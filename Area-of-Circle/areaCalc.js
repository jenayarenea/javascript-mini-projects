//Calculate Area Function
function calculateArea(myRadius) {
    return (myRadius * myRadius) * Math.PI;
}
//Get User Radius Input
var prompt;
var myRadius = parseFloat(prompt("Enter the radius in centimeters:", 0));

//Limit to One Decimal Place
var myArea = calculateArea(myRadius).toFixed(1);

//Alert User to Circle Area
var alert;
alert("A circle with a " + myRadius + " centimeter radius has an area of " + myArea + " square centimeters.");
