const app = require('./lib/app');

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Listening to ${PORT}`));
