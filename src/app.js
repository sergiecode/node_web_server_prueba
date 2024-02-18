const { envs } = require('./config/envs');
const { startServer } = require('./server/server');

(async () => {
  main();
})();

function main() {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
}
