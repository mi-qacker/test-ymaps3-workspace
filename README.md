# Test workspace for ymaps3

Workspace for testing developed packages for ymaps3 in vanilla and react versions.

## Quick start

Add your `APIKEY` to the ENV variables for each project:

- [vanilla](./vanilla-project/.env)
- [react](./react-project/.env)

```env
VITE_APIKEY=<YOUR_APIKEY>
```

Install the package that needs to be checked into the project (if the package is located locally on the computer, then check that it is built.):

```shell
npm install <package-path>
```

### Vanilla

Add package import and example code in [main.ts](./vanilla-project/src/main.ts) file.

Run vanilla project in dev mode

```shell
npm run dev --workspace vanilla-project
```

Try build vanilla project

```shell
npm run build --workspace vanilla-project
```

### React

Add package import and reactify components in [lib.ts](./react-project/src/lib.ts) file.
And add example code in [App.tsx](./react-project/src/App.tsx) file.

Run react project in dev mode

```shell
npm run dev --workspace react-project
```

Try build build project

```shell
npm run build --workspace react-project
```

## Conclusion

If in each version, the components are correctly displayed on the map and the project successfully builds without any crashes, then your package is ready for publication! 🎉
