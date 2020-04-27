// TODO: Task-1
//charAt, concat, includes, endsWith, indexOf, lastIndexOf, replace, slice, split, startsWith, substr, toLowercase, toUppercase, trim, trimStart, trimEnd

// 01- charAt();
// The JavaScript string charAt() method is used to find out a char value present at the specified index in a string.
// Suppose you have a sentence as a string.Now you want to take a word from that sentence with the specified length value. Then using this method can work.
// Example:
// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log("The character at index " + " is " + sentence.charAt(0));
// Output: The character at index  is T

// 02 - concat();
// The JavaScript string concat() method combines two or more strings and returns a new string. This method doesn't make any change in the original string.
// Example:
// const string = "My City";
// console.log(string.concat(" Dhaka ", "Chittagong ", "Feni ", "Khulna "));
// Output: My City Dhaka Chittagong Feni Khulna

// 03 - includes();
// The includes() method determines Whether this word is found in string sentences, if found, return the true, otherwise, return false
// Note: The includes() method is case sensitive.
// str.includes(searchString, position]) (Defaults to 0.)
// Example:
// const str = "Hello world, welcome to the universe.";
// const s = str.includes("world", 1);
// console.log(s);
// Output: true

// 04- endsWith();
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
// Example:
// const str = "Hello world, welcome to the universe.";
// const n = str.endsWith("universe.");
// console.log(n);
// Output: true

// 05 - indexOf();
// The JavaScript string indexOf() method is used to search the position of a particular character or string in a sequence of given char values. This method is case-sensitive.The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.
// Example:
// const str = "Hello world, welcome to the universe.";
// const n = str.indexOf("welcome");
// console.log(n);
// Output: 13

// 06 - lastIndexOf();
// The JavaScript string lastIndexOf() method is used to search the position of a particular character or string in a sequence of given char values. It behaves similar to indexOf() method with a difference that it start searching an element from the last position of the string. The lastIndexOf() method is case-sensitive. The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.
// Example:
// const str = "Hello u world welcome to the universe.";
// const n = str.lastIndexOf("u");
// console.log(n);
// Output: 29

// 07 - replace();
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// Example: 1
// const p =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
// console.log(p.replace("dog", "cow"));
//Output: The quick brown fox jumps over the lazy cow. If the dog reacted, was it really lazy?
// Example: 2 (global replaced)
// const p =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
// console.log(p.replace(/dog/g, "cow"));
//Output: The quick brown fox jumps over the lazy cow. If the cow reacted, was it really lazy?
// Example: 2 (ignore case-sensitive)
// const p =
//   "The quick brown fox jumps over the lazy Dog. If the dog reacted, was it really lazy?";
// console.log(p.replace(/dog/gi, "cow"));
//Output: The quick brown fox jumps over the lazy cow. If the cow reacted, was it really lazy?

// 08 - slice();
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// string.slice(start,end)
// Example:
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(4, 19));
// Output: quick brown fox

// 09 - split();
// The split() method is used to split a string into an array of substrings, and returns the new array.
// Example:
// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words);
// Output: ["The", "quick", "brown", "fox", "jumps", "ove", "fr", "the", "lazy", "dog."]

// 10 - startsWith();
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// Example:
// const str1 = "Saturday night plans";
// console.log(str1.startsWith("Sat"));
// Output: true

// 11 - substr()
// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
// Example:
// const str = "Mozilla";
// console.log(str.substr(1, 2));
// Output: oz

// 12 - toLowerCase();
// The toLowerCase() method converts a string to lowercase letters.
// Example:
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toLowerCase());
// Output: "the quick brown fox jumps over the lazy dog."

// 13 - trim();
// Remove whitespace from both sides of a string:
// const greeting = "   Hello world!   ";
// console.log(greeting.trim());
// Output: "Hello world!"
