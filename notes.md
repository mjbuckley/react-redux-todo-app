TODOS

- What am I currently doing with state and visibility filters? I think it is being url is determining now. Does url then set state? Or is it not being used at all? Not sure.
- Button to remove all todos and start over.
- Build this and have on github pages and link to in readme.
- Update readme. App is now more changed from tutorial. Include link to active site.
- Should I move notes elsewhere and then delete this file?
- Add 404?

Did: Clean up index.js,


## Notes

### On deep copy and immutability

Here's how to think about what needs to be deep copied and what doesn't. Redux needs be able to quickly and simply compare the previous state and the current state. In JS all objects are different even if they have the same contents. Similarly, an object is always equal to itself, even if its contents have changed. If an object is directly updated, Redux cannot know this, it just sees the same object. State is an object, so if the state changes the object given to Redux must be a new object, not just an updated object, otherwise Redux won't know the difference. However, there is no need to do a deep copy of the original state, a shallow copy is sufficient. Deeply nested objects will share the same reference with the previous state, but so long as they haven't changed, this isn't a problem. In fact, this is what we want. If they didn't share a reference, redux would think they had changed. The place where this becomes a problem is when we do want to change a deeply nested object. In this case, simply updating that object is not enough because Redux won't know that object has changed (the original problem). So, the correct approach is to do a shallow copy (object assign or object spread), and then do a deep copy only of those deeply nested objects that need to be changed. Also, keep in mind that in JS arrays are a type of object, so the same general rules apply there as well. (Might want to save this write up in notes somewhere)


### ownProps

In mapStateToProps and mapDispatchToProps the ownProps parameter is just the props that are passed to the container component. There is nothing required about this name, it is just used by the tutorial to verbally distinguish these props from the props for the component that the container component is in charge of.


### Importing note

The Redux docs frequently use an import syntax like
```
import todoApp from './reducers';
```
I was unfamiliar with this, but it is just a shorthand was of saying:
```
import todoApp from './reducers/index.js';
```
Not sure the value of not just being explicit about what you want, but I kept that syntax here.
