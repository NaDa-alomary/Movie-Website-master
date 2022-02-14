const apiKey= `085893799663f0096f9d370baf640f22`;
const imgPath = "https://image.tmdb.org/t/p/w342";
let watchedList=[];
let favoriteList=[];




//-------------------------const imgPath----------------------//

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
        <div class="card" style="width: 18rem;">
          <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" >
          <div class="card-body bg-dark">
            <a href="#" class="btn text-white"><i class="far fa-bookmark"></i></a>
            <a href="#" class="btn text-white"><i class="far fa-heart"></i></a>
            <a href="#" class="btn text-white">Details</a>
          </div>
        </div>
        `
        )

  })
}



//------------------ Get Movies by search ------------------------
<<<<<<< HEAD
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",(event)=>{
=======
const form = document.querySelector("userInput");
form.addEventListener("submit",(event)=>{
>>>>>>> 1faf1e327d568ab901da9e8bd60673b1c1ed2f23
  event.preventDefault();
  console.log("input")
  let myInput = document.getElementById("userInput").value;
  console.log(myInput);
  axios
  .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adlt=false&query=${myInput}`)
  .then ((res) =>{ console.log(res.data.results)
    document.getElementById("searchedMovie").innerHTML = res.data.results.map(item=>
      `
      <div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" >
        <div class="card-body bg-dark">
          <a href="#" class="btn text-white"><i class="far fa-bookmark"></i></a>
          <a href="#" class="btn text-white"><i class="far fa-heart"></i></a>
          <a href="#" class="btn text-white">Details</a>
        </div>
      </div>
      `
    ).join('')
})
})

//-----------------------Get Trending Movies---------------------------------

axios
<<<<<<< HEAD
.get('https://api.themoviedb.org/3/trending/movie/day?api_key=085893799663f0096f9d370baf640f22')
.then(function (response) {
  // handle success
  console.log(response.data.results);
  document.getElementById("trend").innerHTML = response.data.results.map(item =>
      `
      <div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" >
        <div class="card-body bg-dark">
          <a href="#" class="btn text-white"><i class="far fa-bookmark"></i></a>
          <a href="#" class="btn text-white"><i class="far fa-heart"></i></a>
          <a href="#" class="btn text-white">Details</a>
        </div>
      </div>
      `
      )

=======
.get(Trending_apiUrl)
.then ((res) =>{ console.log(res.data.results)
  document.getElementById("trend").innerHTML = res.data.results.map(item=>
    `<div class="col-6 col-md-3 mb-4">
    <div class="card border-0">
    <img src=${imgpath+item.poster_path}>
    <div class="text-center bg-black justify-content-md-between align-items-center">
    <a class="btn test"data-bs-toggle="modal"data-bs-target="#theModalBox" onclick="MoviesDetails(${item.id}">Details</a>
    <a><i class="far fa-heart btn p-1 test" onclick="FavList(${item.id}"></i></a>
    <a><i class="fas fa-plus btn p-1 test" onclick="watchList(${item.id}"></i></a>
    </div>
    </div>
    </div>`
  ).join('')
>>>>>>> 1faf1e327d568ab901da9e8bd60673b1c1ed2f23
})

