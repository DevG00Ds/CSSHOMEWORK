let age = prompt('Напишите сколько вам лет');

switch(true) {
    case age == 18:
        alert('Вы совершеннолетний, все можно!');
        break
    case age == 10:
        alert('Вам надо учить уроки!');
        break
    case age == 30:
        alert('Ложитесь спать, завтра на работу!');
        break
    default:
        alert('Мы не знаем что вам делать')
}

// let age = prompt('Напишите сколько вам лет');

// switch(true) {
//     case 18 < age && age < 29:
//         alert('Вы совершеннолетний, все можно!');
//         break
//     case 0 < age && age < 11:
//         alert('Вам надо учить уроки!');
//         break
//     case 30 < age && age < 101:
//         alert('Ложитесь спать, завтра на работу!');
//         break
//     default:
//         alert('Мы не знаем что вам делать')
// }