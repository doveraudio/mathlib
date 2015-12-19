var Point = function (x, y) {
    var point = {
        x: (isNumeric(x) ? x : 0),
        y: (isNumeric(y) ? y : 0),
        equals: function (p) {
            return (p.x === point.x && p.y === point.y);
        },
        distance: function (p) {
            return Distance(point, p);
        }
    };
    return point;
};

var Line = function () {
    var line = {
        a: new Point(),
        b: new Point(),
        length: function () {
            return Distance(line.a, line.b);
        },
        midpoint: function () {
            return Midpoint(line.a, line.b);
        },
        slope: function () {
            return Slope(line.a, line.b);
        }
    };
    return line;
};

var Linear = function (slope, intercept) {
    var linear = {
        m: slope,
        b: intercept,
        f: function (x) {
            var result = (linear.m * x) + linear.b;
            //console.log("M is " + linear.m + ", X is " + x + ", B is  " + linear.b);

            if (isNumeric(result))
            {
                return(result);
            }
        },
        debug: false

    };
    return linear;
};

var Distance = function (pointA, pointB) {
    return  Math.sqrt(((pointB.x - pointA.x) * (pointB.x - pointA.x)) + ((pointB.y - pointA.y) * (pointB.y - pointA.y)));
};

var Midpoint = function (pointA, pointB) {
    var midpoint = new Point();
    midpoint.x = (pointB.x + pointA.x) / 2;
    midpoint.y = (pointB.y + pointA.y) / 2;
    return midpoint;

};

var Slope = function (pointA, pointB) {
    try {
        return (pointB.y - pointA.y) / (pointB.x - pointA.x);
    } catch (e) {
        throw e;
    }

    
    

};
// function courtesy of stackoverflow
// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

var isNumeric = function (value) {

    if (!isNaN(parseFloat(value)) && isFinite(value))
    {
        return true;
    } else if (isNaN(parseFloat(value)))
    {
        throw NonNumericException(value);
    } else if (!isFinite(value))
    {
        throw ValueOutOfRangeException(value);
    }

};


var NonNumericException = function (value) {
    throw TypeError('Value is non-numeric. Value:' + (value).toString());
};

var ValueOutOfRangeException = function (value) {
    throw {
        name: 'RangeException',
        message: 'Value is out of range.',
        value: value
    };
};

