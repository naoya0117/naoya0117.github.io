const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom"); // React Router v4以降
const App = require("./App"); // React アプリケーションのエントリーポイント

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    const context = {};
    const appString = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>,
    );

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My React App</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></script> <!-- クライアント側で React アプリを初期化するためのバンドルファイル -->
      </body>
    </html>
  `;

    // レスポンスとして HTML を返す
    res.send(html);
});

// サーバーを起動
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
