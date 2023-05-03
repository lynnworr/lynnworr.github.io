/*
    JS is Loose-Typed like Python

    python declaration
        num =  1        - num in an integer
        letter = 'A'    - letter is a string / char

    JS declaration
        variables:

        var num = 1;
        or
        let num = 1;

        var letter = 'A';
        or
        let letter = 'A';

        constants: 

        const NUM2 = 10;    -num2 is an integer that cannot change value

*/

// declare a variable to hld a name
let name = 'Pac-Man';

// display the value of name to the console
console.log(`${name} evades ghosts on boards of dots and fruit`);


// JS objects - store values in value / key pairs
let inky = {
    name: "Inky",
    color: "Blue"
};

let pinky = {
    name: "Pinky",
    color: "Pink"
};

let Blinky = {
    name: "Blinky",
    color: "Red"
};

let Clyde = {
    name: "Clyde",
    color: "Orange"
};

console.log(`${inky.name} is ${inky.color}`);

// arrays in JS can be made in two ways
// 1. initialization list
// 2, empty array where values are pushed
let values = [1, 2, 3, 4, 5];

let group2Teams = [];

// use .push command to add data to an array
group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta')

// display the info from the arrays
console.log(values);

console.log(group2Teams);

/*
    //use relational operators to implement decisions

    > - greater than
    < - less than
    >= - greater than or equal to
    <= - less than or equal to
    == - is equal to (loose comparison) 1 == "1" - true
    === - is equal to (strict comparison) 1 === "1" - false
    ! -  logical not (flips the value of a boolean)
    != = is not equal
    && - logical and inclusive
    || - logical or optional



*/

for(var i = 0; i < group2Teams.length; i++)
{
    console.log(group2Teams[i]);
}