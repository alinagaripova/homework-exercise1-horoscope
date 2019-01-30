import {findHoroscope} from "../js/lib";


test.each([
        ['horoscope', 'Январь', '15', 'Козерог'],
        ['horoscope', 'Январь', '25', 'Водолей'],
        ['horoscope', 'Февраль', '15', 'Водолей'],
        ['horoscope', 'Февраль', '25', 'Рыбы'],
        ['horoscope', 'Март', '15', 'Рыбы'],
        ['horoscope', 'Март', '25', 'Овен'],
        ['horoscope', 'Апрель', '15', 'Овен'],
        ['horoscope', 'Апрель', '25', 'Телец'],
        ['horoscope', 'Май', '15', 'Телец'],
        ['horoscope', 'Май', '25', 'Близнецы'],
        ['horoscope', 'Июнь', '15', 'Близнецы'],
        ['horoscope', 'Июнь', '25', 'Рак'],
        ['horoscope', 'Июль', '15', 'Рак'],
        ['horoscope', 'Июль', '25', 'Лев'],
        ['horoscope', 'Август', '15', 'Лев'],
        ['horoscope', 'Август', '25', 'Дева'],
        ['horoscope', 'Сентябрь', '15', 'Дева'],
        ['horoscope', 'Сентябрь', '25', 'Весы'],
        ['horoscope', 'Октябрь', '15', 'Весы'],
        ['horoscope', 'Октябрь', '25', 'Скорпион'],
        ['horoscope', 'Ноябрь', '15', 'Скорпион'],
        ['horoscope', 'Ноябрь', '25', 'Стрелец'],
        ['horoscope', 'Декабрь', '15', 'Стрелец'],
        ['horoscope', 'Декабрь', '25', 'Козерог'],
])('should say %s',(name, month, day, expected) => {
    const result  = findHoroscope(month,day);
    expect(result).toBe(expected);
});
