window.addEventListener('load', function () {

(function(){
  event.preventDefault();
  const url = '/response/list';
  const settings = {
    method: 'GET'
}
  fetch(url,settings)
  .then(response => response.json())
  .then(data => {
     for(answer of data){

       let deleteButton = '<button' +
                                  ' id=' + '\"' + 'btn_delete_' + answer.id + '\"' +
                                  ' type="button" onclick="deleteBy('+answer.id+')" class="btn btn-danger btn_delete">' +
                                  '&times' +
                                  '</button>';

      let get_More_Info_Btn = '<button' +
                                  ' id=' + '\"' + 'btn_id_' + answer.id + '\"' +
                                  ' type="button" onclick="findBy('+answer.id+')" class="btn btn-info btn_id">' +
                                  answer.id +
                                  '</button>';

      let tr_id = 'tr_' + answer.id;
      let answerRow = '<tr id=\"' + tr_id + "\"" + '>' +
                '<td>' + get_More_Info_Btn + '</td>' +
                '<td class=\"td_document\">' + answer.document + '</td>' +
                '<td class=\"td_email\">' + answer.email.toUpperCase() + '</td>' +
                '<td class=\"td_comment\">' + answer.comment.toUpperCase() + '</td>' +
                '<td class=\"td_brand\">' + answer.brand.toUpperCase() + '</td>' +
                '<td class=\"td_inputdate\">' + answer.date.toUpperCase() + '</td>' +
                '<td>' + deleteButton + '</td>' +
                '</tr>';
      $('#responseTable tbody').append(answerRow);
    };

})
})

(function(){
  let pathname = window.location.pathname;
  if (pathname == "/form.html") {
      document.querySelector(".nav .nav-item a:last").addClass("active");
  }
})


})