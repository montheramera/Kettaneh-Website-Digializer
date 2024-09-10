// BlocksRendererComponent.js (mark this as a client component)
'use client'; // Mark this file as client-side

import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

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
      }}
    />
  );
};

export default BlocksRendererComponent;
