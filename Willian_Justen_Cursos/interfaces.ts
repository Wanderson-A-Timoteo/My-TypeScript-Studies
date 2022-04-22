// Interface é a descrição da estrutura de objetos

interface IGames {
  id?: number | string;
  title: string;
  description: string;
  readonly genre: string; // Caso eu não queira deixar modificar após definido seu tipo podemos definir com Reaconly
  platform?: string[];
  getSimiliars?:(title: string) => void;
}

const tlou: IGames = {
  id: 123,
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimiliars:(title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou.genre);

if (tlou.getSimiliars) {
  tlou.getSimiliars(tlou.title);
}

interface IDLC extends IGames{
  originalGame: IGames;
  newContent: string[];
}

const leftbehind: IDLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"]
}

class CreateGames implements IGames {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
