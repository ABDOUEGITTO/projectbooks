
function getBooks() {
    let myRequest = new XMLHttpRequest();

    let url = 'https://www.googleapis.com/books/v1/volumes?q=1000';

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var MyResponse = JSON.parse(this.responseText);
        
            var books = MyResponse.items; 
           
            let row = document.querySelector(".row");
            let section = "";
            for (var i = 0; i < books.length; i++) {
                var title = books[i].volumeInfo.title;
                title = title.substr(0,40);
                var img = books[i].volumeInfo.imageLinks.thumbnail;
                var desc = books[i].volumeInfo.description;
                if(desc !== undefined){
                    desc = desc.substr(0, 95)+ "...";
                }else{
                    desc = "no description to this book";
                }
                var infoLink = books[i].volumeInfo.infoLink;

                
                section += 
                            ` <div  class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="card bg-danger text-center mt-3">
                                <div class="card-header">
                                    <h5>${title}</h5>
                                </div><!-- card-header -->
                                <div class="card-body">
                                <img src="${img}" width="150" alt="">
                                    <p class="pt-3 text-left">${desc}</p>
                                </div><!-- card-body -->
                                <div class="card-footer">
                                    <a class="btn btn-secondary text-white" href="${infoLink}">view details</a>
                                </div><!-- card-footer -->
                            </div><!-- card -->
                        </div><!-- col-4 -->`

            }
            row.innerHTML = section;
        }
    };

    myRequest.open('GET', url, true);
    myRequest.send();
}

getBooks();

function Search() {
    // Declare variables
    var input, filter, a , i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    div = document.querySelectorAll(".col-xl-4");
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < div.length; i++) {
      a = div[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }



