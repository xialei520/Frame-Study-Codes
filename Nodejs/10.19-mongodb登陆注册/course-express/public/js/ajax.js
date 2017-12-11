
// function aaa() {
//   console.log(1234);
//   $.ajax({
//     url: '/users/ajax',
//     type: 'get',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   })
// }

var btn = document.querySelector('.btn');

btn.onclick = function() {
  console.log(1234);
  $.ajax({
    url: '/users/ajax',
    type: 'get',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  })
}
