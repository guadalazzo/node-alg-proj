# Practice an knowdledge repo

Interview frontend questions and code practice excercises.

## Why react didn't have useMemo by default?

Because memoization involves caching the results of component , to avoid re-renders , and this can cause perfomance issues.
If we use memoization for everything this can cause degradation in the perfomance.
also, they gives the power to the developers to use it when needed. Also to prevent the bugs from stale data.

## What is memoization?

Memoization is an optimization tool to speed up process by storing results that are expensive to calculate,
also commonly named caching, the idea is to avoid unnecessary repited computations.
It creates a storage, to store the value, and next time is called would return this value.

## What's the difference between using localStorage, sessionStorage and cookies?

- LocalStorage => Data is persisted even after the browser is closed, is used for storing data across sessions.
  5-10mb per origin, LONG TERM STORAGE ACROSS SESSIONS

- SessionStorage => Data is clear when closing the browser. Is used for a single session for example form data.
  5-10mb per origin,
  , not shared across tabs. SHORT TERM STORAGE ONE TIME SESSION

- Cookies => Small data storage, can be sent in every http request to the server. Normally used for session tokens.
  4 KB per cookie. SMALL STORAGE WITH SETTED UP EXPIRATION

## When does a useEffect runs, and when do we need to really use it?

You don’t need Effects to transform data for rendering

Having a components with useEffect, when you could avoid it, makes react call the component twice, one for showing the content
and calculate the screen size, and later one to see what the useEffect has.

If your Effect also immediately updates the state, this restarts the whole process from scratch!
This component would re-run when your props or state change.

```Javascript
// 🔴 Avoid: redundant state and unnecessary Effect
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);

  const [lastName, setLastName] = useState('Swift');
// ✅ Good: calculated during rendering
const fullName = firstName + ' ' + lastName;
```

https://react.dev/learn/you-might-not-need-an-effect

**How to tell if a calculation is expensive?**

```Javascript
console.time('filter array');
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd('filter array'); // 1ms or more would be consider expensive (try with useMemo)
```

```Javascript
function Form() {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');

 // ✅ Good: This logic runs because the component was displayed
 useEffect(() => {
   post('/analytics/event', { eventName: 'visit_form' });
 }, []);

 function handleSubmit(e) {
   e.preventDefault();
   // ✅ Good: Event-specific logic is in the event handler
   post('/api/register', { firstName, lastName });
 }
 // ...
}
```

## What is the first thing you would check in a code review?

The naming of variables, functions an classnames,
checking that they make sense, after that, the comments if they are clear,
if they forgot to delete something commented,
And later looking at the code readability, clean code and where something can be extracted as an util.
Checking that is written according the style guidelines.

### Design patterns

https://www.freecodecamp.org/news/javascript-design-patterns-explained/
Decorator Pattern
Context is a HOC gives more features to the children component

## Security - How to make secure a site?

Filter input on arrival. At the point where user input is received, filter as strictly as possible based on what is expected or valid input.

Use appropriate response headers. To prevent XSS in HTTP responses that aren't intended to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers to ensure that browsers interpret the responses in the way you intend.

## Why Use “noopener noreferrer”? rel attribute in anchor <a /> tag

- **Security**: This tag is primarily used to enhance security. By preventing newly opened tabs or windows from controlling the original page, you safeguard your users from potential exploits.
- **Privacy**: If you don’t want to pass on referrer information to external websites, the noreferrer attribute ensures your visitors’ browsing history remains a little more private.
- **Performance** (Indirect): While not a direct effect, noopener can lead to minor performance improvements. Without that connection to the original page, the new tab may load marginally faster.

## What are the best practices in developer experience?

Using visual studio with extensions that alert live

Having an application that hot reloads

Having a tool that run tests, and eslint before pushing, like husky.

Having an unify linting and formatting tool. (eslint, prettier)

A good Onboarding experience, a well documented code, guides to start the project and what does the project do.

A CodeStyle guide to understand how the team is writting code, some component samples.

A place to ask questions , group in slack, mattermost or teams. Or a dev meeting.
