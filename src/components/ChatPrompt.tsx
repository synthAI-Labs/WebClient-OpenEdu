'use client';
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
import { Bot, LucideBot, UserCircle2Icon } from 'lucide-react';
import { Avatar } from './ui/avatar';

interface ChatPromptProps {
  moduleId?: number;
}

const ChatPrompt: React.FC<ChatPromptProps> = ({ moduleId }) => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);
    if (process.browser) {
      let inputValue = document.getElementById('userInput') as HTMLInputElement;
      setUserInput(inputValue.value);

      if (userInput.trim() !== '') {
        const userMessage = `User: ${userInput}`;
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setUserInput('');

        try {
          const { authorization, userId } = searchLocalStorage();

          console.log('User Details' + authorization, userId, userMessage);

          if (!authorization || !userId) {
            toast({
              title: 'Error',
              description: 'Please login to continue',
            });
            setLoading(false);
            return;
          }

          let response;

          if (moduleId) {
            response = await fetch(
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
                  module_id: moduleId,
                }),
                credentials: 'include',
              },
            );
          } else {
            response = await fetch(
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
                credentials: 'include',
              },
            );
          }

          if (!response.ok) {
            console.log(response.status);
          }

          const responseData = await response.json();

          console.log('response' + responseData);

          // Handle the response here, for example, update the messages state with the bot response
          const botResponse = `Chatbot: ${responseData.message}`;
          setMessages((prevMessages) => [...prevMessages, botResponse]);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          const botResponse = `Error fetching response from server`;
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        }
      }
    }
  };

  return (
    <Card className="min-w-[300px] lg:min-w-[500px] mr-12">
      <CardHeader>
        <CardTitle>Chat with EduAI</CardTitle>
      </CardHeader>
      <CardContent style={{ flexDirection: 'column-reverse', display: 'flex' }}>
        <div
          style={{
            height: '200px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {messages.reverse().map((message, index) => (
            <div
              key={index}
              style={{
                alignSelf: message.startsWith('User')
                  ? 'flex-end'
                  : 'flex-start',
                margin: '5px',
                maxWidth: '70%',
              }}
            >
              {message.startsWith('User') ? (
                <>
                  <div className=" bg-blue-300/20 px-3 py-1 border rounded-md">
                    <UserCircle2Icon />
                    {message}
                  </div>
                </>
              ) : (
                <>
                  <div className=" bg-green-300/20 px-3 py-1 border rounded-md">
                    <LucideBot />
                    {message}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} style={{ alignSelf: 'flex-start' }}>
          <div className="flex flex-col">
            <Label>Your Question</Label>
            <Input
              type="text"
              id="userInput"
              placeholder="Type your message..."
            />
            <Button className="mt-3">
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatPrompt;
