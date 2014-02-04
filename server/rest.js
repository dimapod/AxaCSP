
module.exports = function (app) {

    var URL_PREFIX = "/rest/v1.0";

    app.get(URL_PREFIX + '/compute/systems', function (req, res) {
        var rez = [
            {name: "OpenStack", img: "openstack", url: "http://openstack.com", description: "OpenStack is a global collaboration of developers and cloud computing technologists producing the ubiquitous open source cloud computing platform for public and private clouds. The project aims to deliver solutions for all types of clouds by being simple to implement, massively scalable, and feature rich. The technology consists of a series of interrelated projects delivering various components for a cloud infrastructure solution."},
            {name: "Windows Azure", img: "azure", url: "http://microsoft.com/asure", description: "Windows Azure is an open and flexible cloud platform that enables you to quickly build, deploy and manage applications across a global network of Microsoft-managed datacenters. You can build applications using any language, tool or framework. And you can integrate your public cloud applications with your existing IT environment."},
            {name: "Microsoft System Center", img: "system_center", url: "http://microsoft.com/systemcenter", description: "System Center 2012 R2 delivers unified management across on-premises, service provider, and Windows Azure environments, thereby enabling the Microsoft Cloud OS. System Center 2012 R2 offers exciting new features and enhancements across infrastructure provisioning, infrastructure monitoring, application performance monitoring, automation and self-service, and IT service management."}
        ];
        console.log('/rest/v1.0/compute/system', rez);
        res.send(rez, 200);
    });

}