import React from 'react';

interface BlogContentProps {
  content: Array<{
    type: 'heading' | 'paragraph';
    text: string;
  }>;
}

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="prose max-w-none">
      {content.map((section, index) => (
        <div key={index} className="mb-4">
          {section.type === 'heading' && (
            <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center">
              <span className="mr-2">{section.text.split(' ')[0]}</span>
              {section.text.split(' ').slice(1).join(' ')}
            </h3>
          )}
          {section.type === 'paragraph' && (
            <p className="mb-4 text-gray-700">{section.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};