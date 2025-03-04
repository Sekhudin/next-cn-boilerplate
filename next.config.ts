import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
// import rehypeRaw from "rehype-raw";
// import rehypeToc from "rehype-toc";

const nextConfig: NextConfig = {
  // crossOrigin: "anonymous",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight],
  },
});

export default withMDX(nextConfig);
