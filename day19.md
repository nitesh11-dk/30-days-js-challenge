### Day 19: Regular Expressions

#### Activity 1: Basic Regular Expressions

**Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.**

```javascript
let str1 = "JavaScript is a versatile language. I love JavaScript!";
let regex1 = /JavaScript/g;
let matches1 = str1.match(regex1);
console.log("Matches for 'JavaScript':", matches1);
```

**Task 2: Write a regular expression to match all digits in a string. Log the matches.**

```javascript
let str2 = "My phone number is 123-456-7890.";
let regex2 = /\d+/g;
let matches2 = str2.match(regex2);
console.log("Matches for digits:", matches2);
```

#### Activity 2: Character Classes and Quantifiers

**Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.**

```javascript
let str3 = "Hello World! This is a Test.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log("Matches for words starting with a capital letter:", matches3);
```

**Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.**

```javascript
let str4 = "There are 123 apples and 4567 oranges.";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log("Matches for sequences of one or more digits:", matches4);
```

#### Activity 3: Grouping and Capturing

**Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.**

```javascript
let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log("Captures for US phone number:", matches5.slice(1));
```

**Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.**

```javascript
let str6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log("Captures for email address:", matches6.slice(1));
```

#### Activity 4: Assertions and Boundaries

**Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.**

```javascript
let str7 = "Hello world. Hello again.";
let regex7 = /^Hello\b/;
let matches7 = str7.match(regex7);
console.log("Matches for word at the beginning:", matches7);
```

**Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.**

```javascript
let str8 = "Hello world. Again, Hello";
let regex8 = /Hello\b$/;
let matches8 = str8.match(regex8);
console.log("Matches for word at the end:", matches8);
```

#### Activity 5: Practical Applications

**Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.**

```javascript
let password = "Aa1@password";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isValidPassword = regex9.test(password);
console.log("Is the password valid?", isValidPassword);
```

**Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.**

```javascript
let url = "https://www.example.com";
let regex10 = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,})+$/i;
let isValidURL = regex10.test(url);
console.log("Is the URL valid?", isValidURL);
```
