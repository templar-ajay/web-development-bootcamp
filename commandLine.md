# Command Line

1. to use mouse to move the cursor press alt or cmd.

```
touch text1.html   //to create new file named text1.html

//on windows
start text1.html   // to open the file in default editor (notepad).
start code text1.html  // to start the file in vscode.

// on mac
open text1.html //to open the file in default editor.
open -a atom text1.html // to open the file in atom text editor.

```

2. remove files

```
rm

rm * // to remove all the files in the current directory
rm -rf to delete all the child directories recursively.
```

```
touch text.index // makes a new file if not present and if present changes it's last modified time.
echo "hello world" > greeting.txt // makes a file "greeting.txt" with "hello world" in it.
cat greeting.txt > greeting_copy.txt // makes a file greeting_copy.txt with "hello world" in it
cat greeting.txt greeting_copy.txt >> full_greeting.txt // makes full_greeting.txt with
"hello world
hello world"
  in it.
```
