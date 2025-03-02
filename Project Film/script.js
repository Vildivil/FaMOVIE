let currentMovieId = null;

const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        genre: ["Action", "Sci-Fi"],
        description: "A thief who enters the dreams of others to steal secrets.",
        image: "https://i.pinimg.com/736x/46/bc/71/46bc71c6202dac9e623721da7c6f1c71.jpg",
        ratings: [4.5],
        reviews: []
    },
    {
    "id": 2,
    "title": "12 Angry Men",
    "year": 1957,
    "director": "Sidney Lumet",
    "genre": ["Drama"],
    "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "image": "https://i.pinimg.com/736x/14/8a/86/148a8698a717df5a78494fc5a7078dff.jpg",
    "ratings": [4.9],
    "reviews": []
    },
    {
        "id": 3,
        "title": "Fight Club",
        "year": 1999,
        "director": "David Fincher",
        "genre": ["Drama", "Thriller"],
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
        "image": "https://i.pinimg.com/736x/d8/9e/b0/d89eb04d03c62acb1d463d50db4560ce.jpg",
        "ratings": [4.8],
    },
    {
        "id": 4,
        "title": "The Matrix",
        "year": 1999,
        "director": "Lana Wachowski, Lilly Wachowski",
        "genre": ["Action", "Sci-Fi"],
        "description": "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        "image": "https://i.pinimg.com/736x/26/e3/bc/26e3bcc9b4c10aa9ca8a717200e94e58.jpg",
        "ratings": [4.8],
    },
{
    "id": 5,
    "title": "The Silence of the Lambs",
    "year": 1991,
    "director": "Jonathan Demme",
    "genre": ["Crime", "Drama", "Thriller"],
    "description": "A young FBI cadet must receive the help of an incarcerated cannibal killer to catch another serial killer.",
    "image": "https://i.pinimg.com/736x/32/51/d6/3251d6ab51396fc2fca81fc54fa5e02d.jpg",
    "ratings": [4.8],
    "reviews": []
},
    {
        "id": 6,
        "title": "Interstellar",
        "year": 2014,
        "director": "Christopher Nolan",
        "genre": ["Adventure", "Drama", "Sci-Fi"],
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "image": "https://i.pinimg.com/736x/5d/52/3a/5d523ab5788c5be5fc92a2717a83019b.jpg",
        "ratings": [4.6],
    },
    {
        "id": 7,
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "genre": ["Action", "Crime", "Drama"],
        "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc on Gotham.",
        "image": "https://i.pinimg.com/736x/74/76/49/74764995404b53abf0447cfa3a2b1226.jpg",
        "ratings": [4.9],
    },
    {
        "id": 8,
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "genre": ["Crime", "Drama"],
        "description": "The lives of two hitmen, a boxer, a gangster and his wife intertwine in a tale of violence and redemption.",
        "image": "https://i.pinimg.com/736x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg",
        "ratings": [4.7],
    },
    {
        "id": 9,
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "genre": ["Crime", "Drama"],
        "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
        "image": "https://i.pinimg.com/736x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg",
        "ratings": [4.9],
    },
    {
        "id": 10,
        "title": "Forrest Gump",
        "year": 1994,
        "director": "Robert Zemeckis",
        "genre": ["Drama", "Romance"],
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the perspective of an Alabama man with an IQ of 75.",
        "image": "https://i.pinimg.com/736x/02/6b/0d/026b0d4dab1abe1c5f4460d6a45ae2ab.jpg",
        "ratings": [4.8],
    },
    {
        "id": 11,
        "title": "Schindler's List",
        "year": 1993,
        "director": "Steven Spielberg",
        "genre": ["Biography", "Drama", "History"],
        "description": "In German-occupied Poland, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.",
        "image": "https://i.pinimg.com/736x/7c/f9/c3/7cf9c3f24d9e7fc270e897bd6164983b.jpg",
        "ratings": [4.9],
    },
    {
        "id": 12,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genre": ["Drama"],
        "description": "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
        "image": "https://i.pinimg.com/736x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg",
        "ratings": [4.9],
    },
];

let currentUser = {
    id: 1,
    username: "moviefan",
    watchlist: [],
    reviews: []
};

function createMovieCard(movie) {
    return `
        <div class="movie-card" onclick="openMovieDetail(${movie.id})">
            <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x400'">
            <div class="movie-info">
                <h3>${movie.title} (${movie.year})</h3>
            </div>
        </div>
    `;
}

function displayMovies(moviesArray) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = moviesArray.map(createMovieCard).join('');
}

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
});

document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies);
});

// Responsiveness styling
const style = document.createElement('style');
style.innerHTML = `
    .movie-card {
        width: 100%;
        max-width: 300px;
        margin: 10px auto;
        text-align: center;
    }
    img {
        width: 100%;
        height: auto;
    }
    @media (min-width: 600px) {
        .movie-card {
            max-width: 250px;
        }
    }
`;
document.head.appendChild(style);