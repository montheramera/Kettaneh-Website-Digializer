// BlocksRendererComponent.js (mark this as a client component)
'use client'; // Mark this file as client-side

import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

const BlocksRendererComponent = ({ content, classes = "" }:any) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className={classes}>
            {children}
          </p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className='text-paragraph text-4xl font-bold'>{children}</h1>
            case 2:
              return <h2 className='text-paragraph text-3xl font-semibold'>{children}</h2>
            case 3:
              return <h3 className='text-paragraph text-2xl font-medium'>{children}</h3>
            case 4:
              return <h4 className='text-paragraph text-xl font-normal'>{children}</h4>
            case 5:
              return <h5 className='text-paragraph text-lg font-light'>{children}</h5>
            case 6:
              return <h6 className='text-paragraph text-base font-thin'>{children}</h6>
            default:
              return <h1 className='text-paragraph text-4xl font-bold'>{children}</h1>
          }
        },
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        list: ({ children, format }) => format === 'unordered' ? <ul className='text-paragraph text-base font-light list-disc'>{children}</ul> : <ol className='text-paragraph text-base font-light'>{children}</ol>
      }}
    />
  );
};

export default BlocksRendererComponent;
