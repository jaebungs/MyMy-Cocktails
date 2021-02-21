# Cocktail App  
Demo: https://mymycocktails.netlify.app/  
<img src="https://github.com/jaebungs/demoGIF/blob/main/cocktilDemo.gif" width="750" height="400"/>

Put one kind of liquor you have into the cocktail shaker. This app will show you a cocktail recipe.  
You can search by name, liquor type or both.  
For signed user, you can add recipes to your bar.  
  
Built with React, Material-ui, Redux, Express, MongoDB.  
### Features  
Built from scratch.
Autocomplete function for cocktail shaker.  
Search by name, type or both function.  
Google Auth, Sign In, Sign up using JWT.  
Liquor chips on cards and filter chips under navbar are created by reading and comparing between its ingredients and liquor list in action/cocktails.js.  
Add to my bar (only for sign in user).

Any feedback is welcome.  


### Learning outcome  
1. Redux hook (useSelector, useDispatch) can replace mapStateToProps and connect. Code got simpler and intuitive.  
2. First time using many different react hooks. ex) useHistory, useLocation, lazy, Suspense etc.  
It made me curious about other hooks and how react rendering actually works.  
https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/  
This Mark's blog is a great article that explain how React render works and when happens.  
3. First time using material ui.  
4. I looked up normalize state shape. Although I didn't use it for this proejct.  
I am not sure, but it looks somewhat similar to mongodb indexs structure.  
5. For a property update of a deeply nested object to be rendered, the high-level reference needs to be changed.
Use spread operator, but hard to read so nested reducer comes. However many reducers make hard to track.  
Therefore, library like immer.js comes. It creates a new state object by mutating current state.  
6. Learned about JSON web token and session token. This app uses JWT. This was one of the most interesting part.  
7. Need to learn more about security, XSS(Cross site Scripting) and CSRF(Cross site Request Forgery).  
8. Faced many problems during deployment. - learned dealing svg file as react component. Deploy server on heroku etc. I just didn't know many stuff on how to deploy full app.  
9. Code spliting! After code spliting with lazy and Suspense, bundle.js became around 463KB -> 246KB. Rendering speed was more than 7 sconds, but it is now less than 1 second.  
10. Optimized website with chrome lighthouse. 100 100 100 90 scored. (It is not perfect, may need some work on data fetch and duplicated code removal)  
11. Learned how to use arial. aria-describedby="(id ex-cup)", than make element cup display="none".  
12. Learned about Private Route.  
  

   


