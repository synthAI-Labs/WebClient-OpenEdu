// Page.tsx
import React from 'react';
import CodeEditor from '@/components/CodeEditor';

const Page = () => {
  const question =
    'Write a function that takes in a string and returns a new string with the first letter of every word capitalized.';
  const example =
    "capitalize('a short sentence') --> 'A Short Sentence'\ncapitalize('a lazy fox') --> 'A Lazy Fox'\ncapitalize('look, it is working!') --> 'Look, It Is Working!'";
  const hints =
    "slice()\ntoUpperCase()\ncharAt()\ntoLowerCase()\n\nfunction capitalize(str) {\n    const words = [];\n    for (let word of str.split(' ')) {\n        words.push(word[0].toUpperCase() + word.slice(1));\n    }\n    return words.join(' ');\n}";
  const solution =
    "function capitalize(str) {\n    let result = str[0].toUpperCase();\n    for (let i = 1; i < str.length; i++) {\n        if (str[i - 1] === ' ') {\n            result += str[i].toUpperCase();\n        } else {\n            result += str[i];\n        }\n    }\n    return result;\n}";
  const testCases = [
    {
      input: 'a short sentence',
      output: 'A Short Sentence',
    },
    {
      input: 'a lazy fox',
      output: 'A Lazy Fox',
    },
    {
      input: 'look, it is working',
      output: 'Look, It Is Working!',
    },
  ];

  return (
    <CodeEditor
      question={question}
      example={example}
      hints={hints}
      solution={solution}
      testCases={testCases}
    />
  );
};

export default Page;
