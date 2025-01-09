import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl mb-2 mt-6 border-b-2 pb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h1 className="text-2xl mb-2 mt-4">{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        className="w-full h-auto"
        {...(props as ImageProps)}
      />
    ),
    ol: ({ children }) => (
      <div className="pl-6 mt-4">
        <ol className="list-outside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
          {children}
        </ol>
      </div>
    ),
    p: ({ children }) => <p className="mb-2">{children}</p>,
    ...components,
  }
}