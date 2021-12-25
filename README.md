# ReactStarter
Basic React Template

This is a basic React template which includes the many of the key node modules I use across different React projects.  It does not include a CSS framework (e.g. Bootstrap or TailwindCSS).  Webpack is configured to minify both CSS and JavaScript.  Additionally, the `build-html` node run script will minify the HTML index.html page.

## Node Modules Included:
* Iconify Icons: https://iconify.design/
* date-fns: https://date-fns.org/
* htmr: https://github.com/pveyes/htmr
* lodash: https://lodash.com/
* react-cookie: https://www.npmjs.com/package/react-cookie
* react-hook-form: https://react-hook-form.com/
* react-query: https://react-query.tanstack.com/
* react-router: https://reactrouter.com/
* react-toast-notifications: https://github.com/jossmac/react-toast-notifications

## Usage:
*I may script this later, but for now here are the manual steps*

* `mkdir {new-project-folder-name} && cd {new-project-folder-name}`
* `git init`
* `git pull https://github.com/ScottGeiger/ReactStarter`
* Update `package.json` with your project's information
* `npm install`
* `npm run build-html`
* `npm run start-dev` or `npm run build-dev`

Use `npm run build-dev` to build the files in the `public` folder instead of spinning up the webpack dev server.
