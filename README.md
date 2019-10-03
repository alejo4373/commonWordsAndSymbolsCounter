# Words and symbols counter in a file CLI

Simple CLI that counts words and symbols present on a file. 

I got the idea of building this as in the future I want to write JavaScript using the wearable keyboard [Tap Strap](https://www.tapwithus.com/product/) and I wanted to know what are the most common words I find in my `.js` files as well as what are the most used symbols like `.` or `=`. With this koledge I can focus on practicing the right tap combination for such words and symbols.

## Usage:
```
node main.js -w|-s file
```

## Options:
One of:
  * `-w`: Count words
  * `-s`: Count symbols (non-alphanumeric) characters

## Examples

1.  ```
    node main.js -s sample.js
    ```

2.  ```
    ./main.js -w sample.js
    ```

    **Note**: You might need to run `chmod 755 main.js`. To make main.js executable and be able to run it in this fasion
