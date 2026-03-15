// import { MDXProvider } from '@mdx-js/react';
import { Fragment } from 'react';
import { usePageSeo } from '../../hooks/usePageSeo';
// import Post from '../../blog/post.mdx';
// import Content from "!babel-loader!@mdx-js/loader!../../blog/post.mdx";
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/react'`.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const components = {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h1: (props: any) => <h1 {...props} />
};

export const MdxContent = () => {
  usePageSeo({
    title: 'T2MED Blog | Medical Innovation Insights',
    description:
      'Updates, stories, and insights from the T2MED medical innovation hackathon community.',
    path: '/blog'
  });

  return (
    <Fragment>
      <main style={{maxWidth: '900px', margin: '120px auto 80px', padding: '0 20px'}}>
        <h1>T2MED Blog</h1>
        <p>
          This section will include updates from the T2MED community, hackathon announcements,
          and highlights from teams, mentors, and partners.
        </p>
        <p>
          TODO: Replace this placeholder with real MDX blog content before broad indexing.
        </p>
      </main>
    </Fragment>
  );
};
