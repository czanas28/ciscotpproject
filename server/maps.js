const fs = require('fs');

const events = new Map;

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const evt = require(`./events/${file}`)
    events.set(evt.name, evt)
}

exports.events = events;