"use strict";
// Interface é a descrição da estrutura de objetos
const tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimiliars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
console.log(tlou.title);
tlou.getSimiliars(tlou.title);
