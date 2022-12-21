# code refactoring

image the next person to read and maintain the code is an axe murderer.
now you got the right mindset to write good code.

1. Readability
2. Modularity
3. Efficiency
4. Length

# Combined selectors

```html
<div id="hi" class="a b">hello</div>
<div class="a">hello</div>
<div class="b">hello</div>
```

```css
.a.b#hi {
  color: red;
}
/* to change the color of hello to red */
```
