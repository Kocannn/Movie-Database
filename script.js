$('.button-search').on('click',function(){
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=fcb196ed&s=' + $('.input-keyword').val(),
    success: result => {
      const movies = result.Search;
      let movie = '';
      movies.forEach(m => {
        movie += `<div class="col-md-4 my-5">
                    <div class="card" style="width: 18rem;">
                      <img src="${m.Poster}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${m.imdbID}">Details</a>
                      </div>
                    </div>
                  </div>`
  
      })
      $('.movie-container').html(movie)
      $('.detail-button').on('click', function() {
       $.ajax({
        url:'http://www.omdbapi.com/?apikey=fcb196ed&i=' + $(this).data('imdbid'),
        success: result => {
          const moviebyId = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-5">
              <img src="${result.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h4>Avengers</h4></li>
                <li class="list-group-item"><strong>Year : </strong>${result.Year}</li>
                <li class="list-group-item"><strong>Genre : </strong>${result.Genre}</li>
                <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${result.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${result.Plot}</li>
              </ul>
            </div>
          </div>
        </div>`
        $('.modal-body').html(moviebyId);
        },
        error: err => console.log(err.responseText)
       })
      })
  
  
    },
    error: error => console.log(error.responseText)
  })

})