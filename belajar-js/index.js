const animeList = [

    {
      title: "Demon Slayer",
      rating: 8.4,
      year: 2019,
      genre: "Action, Fantasy"
    },
  
    {
      title: "Naruto",
      rating: 7.9,
      year: 2002,
      genre: "Action, Adventure"
    },
  
    {
      title: "One Piece",
      rating: 8.8,
      year: 1999,
      genre: "Action, Adventure"
    },
  
    {
      title: "My Hero Academia",
      rating: 7.6,
      year: 2016,
      genre: "Action, Superhero"
    },
  
    {
      title: "Fullmetal Alchemist: Brotherhood",
      rating: 9.5,
      year: 2009,
      genre: "Action, Adventure, Fantasy"
    },
  
    {
      title: "Death Note",
      rating: 8.9,
      year: 2006,
      genre: "Thriller, Supernatural"
    },
  
    {
      title: "Jujutsu Kaisen",
      rating: 8.2,
      year: 2020,
      genre: "Action, Supernatural"
    },
  
    {
      title: "Attack on Titan",
      rating: 9.3,
      year: 2013,
      genre: "Action, Drama"
    },
  
    {
      title: "Sword Art Online",
      rating: 6.9,
      year: 2012,
      genre: "Fantasy, Adventure"
    },
  
    {
      title: "Tokyo Revengers",
      rating: 7.3,
      year: 2021,
      genre: "Action, Drama"
    },
  
    {
      title: "Ex-Arm",
      rating: 3.2,
      year: 2021,
      genre: "Sci-Fi, Action"
    },
  
    {
      title: "Pupa",
      rating: 4.7,
      year: 2014,
      genre: "Horror"
    },
  
    {
      title: "Mars of Destruction",
      rating: 2.9,
      year: 2005,
      genre: "Sci-Fi"
    },
  
    {
      title: "Vampire Holmes",
      rating: 3.5,
      year: 2015,
      genre: "Mystery, Comedy"
    },
    
    {
      title: "Skelter Heaven",
      rating: 2.1,
      year: 2004,
      genre: "Mecha, Sci-Fi"
    },
  
    {
      title: "Eiken",
      rating: 4.3,
      year: 2003,
      genre: "Ecchi, Comedy"
    },
  
    {
      title: "Abunai Sisters: Koko & Mika",
      rating: 3.8,
      year: 2009,
      genre: "Comedy"
    },
    
    {
      title: "Chargeman Ken!",
      rating: 5.0,
      year: 1974,
      genre: "Sci-Fi, Action"
    },
  
    {
      title: "Bikini Warriors",
      rating: 6.2,
      year: 2015,
      genre: "Ecchi, Comedy, Fantasy"
    },
  
    {
      title: "Big Order",
      rating: 5.5,
      year: 2016,
      genre: "Action, Supernatural"
    }
  
  ];
  
  
  function listAnime() {
    return new Promise(() => {
      setTimeout(() => {
        animeList.forEach((movie) => {
          console.log(movie);
          
        })
      }, 1500)
    })
  };

  function godAnime(searchTitle) {
      return new Promise((resolve, reject) => {
       setTimeout(() => {
        const animeBagus = animeList.filter(movie => movie.rating >= 7.5);
        animeBagus.sort((a, b) => b.rating - a.rating);
        const searchAnime = animeBagus.find(movie => movie.title === searchTitle);

        if (!searchAnime) {
          reject(`Anime Dengan Judul ${searchTitle} Tidak Ditemukan!...`);
        } else {
          resolve(searchAnime);
        }
       }, 1500);
      });
  }

  function badAnime(searchMovie) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const animeBad = animeList.filter(movie => movie.rating <= 7.5);
        animeBad.sort((a, b) => b.rating - a.rating);
        const searchBad = animeBad.find(movie => movie.title === searchMovie);

        if (!searchBad) {
          reject(`Anime Dengan Nama ${searchMovie} Tidak ditemukan`);
        } else {
          resolve(searchBad);
        }

      }, 1500);
    })
  };

  function genre(searchGenre) {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        const genreAnime = animeList.filter(movie => movie.genre.includes(searchGenre));

        if (genreAnime) {
          resolve(genreAnime);
        } else{
          reject(`Anime dengan Genre ${searchGenre} Tidak ditemukan!...`)
        }
      }, 1500);
     })

  }


  async function listAnimeDisplay() {
      const anime = await listAnime();
      console.log(anime);  
  };

  async function godAnimeDisplay(searchTitle) {
      try {
        
        if (searchTitle) {

          const anime = await godAnime(searchTitle)
          console.log('Anime Ditemukan:');
          console.log('Name Anime', anime.title);
          console.log('Rating Anime', anime.rating);
          console.log('Years Anime', anime.year);
          console.log('Genre Anime', anime.genre);

        } else {
          const animeBagus = animeList.filter(movie => movie.rating >= 7.5);
          animeBagus.sort((a, b) => b.rating - a.rating);

          return new Promise(() => {
            setTimeout(() => {
              animeBagus.forEach((movie) => {
                console.log(movie);
              })
            }, 1500);
          });

        }

      } catch (error) {
        console.log(error);
        
      }
  };

  async function badAnimeDisplay(searchMovie) {
      try {
        if (searchMovie) {

          const movie = await badAnime(searchMovie)
          console.log('Anime Ditemukan:');
          console.log('Name Anime', movie.title);
          console.log('Rating Anime', movie.rating);
          console.log('Years Anime', movie.year);
          console.log('Genre Anime', movie.genre);
    
        } else{
          const animeBad = animeList.filter(movie => movie.rating <= 7.5);
          animeBad.sort((a, b) => b.rating - a.rating);

          return new Promise(() => {
            setTimeout(() => {
              animeBad.forEach((movie) => {
                console.log(movie);
              })
            }, 1500);
          })
        }

      } catch (error) {
        console.log(error);
      }
  };

  async function genreDisplay(searchGenre) {
      try {
        const genreList = await genre(searchGenre);
        console.log(genreList);
      } catch (error) {
        console.log(error);
      }
  };


