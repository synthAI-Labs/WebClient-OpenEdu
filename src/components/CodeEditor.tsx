"use client"
// CodeEditor.tsx
import React, { useState } from 'react';

interface CodeEditorProps {
    question: string;
    example: string;
    hints: string;
    solution: string;
    testCases: { input: any; output: any }[];
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    question,
    example,
    hints,
    solution,
    testCases,
}) => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (newCode: string) => {
        setCode(newCode);
    };

    const handleSubmit = () => {
        try {
            // Evaluate user's code
            console.log(`Evaluating user code: ${code}`);
            const userFunction = new Function('str', `${code}`);
    
            // Test the user's code against the provided test cases
            const testResults = testCases.map(({ input, output }) => {
                try {
                    const actual = userFunction(input);
                    const passed = JSON.stringify(actual) === JSON.stringify(output);
    
                    // Log the actual output for debugging purposes
                    console.log(`Input: ${input}, Actual: ${actual}, Expected: ${output}, Passed: ${passed}`);
    
                    return {
                        input,
                        expected: output,
                        actual,
                        passed,
                    };
                } catch (error) {
                    console.error(`Error evaluating user function for input ${input}: ${error.message}`);
                    return {
                        input,
                        expected: output,
                        actual: undefined,
                        passed: false,
                    };
                }
            });
    
            setResult(JSON.stringify(testResults, null, 2));
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };
    

    return (
        <div>
            <div>
                <h3>Question:</h3>
                <p>{question}</p>
            </div>
            <div>
                <h3>Example:</h3>
                <p>{example}</p>
            </div>
            <div>
                <h3>Hints:</h3>
                <p>{hints}</p>
            </div>
            <div>
                <h3>Solution:</h3>
                <p>{solution}</p>
            </div>
            <div>
                <h3>Test Cases:</h3>
                <pre>{JSON.stringify(testCases, null, 2)}</pre>
            </div>
            <textarea
                value={code}
                onChange={(e) => handleChange(e.target.value)}
                style={{
                    width: '100%',
                    minHeight: '100px',
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ddd',
                }}
            />
            <button onClick={handleSubmit}>Submit</button>
            {result && <div>{result}</div>}
        </div>
    );
};

export default CodeEditor;
