// $('a.arrow').on( 'click', function(){ 
//     var el = $(this);
//     var dest = el.attr('href'); // получаем направление
//     if(dest !== undefined && dest !== '') { // проверяем существование
//         $('html').animate({ 
//             scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
//         }, 1000 // скорость прокрутки
//         );
//     }
//     return false;
// });

// $('a.arrow').on( 'click', function(){ 
//     var el = $(this);
//     var dest = Number(el.attr('href'));
//     // console.log(dest + 1);
//     // $('section:nth-child(' + dest + ')').css('transform', 'scale(0)');
//     $('section:nth-child(' + dest + 1 + ')').css('top', '0%');
//     setTimeout(function () {
//     	// $('section:nth-child(' + dest + ')').css('top', '100%');
//     }, 1000);
//     return false;
// });