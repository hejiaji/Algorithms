# Description

Using vanilla Javascript to implement [uniqBy](https://lodash.com/docs/4.17.11#uniqBy) in lodash. 

```javascript
uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```