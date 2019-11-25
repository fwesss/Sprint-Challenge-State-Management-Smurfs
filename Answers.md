1. What problem does the context API help solve?

    Context API allows use to provide state values to props without passing them down a chain. A component does not
     need to be a direct child in order to use state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    * actions: methods by which we immutably change state
    * reducers: combine a previous state and an action to return a new state. Just like Array.protoype.reducer.
    * store: where all application state is stored. There can only be one store in an application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that can be shared between all components. Component state is limited to component
     scope. Form state is typically best kept in a component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunks allow us to intercept an action and pass it into another function. It lets us make the program flow
     asynchronous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    * Context API is the most straight forward so I like using that one. It's hard to see the purpose of Redux with
     small projects.
