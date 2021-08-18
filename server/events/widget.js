module.exports = {
    name: 'widget',
    desc: 'Event listener for all widget events',
    async clicked(xapi) {
        xapi.Event.UserInterface.Extensions.Widget.Action.on(event => {
            if (!event.Type === 'clicked') { return }
            else {
                console.log(event.Type);
            }
        })
    },
    async pressed(xapi) {
        xapi.Event.UserInterface.Extensions.Widget.Action.on(event => {
            if (!event.Type === 'pressed') { return }
            else {
                console.log(event.Type);
            }
        })
    },
    async released(xapi) {
        xapi.Event.UserInterface.Extensions.Widget.Action.on(event => {
            if (!event.Type === 'released') { return }
            else {
                console.log(event.Type);
            }
        })
    },
}