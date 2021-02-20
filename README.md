# Cocktail App  
Put one kind of liquor that you have. This app will show you a cocktail recipe that requires what you have.  
You can search by name, liquor type or both.  
For signed user, you can add the recipe to your bar.  
  
Built with React, Material-ui, Redux, Express, MongoDB.  
Any feedback is welcome. I am still learning.


### Learning outcome  
I will organize this soon.  
wow. mapStateToProps and connect can be replaced by redux with hooks such as useSelector and useDispatch. Code got simpler.  
First time using many different hooks.  
I kinda got the hang of material ui, I need to use theme to reduce css code.
Made me think and learn more about normalize state shape. Although I didn't needed for this proejct.  
Refreshing express and mongodb.  
Need to learn more about animation on state change or learn react-spring.  
For a property update of a deeply nested object to be rendered, the high-level reference needs to be changed.
Use spread operator, but hard to read so nested reducer comes. However many reducers make hard to track.  
Therefore, library like immer.js comes. It creates a new state object by mutating current 'immutable state', so changing new object also changes the original object.
Learned about JSON web token and session token. This app uses JWT.  
Need to learn more about security, XSS(Cross site Scripting) and CSRF(Cross site Request Forgery).  
Faced many problems during deployment. - learned dealing svg file as react component. deploy only server on heroku etc. I just didn't know.  
Code spliting. bundle.js was around 463KB. After code spliting with lazy and Suspense, bundle.js is 246KB.