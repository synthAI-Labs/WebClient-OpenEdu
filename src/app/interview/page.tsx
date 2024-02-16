"use client"
// Import necessary dependencies
import React, { useState } from 'react';
import { searchLocalStorage } from '@/scripts/check-user-auth';

// Define interfaces for file data and response
interface FileData {
  status: number;
  message: string; // Adjust type to allow for null
}

// Define the InterviewPractisePage component
const InterviewPractisePage: React.FC = () => {
  // State variables
  const [jobDescription, setJobDescription] = useState('');
  const [fileData, setFileData] = useState<FileData | null>(null);

  // Event handler for button click
  const handleButtonClick = async () => {
    try {
      if (process.browser) {
        // Get authorization and userId from local storage
        const { authorization, userId } = searchLocalStorage();

        // Make API call to fetch interview questions
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/interview/get-interview-question`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization,
            user_id: userId,
          },
          body: JSON.stringify({ job_description: jobDescription }),
        });

        if (response.ok) {
          // Parse and set the file data on successful response
          const data: FileData = await response.json();
          setFileData(data);
          console.log(data)
        } else {
          // Handle error response
          console.error('Error fetching data:', response.statusText);
        }
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error fetching data:', error);
    }
  };

  // Render the component
  return (
    <div>
      <h1>Interview Practice Page</h1>

      {/* Input field for job description */}
      <input
        type="text"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Enter job description"
      />

      {/* Button to trigger the API call */}
      <button onClick={handleButtonClick}>Fetch API</button>

      {/* Display the file data underneath the button */}
      {fileData && fileData.message !== null ? (
        <div>
          <h2>File Data:</h2>
        <p>{JSON.stringify(fileData)}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

// Export the component
export default InterviewPractisePage;
