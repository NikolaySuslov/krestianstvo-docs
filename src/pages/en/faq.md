---
title: Frequently Asked Questions
description: Frequently Asked Questions
layout: ../../layouts/MainLayout.astro
---

Answering Common Questions about Krestianstvo SDK 4

**(last updated on 28.09.2022)**

#### 1. Is it using the Smalltalk version of Croquet: [Squeak Open Croquet](https://wiki.c2.com/?OpenCroquet) or [Open Qwaq](https://en.wikipedia.org/wiki/OpenQwaq)?
No. Krestianstvo SDK 4 is entirely written in JavaScript and is running on top of JavaScript VM.
Open Croquet architecture is used in [Krestianstvo SDK 1](https://krestianstvo.org/sdk1/). Open Qwaq architecture is used in [Krestianstvo SDK 2](https://krestianstvo.org/sdk2/)

#### 2. Is it using [Croquet OS](https://croquet.io) or any of croquet.io services written in JavaScript?
No. Krestianstvo SDK 4 is introducing its own implementation of Croquet Application Architecture in JavaScript, based on [Solid JS](https://solidjs.com) & [S.js](https://github.com/adamhaile/S) using Functional Reactive Programming (FRP). Also, that implementation is not limited just to the JavaScript language. Rust, Swift and Squeak Smalltalk versions are in work.

#### 3. Is it using JavaScript version of Croquet known as [Virtual World Framework](https://en.wikipedia.org/wiki/Virtual_world_framework)?
Only implementations of Reflector server and Virtual Time are used and modified to suit FRP.
Virtual World Framework provides its own unique implementation of Croquet Application Architecture based on prototypes, nodes and drivers. VWF architecture is used in [Krestianstvo SDK 3](https://krestianstvo.org/sdk3/). The 4th version of Krestianstvo SDK contains no elements of it.

#### 4. Is it compatible with [Croquet OS](https://croquet.io) or [Virtual World Framework](https://en.wikipedia.org/wiki/Virtual_world_framework)?
Not out-of-the-box. Although Croquet OS / VWF and Krestianstvo SDK 4 share the same original Open Croquet roots, some effort will be required in porting an application between their different implementations, alongside pros and cons.
The application development ([code example](https://codesandbox.io/s/krestianstvo-helloworld-pnimfu?file=/src/index.js)) with Krestianstvo SDK 4 is looked quite different, comparing to the  development in Croquet OS or VWF one's. Croquet OS and VWF Application Architecture is based on Model - View pattern, implemented in Class/Instance programming paradigm. In the contrary, Krestianstvo SDK 4 Application Architecture is based just on pure functions in form of Signals and Computations (Effects). Croquet OS uses pub/sub messaging for interconnecting Model/View instances. VWF is using drivers for that interconnection. In the contrary, Krestianstvo SDK 4 is using "glitchless" automatic dependency graph with a synchronous execution engine found in Solid JS and S.js

#### 5. Do I need to run my own Reflector server to start developing with Krestianstvo SDK 4?
No. You can use any of publicly available already running reflector servers. Like https://time.krestianstvo.org or https://time.livecoding.space

#### 6. Can I run my own Reflector server?
Yes, you can host your own [Reflector server](https://github.com/NikolaySuslov/lcs-reflector) anywhere in LAN or WAN. Just point to it in the `<Selo/>` component
```js
<Selo
    nodeID={"simple"}
    seloID={"1"}
    component={Simple}
    worlds={worlds}
    fallbackWorld={EmptyWorld}
    reflectorHost={"https://url.to.my.reflector"}
/>
```
Or just use directly in Web Browser url with **r** parameter: https://play.krestianstvo.org/demo1?r=https://time.krestianstvo.org

#### 7. Does Reflector server used in Krestianstvo SDK 4 aware of a client's application logic or store any application state?
No. Reflector server, that is used in Krestianstvo SDK 4 is fully conform the Croquet Application Architecture. Meaning, that Reflector server is used only for initial connection, ticking, stamping and reflecting the messages received from the clients with the data they want to share (e.g. 2D coords from a mouse movement). It knows nothing about application logic, and don't relay any data, that can be generated with a future messages locally on every synced client, running Croquet deterministic computations.

#### 8. Can I use different Reflector servers at the same time for different worlds linked by Portals, but existed in one world/web page?
Yes. When creating a Portal, just use url with **r** parameter pointing to any other running reflector server.

#### 9. Are Portals using iFrames to make inter-linked worlds?
No. Portal is just a pure function in form of Solid JS component. Thus, portal can be used inside any other Solid JS component, with no need on creating the new JavaScript context and iFrame. You can freely create a stacks of portals and manipulate them as a single functional component, by passing props and sending messages through it.

#### 10. Does Portals support linking to themselves?
Yes. Portals are recursive. By default portal's recursion depth is set to **2**. Use parameter **d** in the url to set the depth manually.

[Prev](deployment) | [Next](selo)