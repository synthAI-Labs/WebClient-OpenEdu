'use client';
import { searchLocalStorage } from '@/scripts/check-user-auth';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import { useState } from 'react';
import { set } from 'animejs';

interface PageProps {
  moduleId: number;
}
const MarkAsCompleteButton: React.FC<PageProps> = ({ moduleId }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleClick = async () => {
    setButtonClicked(true);
    if (process.browser) {
      const { authorization, userId } = searchLocalStorage();
      try {
        console.log('event triggered');
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/complete/m/${moduleId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization,
              user_id: userId,
            },
          },
        );

        console.log('fetch done' + response);

        if (response.ok) {
          toast({
            title: 'Module marked as complete',
          });
        } else {
          toast({
            title: `${response.status}`,
            description: 'Something went wrong, please try again',
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setButtonClicked(false);
      }
    }
  };
  return (
    <Button onClick={() => handleClick()} disabled={buttonClicked}>
      {buttonClicked ? <p>Marking...</p> : <p>Mark as complete</p>}
    </Button>
  );
};

export default MarkAsCompleteButton;
