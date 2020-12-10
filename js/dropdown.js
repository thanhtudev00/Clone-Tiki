// var clickShow = document.querySelector('.user__active');

// clickShow.addEventListener('mouseover', function() {
//     document.querySelector('.userstyle__userdropdown').classList.toggle('user__activeShow');
// });

// // clickShow.addEventListener('mouseout', function() {
// //     // document.querySelector('.userstyle__userdropdown').classList.toggle('user__activeShow');
// //     clickShow
// // })
  

var clickShow = document.querySelector('.menu_wrapper__rencently');

clickShow.addEventListener('mouseover', function() {
    document.querySelector('.content__view').style.display = 'flex';
    document.querySelector('.recently__viewed').style.display = ' block';
});

clickShow.addEventListener('mouseout', function() {
    document.querySelector('.content__view').style.display = 'none';
    document.querySelector('.recently__viewed').style.display = 'none';
});