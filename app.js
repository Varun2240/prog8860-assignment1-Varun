const http = require('http');

// Server details
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // HTML content to serve
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Happy Reading Week!</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          background-color: #FFFAF0; 
          color: #2E4053; 
          text-align: center; 
          padding: 50px; 
        }
        h1 {
          font-size: 2.5em;
          color: #2980B9;
        }
        p {
          font-size: 1.5em;
          color: #16A085;
        }
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: #FDFEFE;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        footer {
          margin-top: 30px;
          font-size: 1em;
          color: #AAB7B8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 Happy Reading Week! 📚</h1>
        <p>Take time to relax, explore new books, and enjoy your time off!</p>
        
      </div>
      <footer>
        <p>✨ Brought to you by Node.js! ✨</p>
      </footer>
    </body>
    </html>
  `);
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
