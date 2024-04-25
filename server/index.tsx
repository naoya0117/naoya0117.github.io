import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const app: express.Application = express();
const port: number = 9000;


app.use('/dist', express.static("dist"))

app.get('/*', (req: express.Request, res: express.Response) => {
  const context: {} = {};
  const reactComponent: string = renderToString(
    <App />
  );

  const pageHtml: string = `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <link href="/dist/src/index.css" rel="stylesheet">
          <title>counter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
          <div id="root">${reactComponent}</div>
          <script defer="defer" src="/dist/main.js"></script>
      </body>
  </html>
  `;

  res.send(pageHtml);
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});