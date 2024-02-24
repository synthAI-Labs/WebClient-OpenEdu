import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { SetStateAction, useEffect, useState } from 'react';

interface Quiz {
  id: string;
  title: string;
  options: string[];
  topics: string[];
  tags: string[];
}

const QuizComponent = ({ quiz }: { quiz: Quiz }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const onOptionClick = (optionId: string) => {
    if (selectedOption === optionId) {
      // Deselect the option if it's already selected
      setSelectedOption('');
    } else {
      // Select the clicked option
      setSelectedOption(optionId);
    }
  };

  useEffect(() => {
    // Add any additional logic here
    // This useEffect will be triggered whenever the selectedOption changes
    // You can perform any desired actions based on the selectedOption value
  }, [selectedOption]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className=" flex flex-col">
          {quiz.options.map((option) => (
            <Button
              variant={selectedOption === option ? 'default' : 'secondary'}
              key={option}
              onClick={() => {
                onOptionClick(option);
              }}
              className={cn('m-4')}
            >
              {option}
            </Button>
          ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default QuizComponent;
