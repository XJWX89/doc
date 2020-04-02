---
sidebarDepth: 1
---
# Get Started

Connex is the standard interface to connect VeChain apps with VeChain blockchain and users. Aiming to help developers building decentralized applications.
[Sync](https://env.vechain.org/#sync) or other connex compatible [clients](https://env.vechain.org/) will expose `connex` API by an injected object on [Window Object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object).
<p align="center">
<img src="~@public/images/connex/connex.jpg" alt="Connex Overview">
</p>

## How To

As `Connex` is already attached to the `Window Object`, just use it in your favourite way. Below is a sample of getting network status,

``` javascript
const el = document.createElement('h1')

const status = connex.thor.status
el.innerText = 'You are \'connexed\' to vechain, the status is ' + (status.progress === 1 ? 'synced': 'syncing')

document.querySelector('body').append(el)
```

### TypeScript(Recommended)

This project is the type definition of `Connex` API which can be used to in typescript projects. Install by the following command:

``` bash
npm install @vechain/connex --save-dev
```

Place following line in any .ts file of your project
```typescript
import '@vechain/connex'
```
or

add `@vechain/connex` to `compilerOptions.types`  in `tsconfig.json` then you are good to go!

### Bootstrap Your APP

VeChain apps are usually web apps. On app load, you always need to detect `Connex` component in the environment. If `Connex` is not available, you may instruct users to setup `Connex` environment.

To simplify these steps, simply perform redirection:

```javascript
if(!window.connex) {
    location.href = 'https://env.vechain.org/r/#' + encodeURIComponent(location.href)
}
```

Additionally, network can be specified:

```javascript
if(!window.connex) {
    // the app prefers running on test net
    location.href = 'https://env.vechain.org/r/#/test/' + encodeURIComponent(location.href)
}
```

## Compatible Client

### Desktop

- [Sync](https://github.com/vechain/thor-sync.electron) : The official desktop wallet firstly supports Connex. It provides seamless experience for users and developers. Which is designed to provide the superior user experiences for VeChain Apps, and serves as the dApp environment to provide unlimited potential for developers and users.

### Mobile
- VeChainThor Mobile Wallet ([iOS](https://apps.apple.com/us/app/id1397679485)
/ [Android](https://cdn.vechain.com/vechainthorwallet/client/VeChainThorWallet.apk)) : VeChainThor Wallet is a light mobile wallet app. We aim to provide users with a powerful, secure, simple, fully functional portal of the VeChainThor blockchain.

- Sync Mobile [beta](https://testflight.apple.com/join/UepoMMnP) : Official mobile wallet fully supports Connex. Provide superior user experience for VeChain Apps, and serves as the dApp environment to provide unlimited potential for developers and users.

## Resources

+ [Connex Framework](https://github.com/vechain/connex-framework)
+ [Connex Driver In NodeJS](https://github.com/vechain/connex.driver-nodejs)
+ [Connex REPL](https://github.com/vechain/connex-repl)
