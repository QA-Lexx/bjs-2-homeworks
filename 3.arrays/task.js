// Задача 1

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3, 4, 5];

function compareArrays(arr1, arr2) {

    return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

}

console.log(compareArrays(arr1, arr2));

// Задача 2

let gender = ["мужской", "женский"];
let users = [
    { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
    { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
    { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
    { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
    { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
    { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
    { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
    { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
    { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
    { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
    { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
    { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
    { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
    { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
];

let males = [];
let females = [];
let avgMale;
let avgFemale;

function getUsersNamesInAgeRange(users, gender) {

    males.filter(users => users.gender === "мужской");
    females.filter(users => users.gender === "женский");

    for (let user of users) {
        if (users.gender === "мужской") {
            males.push(user);
        };
        return males;
    };

    for (let user of users) {
        if (users.gender === "женский") {
            females.push(user);
        };
        return females;
    };

    avgMale = (males) => {
        const sumMales = males.reduce((acc, c) => acc + c, 0);
        const lengthMales = males.length;
        return sumMales / lengthMales;
    };

    avgFemale = (females) => {
        const sumFemales = females.reduce((acc, c) => acc + c, 0);
        const lengthFemales = females.length;
        return sumFemales / lengthFemales;
    };

    avgMale = males.reduce((acc, item) => acc + item, 0) / males.length;
    avgFemale = females.reduce((acc, item) => acc + item, 0) / females.length;

    return avgMale && avgFemale;
}

console.log(getUsersNamesInAgeRange(users, "мужской"));