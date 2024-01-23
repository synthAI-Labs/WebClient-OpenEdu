'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NextModule = () => {
  const [nextModuleId, setNextModuleId] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nextModuleParam = urlParams.get('nextmodule');
    if (nextModuleParam) {
      setNextModuleId(nextModuleParam);
    }
  }, []);

  console.log(nextModuleId);

  return (
    <div>
      <Link href={`/learn/modules/${nextModuleId}`}>
        <Button>{nextModuleId}</Button>
      </Link>
    </div>
  );
  }

export default NextModule;
