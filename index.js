const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
app.listen(process.env.RUNNING_PORT, function () {
  console.log('Listening on port 5500');
});
