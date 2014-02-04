angular.module('axa.csp').factory('projectService', function () {

    var data = {
        id: "",
        name: ""
    };

    var fetch = function(projectId) {
        // fetch project data from server...

        data.id = projectId;
        data.name = projectId;
    };

    // Public API
    return {
        data: data,
        fetch: fetch
    };
});