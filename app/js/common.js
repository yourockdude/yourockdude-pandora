 $(document).ready(function(){
   $('.home__title').fadeIn("slow");
   $('.down__btn').fadeIn(4000);
   $('.cbp-so-scroller').fadeIn(6000);
   $('.logo').hover(
     function(){
       $('.logo__wrapper').stop().animate({"margin-right": "-160px"}, 200);
     },function () {
       $('.logo__wrapper').stop().animate({"margin-right": "0"}, 200);
     }
   );
   $(window).scroll(
     function(){
       $('.cbp-so-scroller').css({'display': 'block'});
     }
   );
   $('.down__btn').click(
     function () {
       $('.cbp-so-scroller').css({'display': 'block'});
     }
   );
   $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
     var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
     if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
         $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
     }
     return false; // выключаем стандартное действие
   });
 });




