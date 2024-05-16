document.addEventListener('DOMContentLoaded', function() {
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        var idx = lunr(function () {
          this.ref('id')
          this.field('title')
          this.field('content')
  
          data.forEach(function (doc) {
            this.add(doc)
          }, this)
        });
  
        // Fonction de recherche
        function search(query) {
          return idx.search(query).map(result => {
            return data.find(d => d.id === result.ref);
          });
        }
  
        // Exemple d'utilisation
        var results = search('spring');  // Remplacez 'exemple' par votre terme de recherche
        console.log(results);  // Affiche les résultats de recherche dans la console
      });
  });