module.exports = {
    name: 'panel',
    desc: 'Event listener for all panel events',
    async clicked(xapi) {
        xapi.Event.UserInterface.Extensions.Panel.on(event => {
            console.log(event);
        })
    }
}