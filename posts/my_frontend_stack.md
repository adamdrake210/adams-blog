---
title: My Current Frontend Stack
publish_date: 2022-06-11
---

## CRA, Material UI, react-query, react-hook-form & Typescript

Over the past year whilst developing on several small scale React apps I have experimented with multiple libraries for the main building blocks of any FrontEnd app. For me the main blocks are these:

<ul>
<li>- Data fetching</li>
<li>- State Management - Once you have the data, managing it locally to your application and keeping it in sync with data in your database</li>
<li>- UI - Rendering data to the user in a clear and digestible manner</li>
<li>- Forms - Collecting required data from the user</li>
<li>- Static Typing - Making sure you code doesn't have type errors when working with data</li>
<li>- Development Environment - An environment that lets you develop and iterate quickly to build an MVP</li>
</ul>

Through this experimentation I have tried libraries such as Redux, RTK Query, Formik, Vite, ChakraUI and some more. All wonderful libraries and ones I use depending on the specific use case.

## Data Fetching

For data fetching I have been using mostly [React-Query](https://react-query.tanstack.com/). It took a little time for me to get the hang of it but once I did I was hooked! The documentation is really great (which is super important to me) and gives great examples which you can quickly learn from. This is a basic query:

```js
 function Todos() {
   const { isLoading, isError, data, error } = useQuery('todos', fetchTodoList)
 
   if (isLoading) {
     return <span>Loading...</span>
   }
 
   if (isError) {
     return <span>Error: {error.message}</span>
   }
 
   // We can assume by this point that `isSuccess === true`
   return (
     <ul>
       {data.map(todo => (
         <li key={todo.id}>{todo.title}</li>
       ))}
     </ul>
   )
 }
```

This is taken from the [React-Query docs](https://react-query.tanstack.com/guides/queries) but what I love about it is the code literally reads itself. You don't need any explaining text to accompany this, you just read the code and you can understand exactly how to use the `useQuery` hook.