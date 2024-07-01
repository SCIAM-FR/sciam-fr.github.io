(function() {
    function displaySearchResults(results, store) {
      
      function decodeHtmlEntities(str) {
        var txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
      }
      
      var searchResults = document.getElementById('search-results');

      if (results.length) { 
        var appendString = '';
        for (var i = 0; i < results.length; i++) {
          var item = store[results[i].ref];
          if (!item.url) {
            console.error('URL is undefined for:', item.url);
          }
          appendString += 
            `<div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <div class="h-60 w-full pb-[33.33%] bg-contain bg-no-repeat bg-center rounded-xl"
                 style="background-image: url('${item.image}');"></div>
            <hr class="bg-zinc-200"/>     
            <div class="p-6">
                <div class="text-xl font-bold mb-2 truncate">
                    <a href="${item.url}" class="hover:text-navysciam">${decodeHtmlEntities(item.title)}</a>
                </div>
                <div class="flex items-center text-sm text-gray-500 mb-4">
                    <img class="rounded-full w-11 h-11"
                        src="${item.authorImage}" alt="${item.author}">
                    <div class="flex flex-col pl-4">
                        <span class="text-base font-bold text-navysciam">
                            <a href="${item.authorUrl}">${item.author}</a>
                        </span>
                        <div class="flex">
                            <span class="text-base font-normal text-navysciam">
                                ${item.date}
                            </span>
                            <p class="text-navysciam pl-2">• ${item.readingTime} min de lecture</p>
                        </div>
                    </div>
                </div>
                <p class="line-clamp-3">${decodeHtmlEntities(item.excerpt)}</p>
                <a href="${item.url}" class="text-navysciam hover:text-yellowsciam transition duration-300 ease-in-out">Read more...</a>
            </div>
        </div>
            `;
        }
         
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = `
        <div class="flex items-center justify-center col-span-3"">
          <div class="text-center">
            <img class="mx-auto mb-6" src="/images/visuals/not-found.png" style="width: 200px; height: 150px;" alt="No results found">
            <p class="text-2xl font-bold text-navysciam">Pas de résultat trouvé</p>
          </div>
        </div>`;
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
      document.getElementById('search-term-display').textContent = searchTerm;
      var searchBox = document.getElementById('search-box');
        if (searchBox) searchBox.value = searchTerm;

      var idx = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('author');
        this.field('excerpt');
        this.field('url');

      for (var key in window.store) {
        this.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'excerpt': window.store[key].excerpt,
          'url': window.store[key].url,
        });
        }   
        });
        var results = idx.search(searchTerm);
        displaySearchResults(results, window.store);
    }
  })();