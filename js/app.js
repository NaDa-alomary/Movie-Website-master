const apiKey= `085893799663f0096f9d370baf640f22`;

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
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",(event)=>{
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

})

