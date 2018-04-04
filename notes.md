TODOS

- Change name on site, in package.json, in github link in footer, and on github?
- Update readme. App is now more changed from tutorial.
- Build this and have on github pages and link to in readme (remove PWA stuff first).
- A few components/ etc. are no longer being used. Fine to keep around for reference but comment and explain why they are there.
- Let todos persist on refresh?


## Notes

### Building a production version

If this is ever going to be built and not just used locally, then remove the progressive web app/service worker stuff.


### On deep copy and immutability

Here's how to think about what needs to be deep copied and what doesn't. Redux needs be able to quickly and simply compare the previous state and the current state. In JS all objects are different even if they have the same contents. Similarly, an object is always equal to itself, even if its contents have changed. If an object is directly updated, Redux cannot know this, it just sees the same object. State is an object, so if the state changes the object given to Redux must be a new object, not just an updated object, otherwise Redux won't know the difference. However, there is no need to do a deep copy of the original state, a shallow copy is sufficient. Deeply nested objects will share the same reference with the previous state, but so long as they haven't changed, this isn't a problem. In fact, this is what we want. If they didn't share a reference, redux would think they had changed. The place where this becomes a problem is when we do want to change a deeply nested object. In this case, simply updating that object is not enough because Redux won't know that object has changed (the original problem). So, the correct approach is to do a shallow copy (object assign or object spread), and then do a deep copy only of those deeply nested objects that need to be changed. Also, keep in mind that in JS arrays are a type of object, so the same general rules apply there as well. (Might want to save this write up in notes somewhere)


### ownProps

In mapStateToProps and mapDispatchToProps the ownProps parameter is just the props that are passed to the container component. There is nothing required about this name, it is just used by the tutorial to verbally distinguish these props from the props for the component that the container component is in charge of.
