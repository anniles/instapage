(function() {
    "use strict";

    //Set up instafeed
    var feed = new Instafeed({
        accessToken: '',
        target: 'instafeed',
        get: 'user',
        userId: '',
        // tagName: 'awesome',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template:  '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.created_time}}</div></div></div></div>',
        // https://gist.github.com/halfempty/d5dd9b636b69ffa2e5c5
        filter: function(image) {

            var date = new Date(image.created_time*1000);

            var m = date.getMonth();
            var d = date.getDate();
            var y = date.getFullYear();

            var month_names = [];
            month_names[month_names.length] = "Jan";
            month_names[month_names.length] = "Feb";
            month_names[month_names.length] = "Mar";
            month_names[month_names.length] = "Apr";
            month_names[month_names.length] = "May";
            month_names[month_names.length] = "Jun";
            month_names[month_names.length] = "Jul";
            month_names[month_names.length] = "Aug";
            month_names[month_names.length] = "Sep";
            month_names[month_names.length] = "Oct";
            month_names[month_names.length] = "Nov";
            month_names[month_names.length] = "Dec";

            var thetime = month_names[m] + ' ' + d + ' ' + y;

            image.created_time = thetime;

            return true;
        }
    });

    feed.run();

}());