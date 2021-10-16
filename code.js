// Переменные для нахождения корабля, с использованием рандомного значения
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// Переменные для действий
var guess;
var hits = 0;
var guesses = 0;

// Переменная статуса
var isSunk = false;

// Через цикл while пока переменная false
while (isSunk === false)
{
    // ******* 1
    // Запрос данных
    guess = prompt("Ready, aim, fire! (Enter number 1 - 6)");
    // Проверка на правильность диапозона чисел
    if (guess < 0 || guess > 6) 
    {
        alert("Please enter a valid cell number");
    }
    // Добавление + 1 к количеству попыток
    else
    {
        guess + 1;
    }

    // ******* 2
    // Проверка совпадения локации корабля и выстрела
    if (guess == location1 || guess == location2 || guess == location3 )
    {
        hits = hits + 1;
        alert("Hit.");
    }
    else
    {
        alert("Miss.");
    }

    // ******* 3
    // Проверка количества попаданий на равенство трем
    if (hits == 3)
    {
        isSunk = true;
        alert("You sank Battleship");
    } 
}

// ******* 4
// После завершения цикла и окончаняи игры
var stats = "Your took " + guesses + " to sink Battleship. " + "Your Accuracy was " + (3 / guesses);

alert(stats);