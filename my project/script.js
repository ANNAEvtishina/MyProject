
//Задание 1
//Инструкция: Создайте объект user с полями name, age, и email. Заполните его значениями. Затем,
//используя объект, выведите информацию о пользователе в формате:
let user = {
    name: "Anna",
    age: 28,
    email: "anna.doe@example.com",
   };
   console.log(user);

//Задание 2
//Инструкция: Измените значение свойства age у объекта user на 30 и добавьте новое свойство
//isAdmin со значением true. Выведите обновленный объект
user.age = 30;
user.isAdmin=true
console.log(user);

//Задание 3
 //Инструкция: Удалите свойство email из объекта user, а затем проверьте, что оно действительно
//удалено, выведя объект в консоль.
delete user.email;
console.log(user);


//Задание 4: Преобразование объекта
//Инструкция: Напишите функцию transformUser, которая принимает объект user и возвращает новый
//бъект, содержащий только name и email, при этом name должно быть преобразовано в верхний
//регистр.
function transformUser(user) {
    // Реализуйте преобразование здесь
    return { name: user.name.toUpperCase(), email: user.email }; // Возвращайте новый объект
  }
  user.email = "anna.doe@example.com";
  let transformedUser = transformUser(user);
  console.log(transformedUser)


  //Задание 5: Копирование объектов
  //Инструкция: Используя оператор "spread" (...), создайте копию объекта user и измените в копии
  //значение name на "Jane Doe". Оригинальный объект не должен измениться.
  userCopy = { ...user };
  userCopy.name = "Jant Doe";
  console.log(user); // Оригинальный объект
  console.log(userCopy); // Измененная копия

  
  //Задание 6: Преобразование объекта по условию
//Инструкция: Напишите функцию filterProperties, которая принимает объект и массив строк
//(названия свойств). Функция должна возвращать новый объект, содержащий только те свойства,
//которые указаны в массивеЗадание 6: Преобразование объекта по условию

  function filterProperties(obj, keys) {
    // Реализуйте фильтрацию здесь
    objFilter = {};
    for (let key of keys) {
      objFilter[key] = obj[key];
    }
    return { ...objFilter }; // Возвращайте новый объект
  }
  let filteredUser = filterProperties(user, ["name", "email"]);
  console.log(filteredUser); // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com" }
  



// Задание 7: Изменение структуры данных объекта
// Инструкция: Напишите функцию convertUser, которая принимает объект user и возвращает новый
// объект, где свойства name и age заменены на одно свойство profile, содержащее эти данные.
function convertUser(user) {
    // Реализуйте преобразование здесь
    userConv = {};
    userConv.profile = {};
    for (let key in user) {
      if (key === "name" || key === "age") {
        userConv.profile[key] = user[key];
      } else {
        userConv[key] = user[key];
      }
    }
    return { ...userConv }; // Возвращайте новый объект
  }
  let convertedUser = convertUser(user);
  console.log(convertedUser);
  // Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email: "john.doe@example.com", isAdmin: true }
  


  // Задание 8: Объединение объектов
  // Инструкция: Используя метод Object.assign, объедините два объекта user и details, чтобы
  // получить один объединенный объект.
  let user_2 = {
   name: "John Doe",
   email: "john.doe@example.com",
  };
  let details = {
   age: 30,
   isAdmin: true,
  };
  // Объедините объекты здесь
  mergedUser =  Object.assign(user_2, details);
  console.log(mergedUser);
  // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age: 30, isAdmin: true }
  


// Задание 9: Динамическое создание свойств
// Инструкция: Создайте объект product и добавьте в него свойства name, price и category, используя
// динамические ключи, которые задаются переменными.
let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {[key1]: "Laptop", [key2]: 1500, [key3]: "Electronics"}; // Создайте объект и добавьте свойства динамически
console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }

//Эти задания помогут вам освоить работу с объектами в JavaScript и научат выполнять различные
//преобразования и манипуляции с объектами, что является основополагающим навыком при
//разработке на этом языке
