# Cocktail App  
Demo: https://mymycocktails.netlify.app/  
<img src="https://github.com/jaebungs/demoGIF/blob/main/cocktilDemo.gif" width="750" height="400"/>  
Built with React, Redux, Material-ui, Express, MongoDB.  

## Introduction

Put one kind of liquor you have into the cocktail shaker. This app will show you a cocktail recipe.  
You can search by name, liquor type or both.  
For signed user, you can add recipes to your bar.  

I enjoy and appreciate good drinks. However, my girlfriend and I found that searching for an easy cocktail recipe takes time.  
Often recipes are filled with useless information. I scroll down and once reach the ingredient section, I find that I don’t have all the ingredients and need to repeat them. I just didn’t like to repeat the process.  

## The goal
Create an app that can provide relatively easy recipes with simple search functions. Even if the user does not have all the ingredients, this app should be able to suggest other options.

## Development process

1. Brainstorm app features.  
2. Choose tools.  
3. Browse other cocktail recipe apps. Add or remove features.  
4. Brainstorm design.  
5. Start coding!  
6. Build basic structure (to test backend).  
7. Build API and make sample data in mongodb.  
8. Build front-end. Test if data retrieves are working fine.  
9. Start styling and deploy.  
10. Small touch-ups.  

## Problem encountered

|**Problems**|**Solution / Learning outcome**|
| :-: | :-: |
|No idea how to implement authentication.|<p>Researched how to implement Google auth and JSON web token.</p><p>During this process, I found that I have two ways of authentication and authorization of a user.</p><p>1. Session Cookies.</p><p>2. JWT</p><p></p><p>Process for Cookies:</p><p>When the user signs in, the server will create session data and store it in its memory. After the server creates a session cookie in its memory, it will be sent to the user in ‘Set-Cookie: session ID’ form. This will be contained in every request header that the user makes and the server will use this to verify the user.</p><p></p><p>Process for JWT:</p><p>When the user signs in, unlike using cookies, the server does not create or store any information. Instead, the server will verify first if the user can successfully log in. After the user is authenticated, the server creates JSON Web Token, which is used for authorization.</p><p>JWT will be stored in the client's localStorage or session storage or cookie and it will be used on every request either in the header or body.</p><p>Once the server receives the JWT, it de-codes to validate the user. </p><p></p><p>Advantages of JWT</p><p>Saves the server memory since it does not need to record, only needs to issue a token.</p><p></p><p>Caution!</p><p>Do not include sensitive information in JWT. Although it says ‘encrypted’, it is not.</p><p></p><p>JWT contains 3 parts (header, payload, signature).</p><p>I used jsonwebtoken npm package, the order is (payload, secretOrPrivateKey, [options, callback]).</p><p></p><p>Actually code is </p><p>jwt.sign(</p><p>{email: existingUser.email, id: existingUser.\_id},</p><p>process.env.JWT\_SECRET,</p><p>` `{expiresIn: process.env.JWT\_EXPIRES\_IN}</p><p>)</p><p></p><p></p><p></p>|
|Security concerns came along with authentication.|<p>Learned XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery).</p><p></p><p>There are many articles about XSS and CSRF and how to prevent attacks. I will need to read again and practice.</p><p></p><p>Implemented expiration time in JWT. Using expiration can increase the chance of compromised tokens becoming useless.</p><p></p>|
|Redux only supports synchronous and has some rules when updating a store.|<p>Researched and wrote a short article about why Redux needed a middleware like redux-thunk.</p><p>https://dev.to/jaebungs/why-redux-thunk-</p><p>1dka</p>|
|Both server and client files are in the same folder. This caused many problems during deployment due to my lack of experience.|<p>After long hours of searching and fixing, back-end is deployed on Heroku and</p><p>front-end is deployed on Netlify.</p><p>Netlify is connected to the Github repository for easy and fast CD.</p>|
|Too many manual testing on API calls, Redux state changes, component rendering, filter and search functions.|<p>Yes I heard benefits of testing a lot, but I haven't felt any necessity before. However, although the app is small, I had to do lots of manual checking for API calls and page renderings, etc. Now I can tell why testing is important.</p><p>The next project will use testing tools like Jest and Enzyme.</p>|
|<p>Rendering SVG files. Things to consider when choosing image types.</p><p></p>|<p>It was my first time using an SVG format image on an app.</p><p>There are some options for using SVG files. First, use it with <img>. Second, use it as a component (inline SVG). Using SVG as a component is better because we can control style and even animate SVG files.</p><p>This app is not CRA, thus, SVGR library was required and used in webpack.</p><p></p><p>On top of that, I learned differences between image types.<br></br></p><p>`          `JPEG is better because of its smaller file size compared to PNG. </p><p>PNG quality is better, but differences are hard to notice with eyes. Thus, JPEG wins over PNG.</p>|
|Production site renders too slow because of the bundle size.|<p>Mind-blowing moment.</p><p>React lazy and Suspense!</p><p>Code splitting was very easy with these two APIs.</p><p>Bundle size got reduced from 463KB to 246KB just by doing Route-based code splitting.</p><p>This seems simpler than webpack code splitting.</p><p></p>|

## Other learning outcomes

1. Love Redux hooks! (useSelector, useDispatch). These two hooks simply replaced mapStateToProps and Connect. As a result, the code got simpler, shorter and easy to track.
2. Proficient using React hooks.
3. This project made me dive deep into how React rendering works. <https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior>
This article by Mark was really helpful.

4. Normalize data, embed or reference
5. Material-UI
6. Learned Lighthouse.

