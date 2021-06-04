# Resetting Udemy progress
- from this thread
    - https://www.reddit.com/r/Udemy/comments/k1iiqg/reset_course_progress/
- Go onto the page and expand all the items
- run this in the dev tools console
```js 
document.querySelectorAll('#udemy > div.main-content-wrapper > div.main-content > div > div > div.app--column-container--3AItG > div > div.app--sidebar-column--2t0E8 ul > li input[type=checkbox]:checked').forEach((box, i) => setTimeout(() => box.click(), i * 50))

```
- The first one might not work. 
```js
document.querySelectorAll('li input[type=checkbox]:checked').forEach((box, i) => setTimeout(() => box.click(), i * 50))
```
