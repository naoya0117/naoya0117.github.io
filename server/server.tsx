import * as Express from 'express';

const app = Express();

app.listen(
    9000,
    () => {
        console.log('app listening on port 9000!');
     });
