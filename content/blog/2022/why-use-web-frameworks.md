---
title: "Why Use Web Frameworks?"
date: 2022-10-30
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross*](https://medium.com/the-foss-albatross/why-use-a-web-framework-e1bdf1a8c1cf).

You're a web developer and you need to make a website. How should you build one? Do you start writing static files right away to be served immediately, or do you start setting up a project environment?

<!-- more -->

First, do you decide to use a framework? They're all the rage these days.

By far the biggest advantage of a web framework is its ability to make things declarative. Imagine you want to make a to-do list. You might write code like this to be able to add a new todo:

```html
<script>
function newTodo() {
    const divBox = document.createElement("div")
    const input = document.createElement("input")
    input.type = "checkbox"
    
    const p = document.createElement("p")
    p.appendChild(document.createTextNode("Untitled todo"))
    
    divBox.appendChild(input)
    divBox.appendChild(p)
    
    document.getElementById("button-box").appendChild(divBox)
}
</script>

<div id="button-box">
    <div>
        <input type="checkbox" />
        <p>Do chores</p>
    </div>
    <button onclick="newTodo">New to-do</button>
</div>
```

...but then how would you make the whole system interactive? How could you delete todos, edit todos, or mark them as completed? You'd have to bring a whole state system that updates the document just to manage a simple todo app!

Meanwhile, frameworks abstract a lot of the element creation away so that you can focus on just writing components and how they *should* behave, not how to implement their behaviour.

For example, in Vue.js, you could do something like this:

```vue
<script setup>
import { ref } from "vue";
    
const items = ref([
    { title: "Do chores", completed: false }
]);

function newButton() {
    items.push({ title: "Untitled to-do", completed: false );
}
               
function deleteButton(index) {
    items.splice(index, 1);
}
</script>

<template>
<div>
    <div v-for="(item, i) in items" :key="i">
        <input type="checkbox" @click="item.completed = !item.completed" />
        <p>{{ item.title }}</p>
        <button @click="deleteButton(i)">Delete</button>
    </div>
    <button @click="newButton()">New to-do</button>
</div>
</template>
```

This short snippet makes it clear to the developer exactly what's happening and does way more than the pure version above. Not only can it add new todos, it can delete them and check them off too! At the cost of learning just a little more syntax, you can make the framework do much of the heavy lifting for you.

In this example, you tell Vue that you want a `div` for every item in your array with a checkbox, paragraph, and button. Whenever you add or remove an item to that array, Vue is responsible for making sure that your website matches the updated array so you don't have to fiddle with the document.

## Components

Working on files with hundreds of lines is never fun. Since HTML can only be sent in one file, this means that complex client-side applications tend to have too many lines to properly read and understand if they don't use a framework.

Once again, frameworks come to the rescue! Most of them have a component model that lets you reuse a lot of code, making it easier to read.

For example, once again in Vue:

```vue
<template>
<div>
    <p>Hello</p>
    <p>This is going to be used a lot!</p>
</div>
</template>
```

```vue
<script setup>
import UsedALot from "UsedALot.vue";
</script>

<template>
  <UsedALot />
  <UsedALot />
  <UsedALot />
</template>
```

This splitting of logic makes it easier for your brain to focus on specific subchunks of code so it's easier to read and understand.

---

Web frameworks offer a lot of advantages over writing in a more imperative style. However, their abstractions do come at a cost — an extra minimum [16 KB](https://vuejs.org/about/faq.html#is-vue-lightweight) in JavaScript has to be fetched from your server, which can increase bandwidth costs and make your site slower.

Ultimately, in creating your website, much like when you do anything else, you should weigh the pros and cons of web frameworks before deciding to go with one or the other.