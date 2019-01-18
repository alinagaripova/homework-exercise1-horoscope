 export function findHoroscope(month, day) {

    const capticorn = 'Козерог';
    const aquarius = 'Водолей';
    const fish = 'Рыбы';
    const aries = 'Овен';
    const taurus = 'Телец';
    const twins = 'Близнецы';
    const crayfish = 'Рак';
    const lion = 'Лев';
    const virgo = 'Дева';
    const libra = 'Весы';
    const scorpio = 'Скорпион';
    const sagittarius = 'Стрелец';
    let result = 0;

    if (month == 'Январь') {
        if (day <= 19) {
            result = capticorn;
        } else {
            result = aquarius;
        }}
    if (month == 'Февраль') {
        if (day <= 18) {
            result = aquarius;
        } else {
            result = fish;
        }}
    if (month == 'Март'){
        if (day <=20){
            result = fish;
        } else {
            result = aries;
        }}
    if (month == 'Апрель'){
        if (day <= 19){
            result = aries;
        } else {
            result = taurus;
        }}
    if (month == 'Май'){
        if (day <= 20){
            result = taurus;
        } else {
            result = twins;
        }}
    if (month == 'Июнь'){
        if (day <= 21) {
            result = twins;
        } else {
            result = crayfish;
        }}
    if (month =='Июль'){
        if (day <= 22){
            result = crayfish;
        } else {
            result = lion;
        }}
    if ( month == 'Август'){
        if (day <= 22){
            result = lion;
        } else {
            result = virgo;
        }}
    if (month == 'Сентябрь'){
        if (day <= 23){
            result = virgo;
        } else {
            result = libra;
        }}
    if (month == 'Октябрь'){
        if (day <= 24) {
            result = libra;
        } else {
            result = scorpio;
        }}
    if (month == 'Ноябрь'){
        if (day <= 22){
            result = scorpio;
        } else {
            result = sagittarius;
        }}
    if (month =='Декабрь'){
        if (day <= 21){
            result = sagittarius;
        } else {
            result = capticorn;
        }}

    return result;

}

console.log(findHoroscope('Сентябрь',25));
console.log(findHoroscope('Август',9));