function onSubmit(event){
    // Отменить событие
    event.preventDefault();

    // Переданная форма
    let form = event.target;
    // Получаем информацию пользователя
    let name = form.userName.value;
    let age = form.userAge.value;
    let from = form.userFrom.value;

    let sA =  "Жил-был, не тужил, семки грыз и много ел " + name + ". ";
    let sB = "Однажды он съел ровно " + age + " килограмм шаурмы."
    let sC = "Все были настолько поражены, что его взяли в элитную группу " + from;

    // Взятие элементы чек-бокса по имени класса
    // userLike не массив D:
    let userLike = document.getElementsByClassName("userLike");
    // Создаём пусто массив
    let like = [];

    // Перебираем массив userLike
    for(let i = 0; i<userLike.length; i++){
        // Если есть галочки
        if(userLike[i].checked == true){
            // Добавляем значение input в массив like
            like.push(userLike[i].value)
        }
    }

    // Что любит пользователь?
    let sD = " А ещё он любит: ";

    for(let i = 0; i < like.length; i++){
        sD += like[i];
        if(i != like.length-1){
            sD += ", ";
        }
        else{
            sD += ".";
        }
    }
    story.innerHTML = sA + sB + sC + sD;
}


popitka.addEventListener("submit", onSubmit);

