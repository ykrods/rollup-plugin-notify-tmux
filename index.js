const { execSync } = require("child_process");

function notifyTmux() {
  function available() {
    try {
      execSync("command -v tmux");
    } catch(e) {
      return false;
    }
    return true;
  }
  if (!available()) {
    console.log('[notify-tmux] tmux is not available.');
    return null;
  }

  function setStatusBgColor(color) {
    const cmd = `tmux set-option -t $TMUX_PANE window-status-style 'bg=${color}'`;
    // console.log(cmd);
    execSync(cmd);
  }

  return {
    name: "notify-tmux",
    buildStart() {
      setStatusBgColor('yellow');
    },
    buildEnd(error) {
      setStatusBgColor(error ? 'red' : 'default');
    },
  };
}

module.exports = notifyTmux;
