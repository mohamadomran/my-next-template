import React from 'react';

interface BlogPreviewProps {
  document: {
    displayed?: {
      slug?: {
        current?: string;
      };
    };
  };
}

const BlogPreview = (props: BlogPreviewProps) => {
  console.log('props', props);
  const { displayed } = props.document;

  if (!displayed?.slug?.current) {
    return <div>The blog needs a slug before it can be previewed.</div>;
  }

  const url = new URL('/api/preview', location.origin);
  url.searchParams.set('slug', displayed.slug.current);
  url.searchParams.set('type', 'blog');

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
      <div>
        <iframe
          src={url.toString()}
          style={{ border: 0, height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
        />
      </div>
    </div>
  );
};

export default BlogPreview;
