const mongoose = require('mongoose');

const MoviesData = [
    {
        name: "The Shawshank Redemption",
        desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        titleImage: "shawshank_redemption.jpg",
        image: "shawshank_redemption_cover.jpg",
        category: "Drama",
        language: "English",
        year: 1994,
        time: 142,
        video: "",
        rate: 9.3
    },
    {
        name: "The Godfather",
        desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        titleImage: "the_godfather.jpg",
        image: "the_godfather_cover.jpg",
        category: "Crime",
        language: "English",
        year: 1972,
        time: 175,
        video: "",
        rate: 9.2
    },
    {
        name: "The Dark Knight",
        desc: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        titleImage: "the_dark_knight.jpg",
        image: "the_dark_knight_cover.jpg",
        category: "Action",
        language: "English",
        year: 2008,
        time: 152,
        video: "",
        rate: 9.0
    },
    {
        name: "12 Angry Men",
        desc: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        titleImage: "12_angry_men.jpg",
        image: "12_angry_men_cover.jpg",
        category: "Drama",
        language: "English",
        year: 1957,
        time: 96,
        video: "",
        rate: 9.0
    },
    {
        name: "Schindler's List",
        desc: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        titleImage: "schindlers_list.jpg",
        image: "schindlers_list_cover.jpg",
        category: "Biography",
        language: "English",
        year: 1993,
        time: 195,
        video: "",
        rate: 8.9
    },
    {
        name: "The Lord of the Rings: The Return of the King",
        desc: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        titleImage: "return_of_the_king.jpg",
        image: "return_of_the_king_cover.jpg",
        category: "Adventure",
        language: "English",
        year: 2003,
        time: 201,
        video: "",
        rate: 8.9
    },
    {
        name: "Pulp Fiction",
        desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        titleImage: "pulp_fiction.jpg",
        image: "pulp_fiction_cover.jpg",
        category: "Crime",
        language: "English",
        year: 1994,
        time: 154,
        video: "",
        rate: 8.9
    },
    {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        titleImage: "fellowship_of_the_ring.jpg",
        image: "fellowship_of_the_ring_cover.jpg",
        category: "Adventure",
        language: "English",
        year: 2001,
        time: 178,
        video: "",
        rate: 8.8
    },
    {
        name: "Forrest Gump",
        desc: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        titleImage: "forrest_gump.jpg",
        image: "forrest_gump_cover.jpg",
        category: "Drama",
        language: "English",
        year: 1994,
        time: 142,
        video: "",
        rate: 8.8
    },
    {
        name: "Inception",
        desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        titleImage: "inception.jpg",
        image: "inception_cover.jpg",
        category: "Action",
        language: "English",
        year: 2010,
        time: 148,
        video: "",
        rate: 8.8
    },
    {
        name: "Fight Club",
        desc: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        titleImage: "fight_club.jpg",
        image: "fight_club_cover.jpg",
        category: "Drama",
        language: "English",
        year: 1999,
        time: 139,
        video: "",
        rate: 8.8
    }
]


module.exports = MoviesData;