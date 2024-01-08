"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const RenderContent = ({ contentURL }: { contentURL: string }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        if (contentURL) {
            fetchContent(contentURL)
                .then((data: string) => {
                    setContent(data);
                })
                .catch(() => {
                    setError('Error fetching content');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [contentURL]);

    const fetchContent = async (url: string): Promise<string> => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        return data;
    };

    const customComponents = {
        h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
        h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
        p: ({ children }: { children: React.ReactNode }) => <p className="my-4">{children}</p>,
        a: ({ children, href }: { children: React.ReactNode; href: string }) => (
            <a className="text-blue-500 hover:underline" href={href}>
                {children}
            </a>
        ),
        ul: ({ children }: { children: React.ReactNode }) => <ul className="list-disc list-inside my-4">{children}</ul>,
        ol: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
        li: ({ children }: { children: React.ReactNode }) => <li className="my-1">{children}</li>,
        blockquote: ({ children }: { children: React.ReactNode }) => <blockquote className="border-l-4 border-gray-300 italic my-4 pl-4">{children}</blockquote>,
        hr: () => <hr className="my-4" />,
        table: ({ children }: { children: React.ReactNode }) => <table className="table-auto my-4">{children}</table>,
        thead: ({ children }: { children: React.ReactNode }) => <thead className="bg-gray-200">{children}</thead>,
        tbody: ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>,
        tr: ({ children }: { children: React.ReactNode }) => <tr>{children}</tr>,
        th: ({ children }: { children: React.ReactNode }) => <th className="border px-4 py-2">{children}</th>,
        td: ({ children }: { children: React.ReactNode }) => <td className="border px-4 py-2">{children}</td>,
        inlineCode: ({ children }: { children: React.ReactNode }) => <code className="bg-gray-200 px-1 rounded-md">{children}</code>,
        code: ({ children }: { children: React.ReactNode }) => <code className="bg-gray-200 px-1 rounded-md">{children}</code>,
        pre: ({ children }: { children: React.ReactNode }) => <pre className="bg-gray-200 px-1 rounded-md">{children}</pre>,
        img: ({ src, alt }: { src: string; alt: string }) => <img className="my-4" src={src} alt={alt} />, // Add the missing img component
    };

    return (
        <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded-md shadow-md">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                // <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
                <ReactMarkdown>{content}</ReactMarkdown>
            )}
        </div>
    );
};

export default RenderContent;
