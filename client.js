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

// function search() {
//     var query = searchInput.value.trim();
//     if (!query || query.length === 0) return;   // empty searches are ignored
//     console.log(`Debug>Search: ${query}`); //for UI testing only
// }

const BASE_URL = "https://liangkr-uscities-microservices-beghadaqaabjgzd7.northcentralus-01.azurewebsites.net";
async function search() {
    const query = searchInput.value.trim();
    if (!query) return; // AC9: empty/whitespace-only queries never reach fetch()
    console.log (`Debug>query: ${query}`); //for UI testing only
    try {
        const response = await fetch(`$(BASE_URL)/uscities-search/${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error (`Unexpected status ${response.status}`); // AC4/AC11: fail safely, not open
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Malformed response'); // AC10: validate shape before display
        }
        displaySearch(data);
    } catch (err) {
        console.log(`Debug>search error: ${err.message}`);
        responses.textContent = 'Error: could not load results.'; // AC4/AC11
    }
}

var responsesElm = document.getElementById('responses');
function displaySearch(data) {
    if(!responsesElm) {
        console.log('Error in getting "reponses"');
        return;
    }
    //AC1/AC2: matches found - this version only shows the raw JSON text
    //AC3: no matches - explicit message instead of blank/empty display
    //textContent for now
    responsesElm.textContent = data.length === 0 ? 'No cities found' : JSON.stringify(data, null, 2);
}