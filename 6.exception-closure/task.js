// Задача 1

function parseCount(value) {
    Number.parseFloat(value); {
        if (isNaN(value)) {
            let parseFlValue = value;
            return parseFlValue;
        }
        else {
            throw new Error("Невалидное значение");
        }
    }
};

function validateCount(value) {
    Number.parseCount(value); {
        if (isNaN(value)) {
            let parseCoValue = value;
            return parseCoValue;
        }
        else {
            try {
                !isNaN(value);
            } catch (error) {
                console.log("Ошибка, сударь");
            }
        }
    }
};

// Задача 2

class Triangle1 {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw "Треугольник с такими сторонами не существует";
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const halfOfPerimeter = this.perimeter / 2;
        return +Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a) *
            (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c)).toFixed(3);
    }
};

const obj = new Triangle1(1, 2, 3);
console.log(obj.perimeter);