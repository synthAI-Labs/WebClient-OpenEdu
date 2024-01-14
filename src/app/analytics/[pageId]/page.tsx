'use server';
import fs from 'fs';
import path from 'path';
import React, { useEffect, useState } from 'react';

interface GetTopicsProps {
  params: {
    pageId: string;
  };
}

const renderAnalyticsPage: React.FC<GetTopicsProps> = async ({ params }) => {
  const htmlContent = await getPage(params.pageId);
  return (
    <div>
      {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
      {!htmlContent && <div>Reload page</div>}
    </div>
  );
};

const getPage = async (pageId: string) => {
  if (typeof pageId !== 'string') {
    throw new Error(`pageId must be a string, but got ${typeof pageId}`);
  }

  const filePath = path.join(process.cwd(), 'analytics/dev', `${pageId}`);
  console.log(filePath);

  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return fileContent;
  } catch (error) {
    console.error('Error reading file:', error);
    throw new Error('Error reading file');
  }
};

export default renderAnalyticsPage;
