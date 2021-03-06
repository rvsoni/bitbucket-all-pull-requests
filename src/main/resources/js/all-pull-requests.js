define('plugin/all-pull-requests', ['jquery', 'underscore', 'aui', 'bitbucket/internal/model/page-state', 'exports'], function ($, _, AJS, pageState, exports) {
    exports.onReady = function (buttonSelector) {
        $.ajax(AJS.contextPath() + '/rest/all-pull-requests/1.0/count', {
            data: {
                project: pageState.getProject().get('key')
            },
            success: function (data) {
                if (data.count) {
                    $(buttonSelector).find('.aui-nav-item-label').before(aui.badges.badge({'text': data.count}));
                }
            }
        });
    }
});

AJS.$(function() {
    require('plugin/all-pull-requests').onReady('#project-pull-requests-button');
});
