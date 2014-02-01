module.exports = function (app) {

    app.get('/rest/v1.0/compute/systems', function (req, res) {
        var rez = [
            {name: "OpenStack", img: "openstack", url: "http://openstack.com"},
            {name: "Windows Azure", img: "azure", url: "http://microsoft.com/asure"},
            {name: "Microsoft System Center", img: "system_center", url: "http://microsoft.com/systemcenter"}
        ];
        console.log('/rest/v1.0/compute/system', rez);
        res.send(rez, 200);
    });

}