## inilization
```
npm init
npm install express --save
index.js file
```
## next
- use a json file to store data
- create routes for register login and profile
### register
- send 205 if already data in json file
- else insert data in to json file and send 200 
### creating a json file
- https://www.linkedin.com/pulse/create-apis-blog-nodejs-express-json-file-sarfaraz-unar-ndkxf?trk=public_post_main-feed-card_feed-article-content


- https://www.geeksforgeeks.org/how-base64-encoding-and-decoding-is-done-in-node-js/

```
const cors=require("cors")
var bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json()); 
```
- to avoid axios err
