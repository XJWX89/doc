/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f41c1066d08314c4fa9f972325e70b17"
  },
  {
    "url": "assets/css/0.styles.3e4faf6e.css",
    "revision": "2b05a5f02b9af194ad3c8c9ceab42707"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.0a902863.js",
    "revision": "3498376e7e965dd36186dd5976bc590e"
  },
  {
    "url": "assets/js/11.fa426b03.js",
    "revision": "327a6f02f53578deb6a649a876f4f3d1"
  },
  {
    "url": "assets/js/12.140810f9.js",
    "revision": "68bf1eaffd05bee4bb9bec89878b5465"
  },
  {
    "url": "assets/js/13.806ecd86.js",
    "revision": "e78b0cd7b0efbb82380a544a05169206"
  },
  {
    "url": "assets/js/14.5f70f0ab.js",
    "revision": "6a7e48aa3dc89c3b56b38b6ad5d5a402"
  },
  {
    "url": "assets/js/15.f1cfd55c.js",
    "revision": "fe2f130df0dcd1a905e2fd2d7682ee6a"
  },
  {
    "url": "assets/js/16.15c36500.js",
    "revision": "e6e690cec86e5d8a47e1c924704dc82e"
  },
  {
    "url": "assets/js/17.467f8eca.js",
    "revision": "b1c13c64921f48fa9df22200a72e959f"
  },
  {
    "url": "assets/js/18.a8e049df.js",
    "revision": "6a59b145b1ddd294481add410c34f3ec"
  },
  {
    "url": "assets/js/19.afdc230c.js",
    "revision": "bd019621c43c7bf0152420b1a8dc4055"
  },
  {
    "url": "assets/js/20.d7e6676c.js",
    "revision": "920e5cbda531426d5c4283ff9392044b"
  },
  {
    "url": "assets/js/21.d52fc1ac.js",
    "revision": "1a27d6d5fce3290cde902d7c24d79b25"
  },
  {
    "url": "assets/js/22.3339f186.js",
    "revision": "ed6c02a58d9a9f9e8c4024f9ec4db51a"
  },
  {
    "url": "assets/js/23.faf0fd65.js",
    "revision": "ea843a9be97cbec5f2d7089a1c485165"
  },
  {
    "url": "assets/js/24.163abce1.js",
    "revision": "d76849b17636b282bf12ed35e64fd9b6"
  },
  {
    "url": "assets/js/25.b5f8fbf9.js",
    "revision": "7b3f3fec2b4021faa39832cdf6e63525"
  },
  {
    "url": "assets/js/26.cc394fc9.js",
    "revision": "8f63da0db0aba1001e19cca9ee455f60"
  },
  {
    "url": "assets/js/27.daf8bdd3.js",
    "revision": "658d016658f1fe089d708fe8b98ccf15"
  },
  {
    "url": "assets/js/28.f6e83dbf.js",
    "revision": "6e8574469e51294b146d60390e1cd246"
  },
  {
    "url": "assets/js/29.dd8d2e1c.js",
    "revision": "66e538b28d0816cf36d5fbfbcf769646"
  },
  {
    "url": "assets/js/3.ff89bc5d.js",
    "revision": "759e4057624950c95fb0cc8d12ebced2"
  },
  {
    "url": "assets/js/30.f7e94c1b.js",
    "revision": "72fe3f4a0430a7523542419005795e62"
  },
  {
    "url": "assets/js/31.df05b8c7.js",
    "revision": "6ba49cc1079389cdfd311b13567459e6"
  },
  {
    "url": "assets/js/32.ff81a7fd.js",
    "revision": "67dd8c106481938684ac9e2556683e9f"
  },
  {
    "url": "assets/js/33.8824e806.js",
    "revision": "f7f6a88952ed450c3952a76642581210"
  },
  {
    "url": "assets/js/34.e5a799e2.js",
    "revision": "16f66ec54db05788e091d3de00bb2c3f"
  },
  {
    "url": "assets/js/35.4687689f.js",
    "revision": "4b7149ce60222bf1b115624f59abeeff"
  },
  {
    "url": "assets/js/36.f1166cb1.js",
    "revision": "c85d5507ed044025529eb915db4a6f4f"
  },
  {
    "url": "assets/js/37.3d13d264.js",
    "revision": "9a7428db21d3dbd248bc8bc63aeaf4d8"
  },
  {
    "url": "assets/js/38.e2b280d3.js",
    "revision": "861a165fad70bd0c008bc8af8d2a5b44"
  },
  {
    "url": "assets/js/39.a254ffde.js",
    "revision": "c40f32f45393744fb7f2713f27b894f6"
  },
  {
    "url": "assets/js/4.403bd229.js",
    "revision": "052f9a5032841ef6107cf77297dae957"
  },
  {
    "url": "assets/js/40.74b1f2e2.js",
    "revision": "28c8cfdce9ee972391d52298a049f60d"
  },
  {
    "url": "assets/js/41.0c11aeee.js",
    "revision": "a29265641b1a88cdcd2460c18576e335"
  },
  {
    "url": "assets/js/42.c2d11e96.js",
    "revision": "4e200ef1a06bca23ade89348d2ada7dd"
  },
  {
    "url": "assets/js/43.d9142647.js",
    "revision": "66376b10edcdf8fe9ed46d1c0695b9fe"
  },
  {
    "url": "assets/js/44.1317ec28.js",
    "revision": "6b89e428c4d5d604df8e16bd4ac7a946"
  },
  {
    "url": "assets/js/45.9eb76c7d.js",
    "revision": "8d1fcb141e44f851561deb3ebd403bb1"
  },
  {
    "url": "assets/js/46.f07cefce.js",
    "revision": "8b1e239e85a70a35478cf8ecdee6f5dd"
  },
  {
    "url": "assets/js/47.0e339b4a.js",
    "revision": "33139fb14a26ae05e8f8ce025313f0dc"
  },
  {
    "url": "assets/js/48.13aeaa15.js",
    "revision": "82d1605f855956df2e3ed5ac6e59e798"
  },
  {
    "url": "assets/js/49.6fe6f67a.js",
    "revision": "ee6728528f033ca3f46ed31f130eb9aa"
  },
  {
    "url": "assets/js/5.bd1e5909.js",
    "revision": "c35807ae347df23216a7a4b17d12ef80"
  },
  {
    "url": "assets/js/50.e5a6a18c.js",
    "revision": "6c8ce3e7ef02180290cfb830b57958ef"
  },
  {
    "url": "assets/js/51.377eab29.js",
    "revision": "422845b3162221ac64cb4c8a14a93b26"
  },
  {
    "url": "assets/js/52.d1999f14.js",
    "revision": "d489d2886cd8b140b7093e16fe38a6aa"
  },
  {
    "url": "assets/js/53.d631c1b7.js",
    "revision": "dd5f29768fb272d30ec3cd50b426a26f"
  },
  {
    "url": "assets/js/54.af5d92b4.js",
    "revision": "fc9683ca79f4ce9288a71ec8e3d07c62"
  },
  {
    "url": "assets/js/55.5e85b8a6.js",
    "revision": "fe0e6fea6dadf2e95ca59aab8892d1f2"
  },
  {
    "url": "assets/js/56.48bfcb4f.js",
    "revision": "978fb52904f85c82a7ef6dc4bfe05364"
  },
  {
    "url": "assets/js/57.d47a6ddc.js",
    "revision": "da558a9dcf0adb5aab7a8b6f3243b83a"
  },
  {
    "url": "assets/js/58.4bea1d9b.js",
    "revision": "e6f308920646c86deeaf6327f33cbb73"
  },
  {
    "url": "assets/js/6.42ac205a.js",
    "revision": "b42dfeab65d4775f3ca53667fec04851"
  },
  {
    "url": "assets/js/7.d97d6ff7.js",
    "revision": "5362fb7cd9f903dda85ed9f58ea6ca8a"
  },
  {
    "url": "assets/js/8.79d59ece.js",
    "revision": "b8a5da56da6078c51a8f94de38869f9f"
  },
  {
    "url": "assets/js/9.2d72710a.js",
    "revision": "344b60aca8615897cf82be2c53519132"
  },
  {
    "url": "assets/js/app.7a18c8b1.js",
    "revision": "58de3fadec93d4825c85bb0e2e407d22"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "a6987013b1a0adb2a443d7f1787b0d5e"
  },
  {
    "url": "connex/index.html",
    "revision": "01ff686ad71c3c30f0fc77891a7f1c0a"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "b954e36f3ae2c7d536710cb00e153055"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "a4f321f72177de014f73808974818513"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "ab524ddb0a5981877ea52614ec5d5780"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "c490156e7242d07bed8040b5e14731ff"
  },
  {
    "url": "sync/faq.html",
    "revision": "dd865426618acbf1459895e8f597ae34"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "65770ac23d40e510e84d3f63f82419c0"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "fdfe69dc3c8de17030aaf6b6126e6b3f"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "a81c2396eb7668f0974931e8654c51fc"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "aad60f85cd2718dbc06c9b6f726c3459"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "0fd40e9acf8503c70a4a743bf039858a"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "774cb536ccf32b4ad22dea776e421b0f"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "5d92489556a4e861bed786f2d8310598"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "fcac5a527a52361e9258db82dd9c6144"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "f7bfc24ea032dccbd9231a5f4c090901"
  },
  {
    "url": "sync2/faq.html",
    "revision": "6a063327952c1420feb995c3d0f060c4"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "e09c3e9256a4e4c81d9de5db31d3e46b"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "156d841c8efff904938fdf49c65614ac"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "1e80bd35b579bbc2c865a528b9bc97ec"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "4508c660b3cd54037ae02b23cfdf874f"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "b9d34a19d30f8727ff1699a5b42bdb19"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "0f6c75de58b3e5c194bddb1d094427d1"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "ffcf371f4af70468023ca63cb6e03eab"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "653ecb6438079f37201ff466ec9df145"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "3b6ea88032185efd6090e703d0544ee8"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "872ce044a42a3a4b0839af9d5ae45756"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "cc69e6dcad831a99c4eace1890962376"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "ca15dcebedd48eb07aec01f29f2de472"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "1c61395c1ed97355a65d878d119ff949"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "c58e31c44e4ada99c28cbe180ed7f573"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "bc938191ef3f1ee4f7ef934e4ebc5cd8"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "e09c82c33f5d9d22aa6f29002015fef0"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "e2c3f63b351d3ac47c74baf270c14dec"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "c5dd0358a138b2e6251370a8ef0c00bd"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "cbb86b0b5ce0af5a088ebc6578ab70b5"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "4610ed1ad6e0020e3483cfe5977007c9"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "fc707484292b4da623da0f4942161c1d"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "035d3521f9d98d703553a50cb52ba9ef"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "6da16aa7d3974ca672a2462c622cb05d"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "1ae04a511b0adfc9bfd278694a93d5af"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "20598ae0f18fc763783b70f7ab6a4ad0"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "e0987da841ffc7aaf9488e7b6c60cef7"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "97092180bf9eaefdbe5fa9b6aaee04b1"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "d248a8ab580ba7b4cfbedd2f3e43b1c1"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "c477281430c7ddc0ab26737986f5bb58"
  },
  {
    "url": "tutorials/index.html",
    "revision": "d92013c68650fd13eb500e85e8c7a3a7"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "a3c7f36e7563d521a0e972e1cfab71e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
