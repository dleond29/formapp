function deleteBy(id)
{
          const url = '/response/'+ id;
          const settings = {
              method: 'DELETE'
          }
          fetch(url,settings)
          .then(response => response.json())

          //borrar la fila del registro eliminado
          let row_id = "#tr_" + id;
          document.querySelector(row_id).remove();

}