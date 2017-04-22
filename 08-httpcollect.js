/*## HTTP COLLECT (Exercise 8 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.*/

let http = require('http')

http.get(process.argv[2], (res) => {
    let rawData = '';
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        rawData += chunk;        
    })   
    res.on('end', () => {
        try {
            printAnswer(rawData)
        } catch (e) {
            console.error(e.message);
        }
    });   
})

function printAnswer(rawData) {
    // 1) The first line you write should just be an integer representing the number of characters received from the server
    console.log(rawData.length)

    // 2) The second line should contain the complete String of characters sent by the server
    console.log(rawData)  
}