/* =============================================================================
 * EECE/CS 3093C Software Engineering — copied from Lab1
 * client.js — code skeleton provided by Dr. Phu Phung
 * Code complete implementation by Kate Liang
 * ===============================================================================
 */
// var socket = io(); //connect to the Socket.io Server
// socket.on("connect", () => { //connected to the server
//   console.log(`Connected to Socket.io server: 
//     ${socket.io.opts.hostname}, port: ${socket.io.opts.port}`);
// });


// UI DOM references
var searchBtnElm = document.getElementById('search-button');
if(!searchBtnElm) {
    console.log("Error in getting 'search-button' button");
}
searchBtnElm.addEventListener('click', ()=>{
    search();
    searchInput.value = ''; //clear the field after an explicit Enter search
});

var searchInput = document.getElementById('search-input');
if(!searchInput) {
    console.log("Error in getting 'search-input' field");
}

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    search();
    searchInput.value = ''; //clear the field after an Enter search
  }
});

function search() {
    var query = searchInput.value.trim();
    if (!query || query.length === 0) return;   // empty searches are ignored
    console.log(`Debug>Chat message: ${query}`); //for UI testing only
}

function displaySearch(data) {
    //TODO
}