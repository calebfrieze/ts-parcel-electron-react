# ts-parcel-electron-react
Boilerplate for *Electron* apps built with ts-parcel-electron-react. This setup allows for Node APIs to be run inside of a *React* app, with the help of the `--target electron` passed to *Parcel*.

### Overview of `package.json` scripts
`yarn watch` uses *Parcel* to run the `renderer` and `main` paths and watch for changes. This also runs `electron` watch in parallel to restart *Electron* when it sees changes to the build.

`yarn build` uses *Parcel* to build `renderer` and `main` paths.

`yarn electron:start` runs *Electron* in production mode.

This does not include any package scripts.

[Get started with packaging](https://electronjs.org/docs/tutorial/application-distribution)
