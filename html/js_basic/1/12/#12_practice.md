# Використайте ключове слово class та напишіть constructor, щоб створити клас Vegetable. Клас Vegetable дозволяє створити об’єкт-овоч із властивістю name, що передається до constructor.
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Повинно показувати 'carrot'




# Використайте ключове слово class, щоб створити клас Thermostat. constructor приймає температуру в градусах Фаренгейта. У класі створіть getter, щоб отримати температуру в градусах Цельсія, та setter, що приймає температуру в градусах Цельсія.
- C = 5/9 * (F - 32)
- F = C * 9.0 / 5 + 32
const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
let temp = thermos.temperature; // 24.44 градусів за Цельсієм
thermos.temperature = 26;
temp = thermos.temperature; // 26 градусів за Цельсієм




# Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.




# Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.




# TV class:

1. Create a TV class with properties like brand, channel and volume.
    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
2. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
3. Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
4. Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
5. It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".




# Усі друковані видання мають назву, рік видання, складаються з певної кількості сторінок, а можуть псуватися.

1. Створіть базовий клас PrintEditionItem із властивостями: name, releaseDate, pagesCount, state, тип.Конструктор класу повинен приймати назву (name), дату випуску (releaseDate) та кількість сторінок (pagesCount) як аргумент  . Стан (state) за умовчанням встановіть рівним 100, тип type доки має дорівнювати null.

2. Зіпсоване видання можна підклеїти і цим покращити його стан. Створіть метод fix(), що збільшує state у півтора рази. Метод ні приймати аргументів.

3. Не можна покращити нове видання та марно підклеювати повністю знищене. Створіть «сеттер» для властивості state, що приймає як аргумент новий стан друкованого видання (число). Якщо новий стан менший за 0, «сеттер» повинен записати у властивість state значення 0. Якщо новий стан більше 100, має бути записано значення 100. В інших випадках у властивість state записується передане в «сетер» значення.

4. Створіть гетер, який читає значення властивості state. Створіть клас Magazine, який успадковуватиметься від класу PrintEditionItem. Конструктор класу повинен приймати такі параметри, як і клас-батько. Від базового друкованого видання журнал відрізняється лише типом. Значення властивості type дорівнює "magazine".

5. Створіть клас Book, що успадковується від PrintEditionItem. Конструктор класу повинен приймати такі параметри, як і клас-батько, і навіть ім'я автора книги author. Значення властивості type дорівнює "book".

6. Створіть класи NovelBook для романів, FantasticBook для фантастичних творів та DetectiveBook для детективів, які успадковуються від класу Book. Значення властивості type рівні "novel", "fantastic" та "detective" відповідно.
