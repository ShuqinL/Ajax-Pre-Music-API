 $(document).ready(function(){
         
            

            $("#searchButton").click(function(){
                let searchField = $("#search").val();
                let url="https://www.omdbapi.com/?s="+searchField+"&apikey=78c2fa05";

                fetch(url)
               .then((res)=>res.json())
               .then((data)=>{
                   let searchResults = data.Search;
                   for(let i=0; i<searchResults.length;i++){
                       let title = searchResults[i].Title;
                       let year=searchResults[i].Year;
                       let id=searchResults[i].imdbID;
                       let type=searchResults[i].Type;
                       let poster=searchResults[i].Poster;
                       // make a dropdown list with the search results
                       $("ul").append(`<li class="list-group-item"><a href="movieinfo.html?id=${id}">${title} ${year}</a></li>`);   

                   }
                   
               })
               .catch((err)=>console.log(err));
            })
        })