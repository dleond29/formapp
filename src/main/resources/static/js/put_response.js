window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_response_form');
    formulario.addEventListener('submit', function (event) {
        let responseId = document.querySelector('#response_id').value;
        const formData = {
            id: document.querySelector('#response_id').value,
            document: document.querySelector('#document').value,
            email: document.querySelector('#email').value,
            comment: document.querySelector('#comment').value,
            brand: document.querySelector('#brand').value,
            date: document.querySelector('#inputdate').value,

        };
        const url = '/response';
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
          fetch(url,settings)
          .then(response => response.json())

    })
 })

    function findBy(id) {
          const url = '/response'+"/"+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
          .then(response => response.json())
          .then(data => {
              let responseForm = data;
              document.querySelector('#response_id').value = responseForm.id;
              document.querySelector('#document').value = responseForm.document;
              document.querySelector('#email').value = responseForm.email;
              document.querySelector('#comment').value = responseForm.comment;
              document.querySelector('#brand').value = responseForm.brand;
              document.querySelector('#inputdate').value = responseForm.date;


              document.querySelector('#div_response_updating').style.display = "block";
          }).catch(error => {
              alert("Error: " + error);
          })
      }