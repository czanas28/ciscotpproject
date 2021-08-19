const fs = require("fs");

const panels = new Map();

const panelFiles = fs
  .readdirSync("./xapigui/panels")
  .filter((file) => file.endsWith(".js"));

for (const file of panelFiles) {
  const panel = require(`./xapigui/panels/${file}`);
  panels.set(panel.name, panel);
}

const widgets = new Map();

const widgetFiles = fs
  .readdirSync("./xapigui/widgets")
  .filter((file) => file.endsWith(".js"));

for (const file of widgetFiles) {
  const widget = require(`./xapigui/widgets/${file}`);
  widgets.set(widget.name, widget);
}

exports.panels = panels;
exports.widgets =widgets;