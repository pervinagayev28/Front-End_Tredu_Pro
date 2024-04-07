let temp = 0;



// seed data
var courses = [
    [
        { "img": "https://tredu.io/assets/chess-f0f3dd4b.svg", "Kind": "Chess", "Content": "Master Strategy on the Board of Intellectual Battles." },
        { "img": "https://tredu.io/assets/robotics-7232b213.svg", "Kind": "Robotics", "Content": "Build, Code, Innovate: Your Robotic Odyssey Awaits." },
        { "img": "https://tredu.io/assets/music-37718504.svg", "Kind": "Music", "Content": "Harmonize Your Talents: Notes of Melody." }
    ],
    [
        { "img": "https://tredu.io/assets/music-37718504.svg", "Kind": "Music", "Content": "Harmonize Your Talents: Notes of Melody." },
        { "img": "https://tredu.io/assets/art-71a45ec0.svg", "Kind": "Art", "Content": "Unleash Creativity: Colors, Canvas, and Expressive Creations" },
        { "img": "https://tredu.io/assets/dance-c00d69b0.svg", "Kind": "Dance", "Content": "Move to the Beat: Find Your Groove on the Dance Floor." }
    ],
    [
        { "img": "https://tredu.io/assets/art-71a45ec0.svg", "Kind": "Art", "Content": "Unleash Creativity: Colors, Canvas, and Expressive Creations" },
        { "img": "https://tredu.io/assets/dance-c00d69b0.svg", "Kind": "Dance", "Content": "Move to the Beat: Find Your Groove on the Dance Floor." },
        { "img": "https://tredu.io/assets/music-37718504.svg", "Kind": "Sport", "Content": "Embrace Fitness and Fun: Where Skills and Sportsmanship Converge.." }
    ]
];




//actions



document.querySelector('#btnRight').addEventListener('click', () => {
    ChangeContent(courses[(temp + 1) === 3 ? temp = 0 : ++temp]);
});

document.querySelector('#btnLeft').addEventListener('click', () => {
    ChangeContent(courses[(temp - 1) < 0 ? temp = 2 : --temp]);
});





function ChangeContent(element) {
    let i = 1;
    element.forEach(course => {
        document.querySelector('#img' + i).src = course.img;
        document.querySelector('#h' + i).textContent = course.Kind;
        document.querySelector('#p' + i++).textContent = course.Content;
    });

}