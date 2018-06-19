const express = require('express');
const app = express();
const PORT = 8080;
let messages = {
    'id': {
        '1': {
            title: 'Yo',
            text: 'Cake',
            date: '1976-02-13',
            location: 'Moravian Hall Square',
            sTime: '08:24',
            eTime: '09:24',
            creator: 'TJ'
        },
        '2': {
            title: 'Sup',
            text: 'Food',
            date: '1976-02-14',
            location: 'Nazareth Circle',
            sTime: '06:54',
            eTime: '08:00',
            creator: 'TJ'
        }
    }
};

app.get('/', (req, res, next) => {
    res.status(200).send(messages['id'][req.query.id]);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});