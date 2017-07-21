# eslint error

https://github.com/yannickcr/eslint-plugin-react/issues/447

```js
// redux constants

export const PAGE_SIZE = 3;

// [eslint] Parsing error: The keyword 'export' is reserved
```
# `.eslintrc`

```js
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "comma-dangle": 0
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.4.2"
        }
    }
}
```

https://github.com/coryhouse/react-slingshot/issues