import {findHoroscope} from "../js/lib";

test('should say horoscope', () =>{
    const result = findHoroscope('Январь',15);
    expect(result).toBe('Козерог');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Январь',25);
    expect(result).toBe('Водолей');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Февраль',15);
    expect(result).toBe('Водолей');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Февраль',25);
    expect(result).toBe('Рыбы');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Март',15);
    expect(result).toBe('Рыбы');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Март',25);
    expect(result).toBe('Овен');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Апрель',15);
    expect(result).toBe('Овен');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Апрель',25);
    expect(result).toBe('Телец');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Май',15);
    expect(result).toBe('Телец');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Май',25);
    expect(result).toBe('Близнецы');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Июнь',15);
    expect(result).toBe('Близнецы');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Июнь',25);
    expect(result).toBe('Рак');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Июль',15);
    expect(result).toBe('Рак');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Июль',25);
    expect(result).toBe('Лев');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Август',15);
    expect(result).toBe('Лев');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Сентябрь',15);
    expect(result).toBe('Дева');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Сентябрь',25);

    expect(result).toBe('Весы');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Октябрь',15);
    expect(result).toBe('Весы');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Октябрь',25);
    expect(result).toBe('Скорпион');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Ноябрь',15);
    expect(result).toBe('Скорпион');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Ноябрь',25);
    expect(result).toBe('Стрелец');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Декабрь',15);
    expect(result).toBe('Стрелец');
});
test('should say horoscope', () =>{
    const result = findHoroscope('Декабрь',25);
    expect(result).toBe('Козерог');
});
