const apiKey= `085893799663f0096f9d370baf640f22`;
const imgPath = "https://image.tmdb.org/t/p/w342";
let watcheCards=[];
let favCards=[];




//

let actionCard= document.getElementById("Action");
moviesCat(28,actionCard)
let comedyCard= document.getElementById("Comedy");
moviesCat(25,comedyCard)
let adventureCard= document.getElementById("Adventure");
moviesCat(12,adventureCard)
let familyCard= document.getElementById("Family");
moviesCat(10751,familyCard)
let historyCard= document.getElementById("History");
moviesCat(36,historyCard)

function moviesCat(id,card){
  axios
  .get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with-generes=${id}`)
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    card.innerHTML = response.data.results.map(item =>
        `
        <div class="card my-3 mx-4" style="width: 18rem;">
          <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" >
          <div class="card-body bg-dark">
          <a><i class="far fa-bookmark test"onclick="WatchList(${item.id})"></i></a>
          <a><i class="far fa-heart mx-4 test"onclick="FavList(${item.id})"></i></a>
          <a href="#" class="btn text-white test"data-bs-toggle="modal" data-bs-target="#modalBox" onclick="MoviesDetails(${item.id})">Details</a>
          </div>
        </div>
        `
        )

  })
}


//------------------ Get Movies by search ------------------------
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  let myInput = document.querySelector("#myInput").value;
  console.log(myInput);
  axios
  .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adlt=false&query=${myInput}`)
  .then ((res) =>{ console.log(res.data.results)
    document.getElementById("searchedMovie").innerHTML = res.data.results.map(item=>
      `
      <div class="card my-3 mx-4" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" >
        <div class="card-body bg-dark">
        <a><i class="far fa-bookmark test"onclick="WatchList(${item.id})"></i></a>
        <a><i class="far fa-heart mx-4 test"onclick="FavList(${item.id})"></i></a>
        <a href="#" class="btn text-white test"data-bs-toggle="modal" data-bs-target="#modalBox" onclick="MoviesDetails(${item.id})">Details</a>
        </div>
      </div>
      </div>
      </div>`
    ).join('')
})
})

//-----------------------Get Trending Movies---------------------------------
const Trending_apiUrl= 'https://api.themoviedb.org/3/trending/movie/day?api_key=085893799663f0096f9d370baf640f22'
axios
.get('https://api.themoviedb.org/3/trending/movie/day?api_key=085893799663f0096f9d370baf640f22')
.then(function (response) {
  // handle success
  console.log(response.data.results);
  document.getElementById("trend").innerHTML = response.data.results.map(item =>
      `
      <div class="card my-3 mx-4" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" >
        <div class="card-body bg-dark">
          <a><i class="far fa-bookmark test"onclick="WatchList(${item.id})"></i></a>
          <a><i class="far fa-heart mx-4 test"onclick="FavList(${item.id})"></i></a>
          <a href="#" class="btn text-white test"data-bs-toggle="modal" data-bs-target="#modalBox" onclick="MoviesDetails(${item.id})">Details</a>
        </div>
      </div>
      `
      )
})

//-----------------------model Detels---------------------------------
function MoviesDetails( movie_id){
  //console. log(movie_id,"id");
  axios
  .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=085893799663f0096f9d370baf640f22&append_to_response=videos,similar,credits`)
  .then ((res) =>{console. log(res.data)
  let item = res.data;
  let char = item.credits.cast;
  var charNames = [];
  for(var i = 0; i < 4; i++){
    charNames.push(char[i].name);
  }
  let genre = res.data.genres;
  var genreList = genre.map((genre) =>{
    return genre.name;
  });
  let video = res.data.videos.results;
  console.log(video);
  let similarMovies = res.data.similar.results;
  console.log(similarMovies);
  var similarMoviesList = similarMovies.map((element)=>{
    return element;
  })
  document.getElementById("modalBox").innerHTML=
  `
  <div class="modal-dialog modal-xl modal-dialog-centered "">
    <div class="modal-content bg-darkGray p-4 text-center">
      <h2>${item.title}
      <div type="button" class="float-end" data-bs-dismiss="modal" aria-label="Close">
      <i class="fas fa-times white-text" aria-hidden="true"></i>
      </div>
      </h2>
      <p>${item.release_data} | ${genreList} </p>
      <p>${item.overview}</p>
      <p>Cast:${charNames}</p>
    <div>
      <p>Video Clip<p>
      <iframe height="400" width="100%"src="https://www.youtube.com/embed/${video[0].key}"</iframe>
    </div>
  </div>
</div>`;
})
}
//////////////////////////////////////////////////////
function FavList(movie_id){
  if(!favCards.includes(movie_id)){
    favCards.push(movie_id);
    console.log(favCards,'id-FavList');
    localStorage.setItem("favCards", JSON.stringify(favCards));
    console.log(localStorage.favCards);
  }
}


//////////////////////////////////////////////////////
function WatchList(movie_id){
  if(!watcheCards.includes(movie_id)){
    watcheCards.push(movie_id);
    console.log(watcheCards,'id-WatchList');
    localStorage.setItem("watcheCards", JSON.stringify(watcheCards));
    console.log(localStorage.watcheCards);
  }
}