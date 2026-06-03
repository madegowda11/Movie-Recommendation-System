function recommendMovie() {

    let genre = document.getElementById("genre").value;

    let movies = {
        "Action": [
            "John Wick ⭐ 7.9",
            "Mad Max ⭐ 8.1",
            "Avengers Endgame ⭐ 8.4"
        ],

        "Comedy": [
            "3 Idiots ⭐ 8.4",
            "The Hangover ⭐ 7.7",
            "Jumanji ⭐ 6.9"
        ],

        "Sci-Fi": [
            "Interstellar ⭐ 8.7",
            "Inception ⭐ 8.8",
            "The Martian ⭐ 8.0"
        ]
    };

    let result = document.getElementById("result");

    if(genre===""){
        result.innerHTML="<h3>Select a genre</h3>";
        return;
    }

    let output = "<h3>Recommended Movies</h3><ul>";

    movies[genre].forEach(movie=>{
        output += `<li>${movie}</li>`;
    });

    output += "</ul>";

    result.innerHTML = output;
}