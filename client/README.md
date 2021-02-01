# Cocktail App  
MERN stack  
Navigation    
-Home  
-My Bar  

Mybar and homepage have same function, which is filter by types and name.  
Just initial data is different.  
If I use filter redux, need to make myBar and home 

cocktail store is showing cards for homepage.  
So should I put seperated liquor keywords at the beginning? or  
Seperate liquor keyword when search or buttons are activated?  


### Learning outcome  
wow. mapStateToProps and connect can be replaced by redux with hooks such as useSelector and useDispatch.  
Code got simpler.  
Made me think and learn more about normalize state shape. Although I didn't needed for this proejct.  
For a property update of a deeply nested object to be rendered, the high-level reference needs to be changed.
Use spread operator, but hard to read so nested reducer comes. However many reducers make hard to track.  
Therefore, library like immer.js comes. It creates a new state object by mutating current 'immutable state', so changing new object also changes the original object.
Learned about JSON web token and session token. This app uses JWT.