const express = require('express');
const path = require('path');

function startServer(options) {
  const { port, public_path = 'public' } = options;
  const app = express();

  //* Middlewares

  //* Public Folder
  app.use(express.static(public_path));

  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = { startServer };
