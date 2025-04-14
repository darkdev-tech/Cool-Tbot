const fs = require('fs');
const path = require('path');

// Path to the settings JSON
const SETTINGS_PATH = path.join(__dirname, '..', 'database', 'settings.json');

// Load current settings or default to empty object
let settings = {};
if (fs.existsSync(SETTINGS_PATH)) {
  settings = JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf-8'));
}

// Save settings back to file
const save = () => {
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));
};

// Get a value (global or per chat/user)
const get = (key, defaultValue = null) => {
  return settings[key] !== undefined ? settings[key] : defaultValue;
};

// Set a value
const set = (key, value) => {
  settings[key] = value;
  save();
};

// Delete a value
const remove = (key) => {
  delete settings[key];
  save();
};

// Exported API
module.exports = {
  get,
  set,
  remove,
  all: () => settings,
};
