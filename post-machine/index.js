window.ready(

var request = require('request');

var client = new request({
    consumer_key: '4ZgxsRYoGsQViRpQcmD5uSQaY',
    consumer_secret: 'H0Dqc6IemwM1Gfp40OpiI6UGMuhRiEjbCVNylXXlGjvofPN332',
    access_token_key: '707129151417880576-cUWhMrvj0EsyMWA5kDBa0YBxHQRbmqg',
    access_token_secret: 'my59qAm4i12B23BiMJf2vjwszyOj0sKWsqD0Gte9E5PWr'
});

client.post('statuses/update', { status: 'Learning how to learn' },
    function (response) {
        console.log(response);  // Raw response object.
    });



);

