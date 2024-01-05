import React from 'react';
import fs from 'fs';
import path from 'path';

interface RenderMDProps {
  content: string;
}

const RenderMD: React.FC<RenderMDProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default RenderMD;
