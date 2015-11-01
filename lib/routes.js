/**
 * Module dependencies.
 */
var moment = require('moment'),
    channel = require('./channel');

/**
 * Request Handler
 */
var handleRequest = function handleRequest (req, res) {
    var method = (req.method || '').toLowerCase(),
        payload = method === 'get' ? req.query : req.body;

    channel.emit('onSMSReceived', {
        id: payload.messageId,
        from: payload.msisdn,
        to: payload.to,
        text: payload.text,
        type: payload.type,
        keyword: payload.keyword,
        timestamp: moment.utc(payload['message-timestamp'], 'YYYY-MM-DD HH:mm:ss', true).toDate()
    });

    res.sendStatus(200);
};

/**
 * Expose Routes.
 */
module.exports = exports = function registerRoutes (app) {
    app.route('/api/nexmo/sms/callback')
        .get(handleRequest)
        .post(handleRequest);
};