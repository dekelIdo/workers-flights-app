import 'zone.js/node';
import express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT =  4000;
const DIST_FOLDER = join(process.cwd(), 'dist/workers-flights-app/browser');

const app = express();

app.use(express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  const indexHtml = readFileSync(join(DIST_FOLDER, 'index.html')).toString();
  res.send(indexHtml);
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
