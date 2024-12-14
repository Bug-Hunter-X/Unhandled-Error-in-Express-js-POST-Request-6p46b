const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user || !user.name || !user.email) {
    return res.status(400).send({ error: 'Invalid user data' });
  }
  //Handle other validation errors
  // ...
  res.status(201).send(user);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});