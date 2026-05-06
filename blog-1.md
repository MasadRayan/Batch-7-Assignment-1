## Why any is a Type Safety Hole & Why unknown is Safer (with Type Narrowing)
Introduction:

TypeScript is popular because it adds type safety on top of JavaScript. But interestingly, it also gives us a way to completely bypass that safety system — using any.

At first, any feels convenient. No errors, no restrictions. But that convenience comes with a cost. In contrast, unknown may feel strict, but that strictness is exactly what helps us write safer and more predictable code.

In this blog, we will cover:

>What is any and Why Is It Dangerous? 

>Why unknown is a safer alternative

>What type narrowing is and how it works

- What is any and Why Is It Dangerous?

any essentially disables TypeScript's type checking.

```ts
let data: any = "hello";
data = 42;
data.toUpperCase(); 
```

Here, TypeScript does not complain at all. Whether we assign a string or a number, everything is allowed.


- What is unknown and Why Is It Safer?

unknown is a safer alternative to any.

```ts
let value: unknown = "hello";
value = 100;
value.toUpperCase(); 
```
here it will not work because of the type

TypeScript forces we to check the type before using it.

Here we can use the typeof to check the type and than er can procede next
```ts
if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}
```

- What is Type Narrowing?

Type narrowing means refining a broad type into a more specific one.

When we use checks like typeof, instanceof, or custom guards, TypeScript narrows the type automatically.

Here we can give an example of type narrowing:

```ts
const KgToGMConverter = (input: string | number) : number | undefined => {
    if (typeof input === "number") {
        return input *1000;
    }
    else if (typeof input === "string") {
        const [number] = input.split(" ");
        const result = Number(number) * 1000;
        return result;
    }
}

const res1 = KgToGMConverter(10) as number;
const res2 = KgToGMConverter("5 kg") as number;
console.log(res1, "gram" , res2, "gram");
```

When should we use each?

Use any only when:
Migrating legacy JavaScript code
Working with completely untyped third-party libraries
Rapid prototyping (temporarily)


Use unknown when:
Handling API responses
Working with user input
Dealing with dynamic or external data

Conclusion

In simple terms:

any = No rules so it is risky
unknown = Safe by default
Type narrowing = a way to safely work with unknown data

If we want reliable, maintainable, and scalable code, avoid any as much as possible.

TypeScript is designed to protect our code. Using any turns off that protection.