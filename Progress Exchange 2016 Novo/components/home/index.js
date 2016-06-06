'use strict';

app.home = kendo.observable({
    onShow: function () {
        if (!app.currentEvent) {
            app.mobileApp.navigate('components/loginView/view.html');
        } else {

        }
    },
    afterShow: function () {
        if (!!app.currentEvent) {
            $('.km-scroll-wrapper').css('backgroundImage', 'url(' + app.currentEvent.backgroundURL + ')');
        }
    }
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function (parent) {
    var homeModel = kendo.observable({
        event: app.currentEvent
    });
    parent.set('homeModel', homeModel);
})(app.home);
// END_CUSTOM_CODE_home