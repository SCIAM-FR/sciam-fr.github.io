(function() {
    function displaySearchResults(results, store) {
      
      var searchResults = document.getElementById('search-results');
 
      if (results.length) { 
        var appendString = '';

        for (var i = 0; i < results.length; i++) {
          var item = store[results[i].ref];
          console.log(item); 
          if (!item.url) {
            console.error('URL is undefined for:', item.url);
          }
          appendString += 
            `<li class="p-4 w-1/4">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-shadow duration-300">
                  <div class="p-2">
                    <a href="${item.url}"><h3 class="text-xl text-navysciam font-sans font-bold mb-2">${item.title}</h3></a>
                    <p class="text-base text-gray-500 mb-4">Ecrit par ${item.author}</p>
                  </div>
                </div>
            </li>`;
        }
         //  <p>${item.content.substring(0, 150)}...</p>  
         
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = '<div>Pas de résultat trouvé</div>';
      }
    }
  
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
  
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTerm = getQueryVariable('query');
  
    if (searchTerm) {
      document.getElementById('search-box').setAttribute("value", searchTerm);
  
      var idx = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('author');

      for (var key in window.store) {
        this.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
        });
        }   
        });
        var results = idx.search(searchTerm);
        displaySearchResults(results, window.store);
    }
  })();