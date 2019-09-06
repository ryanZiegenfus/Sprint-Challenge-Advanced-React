- [ ] Why would you use class component over function components (removing hooks from the question)?

1. Before hooks existed, functional components were not able to handle state.They were also unable to use lifecycle methods. Before hooks, you had to use classes to acheive these goals.

- [ ] Name three lifecycle methods and their purposes.

2. Constructor() - This function sets the initial state data that will be rendered the first time render is run.

Render() - This is the part ofthe lifecycle that puts state into the DOM.

componentDidMount() - This is the next thing to run after the first render. This is a good place to place asynchronous code that effects state.

- [ ] What is the purpose of a custom hook?

3. Custom hooks allow you to write 'stateful logic' inside of your hooks. Custom hooks also allow you to combine mulitple hooks in order to create useful stateful logic.

- [ ] Why is it important to test our apps?

4. Testing allows us to find bugs that arent immediatly obvious when creating logic in an app. Sometimes when creating some code, it is hard to consider all of the edge cases that would allow the code to run but still have bugs. This is just one of the many reasons to test. Security testing is also a really important aspect of testing.