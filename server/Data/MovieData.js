const mongoose = require('mongoose');

const MoviesData = [
    {
        name: "Spirited Away",
        desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        titleImage: "spirited_away.jpg",
        image: "spirited_away_cover.jpg",
        category: "Animation",
        language: "Japanese",
        year: 2001,
        time: 125,
        video: "",
        rate: 9
    },
    {
        name: "Your Name",
        desc: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        titleImage: "your_name.jpg",
        image: "your_name_cover.jpg",
        category: "Animation",
        language: "Japanese",
        year: 2016,
        time: 106,
        video: "",
        rate: 8
    },
    {
        name: "Princess Mononoke",
        desc: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
        titleImage: "princess_mononoke.jpg",
        image: "princess_mononoke_cover.jpg",
        category: "Animation",
        language: "Japanese",
        year: 1997,
        time: 134,
        video: "",
        rate: 7
    },
    {
        name: "Once Upon a Time in Anatolia",
        desc: "A group of men set out in search of a dead body in the Anatolian steppes.",
        titleImage: "once_upon_a_time_in_anatolia.jpg",
        image: "once_upon_a_time_in_anatolia_cover.jpg",
        category: "Drama",
        language: "Turkish",
        year: 2011,
        time: 157,
        video: "",
        rate: 8
    },
    {
        name: "Winter Sleep",
        desc: "A hotel owner and landlord in a remote Turkish village deals with conflicts within his family and a tenant behind on his rent.",
        titleImage: "winter_sleep.jpg",
        image: "winter_sleep_cover.jpg",
        category: "Drama",
        language: "Turkish",
        year: 2014,
        time: 196,
        video: "",
        rate: 6
    },
    {
        name: "Y Tu Mamá También",
        desc: "In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.",
        titleImage: "y_tu_mama_tambien.jpg",
        image: "y_tu_mama_tambien_cover.jpg",
        category: "Drama",
        language: "Spanish",
        year: 2001,
        time: 106,
        video: "",
        rate: 9
    },
    {
        name: "A Separation",
        desc: "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
        titleImage: "a_separation.jpg",
        image: "a_separation_cover.jpg",
        category: "Drama",
        language: "Persian",
        year: 2011,
        time: 123,
        video: "",
        rate: 8
    },
    {
        name: "Children of Heaven",
        desc: "After a boy loses his sister's pair of shoes, he goes on a series of adventures in order to find them. When he can't, he tries a new way to 'win' a new pair.",
        titleImage: "children_of_heaven.jpg",
        image: "children_of_heaven_cover.jpg",
        category: "Drama",
        language: "Persian",
        year: 1997,
        time: 89,
        video: "",
        rate: 7
    },
    {
        name: "Oldboy",
        desc: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
        titleImage: "oldboy.jpg",
        image: "oldboy_cover.jpg",
        category: "Action",
        language: "Korean",
        year: 2003,
        time: 120,
        video: "",
        rate: 9
    },
    {
        name: "The Room",
        desc: "Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored with him and decides to seduce his best friend, Mark.",
        titleImage: "the_room.jpg",
        image: "the_room_cover.jpg",
        category: "Drama",
        language: "English",
        year: 2003,
        time: 99,
        video: "",
        rate: 3
    },
    {
        name: "Manos: The Hands of Fate",
        desc: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
        titleImage: "manos_the_hands_of_fate.jpg",
        image: "manos_the_hands_of_fate_cover.jpg",
        category: "Horror",
        language: "English",
        year: 1966,
        time: 74,
        video: "",
        rate: 4
    }
];


module.exports = MoviesData;