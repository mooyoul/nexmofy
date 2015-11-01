# nexmofy
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url]

Nexmo callback receiver which based on Node's EventEmiiter.
Nexmofy provides extensible APis.


## Getting Started
### Create new HTTP Server which handle Callback Requests.
```javascript
var nexmofy = require('nexmofy');
nexmofy.listen(9000);
```

... or you can register routes on your own Express Application.
```javascript
var express = require('express'),
    nexmofy = require('nexmofy');

var myApp = express();
...
nexmofy.registerRoutes(myApp);
```

### Register Event Listeners
```javascript
nexmofy.channel.on('onSMSReceived', function (message) {
    console.log('got new message: ', message);
});
```

### Register Callback URL on Nexmo Dashboard
**NOTE: nexmofy`s API Endpoint is:**  `/api/nexmo/sms/callback`.

### Enjoy! :)


## Events
### onSMSReceived(payload)
#### Payload Information
Name | Type | Description | Original Key
------------ | ------------- | ------------- | -------------
id | String | Message ID | messageId
from | String | Phone Number which Message was sent from. | msisdn
to | String | Phone Number which Message was sent to. | to
text | String | Message Body | text
type | String | Type | type
keyword | String | Keyword | keyword
timestamp | Date | Message timestamp | message-timestamp


## Milestone
- Changeable API Endpoint path

## Author
[MooYeol, Lee (Prescott)](https://github.com/mooyoul)

## License
[MIT](LICENSE)


[npm-image]: https://img.shields.io/npm/v/nexmofy.svg
[npm-url]: https://npmjs.org/package/nexmofy
[npm-downloads-image]: https://img.shields.io/npm/dm/nexmofy.svg
[npm-downloads-url]: https://npmjs.org/package/nexmofy
[dep-status-image]: https://img.shields.io/david/mooyoul/nexmofy.svg
[dep-status-url]: https://david-dm.org/mooyoul/nexmofy
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE