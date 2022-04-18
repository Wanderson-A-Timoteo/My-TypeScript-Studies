// Type alias
type Uid = number | string

function logDetails(uid: number | string, item : string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
}
function logInfo(uid: number | string, user : string) {
  console.log(`A product with ${uid} has a title as ${user}.`)
}


type Platform = 'Windows' | 'Linux' | 'Mc Os' | 'ios'

function renderPlatform(platform : Platform) {
  return platform
}
renderPlatform("ios");

logDetails(123, "Sapato")
logDetails("123", "Sapato")

logInfo(123, "Wanderson")
logInfo("123", "Wanderson")