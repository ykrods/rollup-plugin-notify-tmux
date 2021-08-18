# rollup-plugin-notify-tmux

A plugin that shows the build result in the background color of the status line when doing watch build with tmux.

## Install

```
npm install --save-dev github:ykrods/rollup-plugin-notify-tmux
```

## How to Use

```javascript
# rollup.config.js
import notifyTmux from "rollup-plugin-notify-tmux";

const production = !process.env.ROLLUP_WATCH;

export default {
  // ...
  plugins: [
    !production && notifyTmux(),
  }
};
```

```shell
$ tmux
$ npm run dev
```
