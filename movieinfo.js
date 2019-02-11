 $(document).ready(function(){
     //make a back button
       $("#backButton").click(function(){
           window.history.back();
       })
     //get the movie id from url
       const urlParams = new URLSearchParams(window.location.search);
       const myId = urlParams.get("id");
       console.log(myId);
       
        
        fetch("https://www.omdbapi.com/?i="+myId+"&apikey=78c2fa05")
        .then((res)=>res.json())
        .then((data)=>{
            let title = data.Title;
            let year = data.Year;
            let release = data.Released;
            let duration = data.Runtime;
            let genre = data.Genre;
            let rate = data.Rated;
            let imdbId = data.imdbID;
            let director = data.Director;
            let writer = data.Writer;
            let actors = data.Actors;
            let awards = data.Awards;
            let poster = data.Poster;
            let plot = data.Plot;
            $("#title").text(title);
            $("#year").text(year);
            $("#release").text(release);
            $("#duration").text(duration);
            $("#genre").text(genre);
            $("#rate").text(rate);
            $("#imdbId").text(imdbId);
            $("#director").text(director);
            $("#writer").text(writer);
            $("#actors").text(actors);
            $("#awards").text(awards);
            $("#plot").text(plot);
            $("#poster").html("<img src=\""+poster+"\"/>");
          
         console.log(poster);
         console.log(data);
        }) 
        .catch((err)=>console.log(err));
        
      
    })