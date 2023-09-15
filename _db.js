
let games = [
    {
        "id": "1",
        "title": "The Legend of Zelda: Breath of the Wild",
        "platform": ["Nintendo Switch", "Wii U"]
    },
    {
        "id": "2",
        "title": "Red Dead Redemption 2",
        "platform": ["PlayStation 4", "Xbox One", "PC"]
    },
    {
        "id": "3",
        "title": "Minecraft",
        "platform": ["PC", "PlayStation", "Xbox", "Nintendo Switch"]
    }
]


let reviews = [
    {
        "id": "1",
        "rating": 5,
        "content": "This game is amazing! I love the open world and the graphics.",
        "author_id": "1",
        "game_id": "2"
    },
    {
        "id": "2",
        "rating": 4,
        "content": "Zelda has a great story, but the controls are a bit clunky.",
        "author_id": "2",
        "game_id": "1"
    },
    {
        "id": "3",
        "rating": 4,
        "content": "Minecraft is a classic sandbox game that offers endless creativity.",
        "author_id": "3",
        "game_id": "3"
    },
    {
        "id": "4",
        "rating": 5,
        "content": "Minecraft is a classic sandbox game that offers endless creativity.",
        "author_id": "1",
        "game_id": "3"
    }
]

let authors = [
    {
        "id": "1",
        "name": "John Doe",
        "verified": true
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "verified": false
    },
    {
        "id": "3",
        "name": "Bob Johnson",
        "verified": true
    }
]

export default { games, authors, reviews }