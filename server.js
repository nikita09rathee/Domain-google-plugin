const express = require('express');
const app = express();
const port = 5000;

app.get('/:domain', (req, res) => {
  const domain = req.params.domain;
  //console.log(domain);
  
  
  res.json({ data: domain });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
