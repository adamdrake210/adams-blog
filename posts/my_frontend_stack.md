---
title: My Current Frontend Stack
publish_date: 2022-06-11
---

## CRA, Material UI, react-query, react-hook-form & Typescript

Over the past year whilst developing on several small scale React apps I have experimented with multiple libraries for the main building blocks of any FrontEnd app. For me the main blocks are these:

<ul>
<li>- <a href="my_frontend_stack/#data-fetching">Data fetching</a></li>
<li>- <a href="my_frontend_stack/#ui">UI</a> - Rendering data to the user in a clear and digestible manner</li>
<li>- <a href="my_frontend_stack/#forms">Forms</a> - Collecting required data from the user</li>
<li>- <a href="my_frontend_stack/#static-typing">Static Typing</a> - Making sure you code doesn't have type errors when working with data</li>
<li>- <a href="my_frontend_stack/#dev-environment">Development Environment</a> - An environment that lets you develop and iterate quickly to build an MVP</li>
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

## UI

There are so many choices for UI libraries these days - MUI, Tailwind.css, ChakraUI to name but a few. I still have to say that my personal favorite and goto UI component library is [MUI](https://mui.com/). The reasons are a few:

<ul>
<li>- I know the api and it has great documentation</li>
<li>- It gives me all the main components I need out of the box to build most UI layouts and interfaces that I need</li>
<li>- It is accessible friendly</li>
<li>- It's reliable - it's been tried and tested and at the moment of writing this is on V5</li>
</ul>

At the end of the day, I am mainly a developer. I have some UI/UX experience and I have seen and used enough websites to know a little about design but when I am coding applications and websites I want to put the UI together relatively quickly so using something like MUI helps me achieve this goal.

## Forms

Gathering user data is a must with any serious Web Application. You can't do much to help the user out and solve their problem without knowing a little bit about them. So having a good form to collect that data is vital. Forms come in all shapes and sizes these days and also in various disguises. Whatever they are and however they look it's vitally important they behave and work as expected! 

My goto library for forms is [react-hook-form](https://react-hook-form.com/).

The reason I am a fan is for a number of reasons. I like the fact I can easily pass in specific rules to each form field. I really like the dynamic form implementation using the `useFieldArray` hook - [useFieldArray](https://react-hook-form.com/api/usefieldarray). This was something I originally used to implement myself and it required quite a bit of boilerplate to get it to work. Once I discovered this hook it changed everything for me. Also the documentation and example videos again are very well laid out on the [react-hook-form website](https://react-hook-form.com/api).

## Static Typing

TBD

## Dev Environment

TBD