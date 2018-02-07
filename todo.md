# TODO

- Remove progressive web app/service worker stuff.
- I left off after copying over the actions folder index.js stuff.
- Importing render vs ReactDOM?
- Mover components to component folder?
- How doest nextToDoId in src/actions/index.js persist? Is it somehow indirectly imported by the root index.js file? Even if it is, how would it last between sessions? I guess thats not really the point here, because there isn't any saving being done anyways?

- Why ({ todos, onTodoClick }) and not just (todos, onTodoClick) in todolist.js (and same idea in other places)
?

## Notes on deep copy and immutability

Here's how to think about what needs to be deep copied and what doesn't. Redux needs be able to quickly and simply compare the previous state and the current state. In JS all objects are different even if they have the same contents. Similarly, an object is always equal to itself, even if its contents have changed. If an object is directly updated, Redux cannot know this, it just sees the same object. State is an object, so if the state changes the object given to Redux must be a new object, not just an updated object, otherwise Redux won't know the difference. However, there is no need to do a deep copy of the original state, a shallow copy is sufficient. Deeply nested objects will share the same reference with the previous state, but so long as they haven't changed, this isn't a problem. In fact, this is what we want. If they didn't share a reference, redux would think they had changed. The place where this becomes a problem is when we do want to change a deeply nested object. In this case, simply updating that object is not enough because Redux won't know that object has changed (the original problem). So, the correct approach is to do a shallow copy (object assign or object spread), and then do a deep copy only of those deeply nested objects that need to be changed. Also, keep in mind that in JS arrays are a type of object, so the same general rules apply there as well. (Might want to save this write up in notes somewhere)
