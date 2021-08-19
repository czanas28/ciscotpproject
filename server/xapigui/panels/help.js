module.exports = {
    name: 'help',
    desc: 'helps',
    execute(xapi) {
        xapi.Command.UserInterface.Message.Alert.Display({
            Duration: 10,
            Text: 'helped',
            Title: 'HELPED'
        })
    }
}