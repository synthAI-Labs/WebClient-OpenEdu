"use client"
import React, { useState, FormEvent } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { searchLocalStorage } from '@/scripts/check-user-auth';
import { toast } from './ui/use-toast';
import { Bot } from 'lucide-react';

interface ChatPromptProps {
  moduleId?: number;
}

const ChatPrompt: React.FC<ChatPromptProps> = ({ moduleId }) => {
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (process.browser) {
      let inputValue = document.getElementById('userInput') as HTMLInputElement;
      setUserInput(inputValue.value);

      if (userInput.trim() !== '') {
        const userMessage = `User: ${userInput}`;
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setUserInput('');

        try {
          const { authorization, userId } = searchLocalStorage();

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/chat`,
            {
              method: 'POST',
              headers: {
                Authorization: authorization,
                user_id: userId,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: userMessage,
              }),
            },
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const responseData = await response.json();

          // Handle the response here, for example, update the messages state with the bot response
          const botResponse = `Chatbot: ${responseData.message}`;
          setMessages((prevMessages) => [...prevMessages, botResponse]);

        } catch (error) {
          console.error('Error fetching response from bot:', error);
          // Handle error, show a toast, etc.
          // toast.error('Error fetching response from bot');
        }
      }
    }
  };

  console.log(messages);

  return (
    <Card>
      <CardHeader>
        <div className="flex">
          <Bot size={30} className="mr-2" />
          <div>
            <CardTitle>EduAI</CardTitle>
            <CardDescription>Your custom AI Tutor</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          style={{
            height: '200px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label>Your Question</Label>
            <Input
              type="text"
              id="userInput"
              placeholder="Type your message..."
            />
            <Button className="mt-3">Submit</Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatPrompt;
