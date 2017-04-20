# Instapage
A page that shows images from an instagram account.

## Install
- `$ npm install`
- `$ bower install`

You will need an access token from instagram.
To get an access token replace `CLIENT_ID` with your client id in the following url:  
`https://www.instagram.com/oauth/authorize/?client_id=CLIENT_ID&redirect_uri=http://localhost:8080/oauth&response_type=token`  
and get the access token from the response url.  

Replace the values in the following code:
```javascript
// assets/js/app.js

var feed = new Instafeed({
    accessToken: 'ACCESS_TOKEN',
    target: 'instafeed',
    get: 'user',
    userId: 'USER_ID',
    links: true,
    limit: 8,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    template:  '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
});
```

To run the application:  
```
$ gulp

```
This will compile all assets, set up watchers for sass, html, js and will start a development server with live reload.  


### Note  
read the following issue: [instafeed.js/issues/345](https://github.com/stevenschobert/instafeed.js/issues/345)
