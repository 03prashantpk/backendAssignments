var http = require('http');
const pi = 3.14;

calculation = (object, metric, radius) => {

    if (isNaN(radius) == true) {
        return noInfo = "Radius must be an integer.";
    } else {
        if (object == "sphere" && metric == "area") {

            return noInfo = "You cannot find area of shpere. Instead use metric=tsarea to calculate 'Total Surface Area.";

        } else if (object == "sphere" && metric == "surfaceArea") {

            calculatedData = "Surface Area of Sphere : " + Number((4 * pi) * (radius ** 2)).toFixed(2);
            return calculatedData;

        } else if (object == "circle" && metric == "area") {

            calculatedData = "Area of Circle area : " + Number((pi) * (radius ** 2)).toFixed(2);
            return calculatedData;

        } else if (object == "sphere" && metric == "volume") {

            calculatedData = "Volume of Sphere : " + Number((4 / 3) * pi * (radius ** 3)).toFixed(2);
            return calculatedData;

        } else if (object == "circle" && metric == "volume") {

            return noInfo = "You cannot find volume of a circle.";

        } else if (object !== "circle" || object !== "sphere") {

            return noInfo = "Currently we can only calculate Circle and Sphere Informations. <br> Read Our Doc For more.";
        }
    }
}

module.exports = { calculation };