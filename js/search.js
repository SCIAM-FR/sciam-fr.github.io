(function() {
    function displaySearchResults(results, store) {
      
      var searchResults = document.getElementById('search-results');
 
      if (results.length) { 
        var appendString = '';

        for (var i = 0; i < results.length; i++) {
          var item = store[results[i].ref];
          appendString += 
          `<div class= "gap-4">
            <li><div class="bg-white rounded overflow-hidden shadow-lg">
          <a href="${item.url}"><h3 class="text-xl font-bold mb-2">${item.title}</h3></a>
          <p class="text-sm text-gray-500 mb-4">${item.author}</p>
          <p>${item.content.substring(0, 150)}...</p></li>
          </div>`;
        }
  
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = '<li>Pas de résultat trouvé</li>';
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
  
      // Initalize lunr with the fields it will be searching on. I've given title
      // a boost of 10 to indicate matches on this field are more important.
      var idx = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('author');
        this.field('content');

      for (var key in window.store) { // Add the data to lunr
        this.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'content': window.store[key].content,
        });
        }   
        });
        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
     console.log("results", results);  
  
      
    }
  })();