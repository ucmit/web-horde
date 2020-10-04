// ************** Параметры игры ******************

// Готовый алгоритм перебора карт
function shuffle(array) {
    let copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
}

// Функция генерации игрового поля
function generateField(size){
    
    let cls = ["c1", "c2", "c3", "c4"]
    let counter = 0;
    let backs = [];
    for(let i=0; i<(size*size); i+=2){
        backs[i] = cls[counter];
        backs[i+1] = cls[counter];
        
        if(counter < 3){
            counter++;
        }
        else counter = 0;
    }

    console.log(backs)

    let cards = [];
    for(let i=0; i<(size*size); i++){
        let card = $("<div>");
        $(card).addClass("card");

        let flipper = $("<div>");
        $(flipper).addClass("flipper");

        let front = $("<div>");
        $(front).addClass("front");

        let back = $("<div>");
        $(back).addClass("back");

        $(flipper).append(back)
        $(flipper).prepend(front)
        $(card).append(flipper)

        cards.push(card);
    }
    // Обнуляем поле
    $("#field").html("");
    // Устанавливаем размер и местоположение поля
    $("#field").css({
        "width": size*150+16 + "px",
        "margin-left": (window.innerWidth - size*150+16)/2 + "px"
    })
    // Добавляем в наше поле карточки
    $("#field").append(cards);
}

// Нажатие 
$("#btn").click(function(event) { 
    // Взять значение из #size используя .val()
    size = $("#size").val();
    if(size%2 == 0){
        generateField(size);
    }
    else{
        alert("Число не может быть нечетным!!!")
    }
});



// Переворот картинки при нажатии
$(".flipper").click(function(event){ 
    $(event.currentTarget).toggleClass("clicked");
    
});

