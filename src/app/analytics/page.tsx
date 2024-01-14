import { Button } from '@/components/ui/button';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';

const LinksPage = async () => {
  const { files }: { files: string[] } = (await devFiles()).props;

  return (
    <div className=" mt-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">View Analytics</h1>
      <h1 className="text-2xl font-bold text-muted-foreground">
        this is experimental. reload on page switch{' '}
      </h1>
      <div className="flex flex-col md:flex-row">
        {files.map((file: string, index: number) => (
          <div key={index} className="m-3">
            <Link href={`/analytics/${file}`}>
              <Button>{file}</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const devFiles = async () => {
  const devFiles = fs
    .readdirSync(path.join(process.cwd(), 'analytics/dev'))
    .filter((file) => file.endsWith('.html'));

  const files = [...devFiles];

  return {
    props: {
      files,
    },
  };
};

// export const prodFiles = async () => {
//     const devFiles = fs.readdirSync(path.join(process.cwd(), 'analytics/dev')).filter(file => file.endsWith('.html'));
//     const prodFiles = fs.readdirSync(path.join(process.cwd(), 'analytics/prod')).filter(file => file.endsWith('.html'));

//     const files = [...devFiles, ...prodFiles];

//     return {
//         props: {
//             files,
//         },
//     };
// };

export default LinksPage;
