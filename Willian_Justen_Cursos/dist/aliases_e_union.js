"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}
function logInfo(uid, user) {
    console.log(`A product with ${uid} has a title as ${user}.`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform("ios");
logDetails(123, "Sapato");
logDetails("123", "Sapato");
logInfo(123, "Wanderson");
logInfo("123", "Wanderson");
