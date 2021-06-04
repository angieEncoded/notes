# Component-Driven User Interfaces

- React is a JS libary for building user interfaces
    - so is html, css, js
    - libraries simplifies it
- React is all about components
    - What is a component
        - ALL user interfaces in the end ARE components
        - There is always some navigation, some main content, some interactive things
    - Why components?
        - Resusable
        - Separate concerns
            - Don't do too many things in one place
        - Small separate units where each component has its own responsibility
        - this dates back to Unix - do one thing and do it well
- How is a component built?
    - UIs are about HTML, CSS and JS
    - React combines the three into the component
    - Then the components are combined into the UI
        - CSS is probably the least important part
    - Declarative approach
        - You will not tell react that a certain html element will be created and inserter
        - React will always define the target state and let react figure out the JS DOM instructions
        - We build our own custom html elements
- Creating a new react project
    - create-react-app is a common way to get started
    - Make sure you have nodejs installed
    - type in 
    ```npx creat-react-app appName```