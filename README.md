# Menthas for Android/iOS

A mobile application for [Menthas](http://menthas.com) using [Apache Cordova](https://cordova.apache.org/).

## **UNDERDEVELOPMENT**

**NOTICE**: *This application is underdevelopment and not published yet.*

## Setup

```
git clone git@github.com:kuy/menthas-cordova.git
cd menthas-cordova
npm install
```

If you don't have globaly installed `cordova`, please run below line.

```
npm install -g cordova
```

### For Android

```
cordova add platform android
```

### For iOS

*NOTE* I didn't tested on iOS. Welcome PRs to improve on iOS!

```
cordova add platform ios
```

### For Browser

The browser platform is useful for debugging codes of React + Redux.

```
cordova add platform browser
```

## Getting Started

Launch a building process using webpack. This is required for all platforms.

```
npm start
```

Because of the process behaves like a daemon, you need to oepn an another terminal.

### For Android

```
npm run android
```

### For Browser

```
npm run browser
```

This command oepns Google Chrome with default page, but it doesn't show anything.
Please close it and re-open `http://localhost:8000` in your favorite browser.

#### Handling Content-Security-Policy (CSP)

If you want to run this on browsers, you will get CSP issue.
To avoid these errors, please consider to use `menthas-proxy`.


## License

MIT

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)
