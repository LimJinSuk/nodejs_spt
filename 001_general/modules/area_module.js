var area = {
    square: function(length) {
        return length * length;
    },
    circle: function(radius) {
        return radius * radius * Math.PI;
    },
    rectangle: function(width, height) {
        return width * height;
    }
}

module.exports = area;