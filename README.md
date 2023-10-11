## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)


//IMPORTANT NOTES:

1. We define evaluate expression inside the jsx code eg: const userName="suraj kumar", this varaible can be write inside the jsx code - <p>the profile UserName : {userName} </p>

2. But we cannot write if conditions, functions, inside jsx code only it should be written above the return of the compnents.

3.In useCallback the dependency arrays are giving to optmizie the function if any chnages are made as useCallback memorize, but in useEffect those dependency invoke function call inside the useEffect.