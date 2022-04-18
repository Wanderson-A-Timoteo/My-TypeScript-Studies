// accountInfo
// charInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string; // ? significa que é opcional
} 

const account : AccountInfo = {
  id: 123,
  name: 'Wanderson' 
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'wandplay',
  level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'Wanderson',
  email: 'wanderson@hotmail.com', // email esta com ? sig. que é opcional, podemos declarar ou não
  nickname: 'wandplay',
  level: 100
}
