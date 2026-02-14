# the second lesson

- initialised npm from scratch using npm init.

- installing parcel package. this is also called as bundler which is used to minify, clean, chunking, the code before it is sent to production.

- there ar 2 types of dependencies
  dev depency: generally req for development.
  normal dependency: they are used in production too.

- npm i -D parcel this will create a dev dependency since we only need it for development

- Parcel is a **beast**:
- when we see package.json now, there will be two symbols as ^ and ~ before package version
- **^** will update to minor version automatically, **~** will update to major version.
- always safe to install ^ versions to avoid bugs
- we will now see package-lock.json
- main diff is **package.json** keeps track of versions whereas **package-lock.json** keeps track of initial version which was installed at the time of installation even after upgradation of packages.
- **integrity** inside parcel obj in package-lock.json contains a hash to avoid crashing in prod by automatically stopping of upgrading and degrading the package versions. It avoids the famous saying it works on my local but crashing in prod.
- **Node modules**: it contains all the code of parcel, installed via npm.
- there are so many dependencies in pnode modules since parcel has its own dependency and they have their own. This creates a dependency tree and is called as **transitive dependency**
- no need to push the node modules to git since it can be recreated via package.json and package-lock.json files. Hence they are imp to push to git whereas node_modules isn't. we can just put it inside **.gitignore**
- **npmjs.org** fullform of npm is not node package manager
- we can start the app via **npx parcel index.html** command. index.html here is just the source file or the entry point to our app.
- **for installation we write npm and to execute a package, we use npx**
- we dont need CDN but will be using react via npm. just do npm i react and react-dom and remove react CDN
- we will see and error in console that React isnt defined so we need to import it.
- Now we will see an error like Browser scripts cannot have imports and exports. This is because browser thinks App.js is a normal js file which is not since we are usingh imports there. So in index.html file where we have defined script src=/App.js, we must mention type="module" then it will treat it as a module rather than a normal js file.
- Make sure you import ReactDOM from react-dom/client as this path is updated in React 18.
- **Parcel is a beast**:

1. It creates a server and port and hosts the dev build there
2. Automatically refreshing the page by doing **HMR (Hot module replacement)**
3. Parcel uses file watching algorithm written in C++. It keeps track of the changes and just builds it and just changes only the changed DOM part rather than refreshing the entire DOM tree
4. Parcel does the caching thats why it is so fast. This happens in .parcel-cache
5. Parcel will do **image optimisation**
6. will also minify and bundling the prod builds
7. compresses the files
8. it does consistent hashing
9. it'll do code splitting
10. **differential bundling** - makes sure that the app can be run in older versions of browsers too.
11. diagnostics and error handling for devs
12. Parcel can run the dev build in HTTP and HTTPS too. we dont need https for dev but if at all needed, then supportive too
13. read more from parcel.com
14. does **tree shaking** algorithm - if there are 100 functions in code and are only using 10 or 15, then it will automatically remove the unused code.
15. It'll also do the lazy loading
16. it creates different build for dev and prod
17. for prod build creation, command is: **npx parcel build index.html**

- But after 17, you'll get an error at package.json, App.js line. Just remove it and you should be good
- This will create a prod build and all the minification and all 17 steps will be done and code will be put under dist folder.

- browserslist takes an array in package.json. for e.g., **"browserlist": ["last 2 Chrome versions", "last 10 Firefox versions"]**. For more, go to **www.browserslist.dev**
