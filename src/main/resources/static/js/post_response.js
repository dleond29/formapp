window.addEventListener('load', function () {

    const formulario = document.querySelector('#add_new_response');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = {
            document: document.querySelector('#document').value,
            email: document.querySelector('#email').value,
            comment: document.querySelector('#comment').value,
            brand: document.querySelector('#brand').value,
            date:document.querySelector('#inputdate').value
        };

        const url = '/response';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                 let successAlert = '<div class="alert alert-success alert-dismissible">' +
                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                     '<strong></strong> Registro realizado </div>'

                 document.querySelector('#response').innerHTML = successAlert;
                 document.querySelector('#response').style.display = "block";
                 resetUploadForm();

            })
            .catch(error => {
                    let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                     '<strong> Error, intente nuevamente</strong> </div>'

                      document.querySelector('#response').innerHTML = errorAlert;
                      document.querySelector('#response').style.display = "block";
                     resetUploadForm();})
    });

    function resetUploadForm(){
        document.querySelector('#document').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#comment').value = "";
        document.querySelector('#brand').value = "";
        document.querySelector('#inputdate').value = "";

    }

    (function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            document.querySelector(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/form.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })();
});