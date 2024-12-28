"use client"
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import Link from 'next/link'
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer";

const BlogPost = async () => {
  const { slug } = useParams(); // Extract slug from URL

  // Ensure slug is a string
  if (!slug || Array.isArray(slug)) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Invalid Blog Slug</h1>
        <p className="text-gray-700 mt-4">Please check the URL and try again.</p>
      </div>
    );
  }

  // Fetch specific blog data
  const getBlog = async (slug: string) => {
    const blog = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0]`,
      { slug }
    );
    return blog;
  };

  const blog = await getBlog(slug);
  console.log("Slug:", slug);
console.log("Blog Data:", blog);


  if (!blog) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Blog Not Found</h1>
        <p className="text-gray-700 mt-4">The blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.name}</h1>
      <p className="text-gray-700 text-2xl mb-4">{blog.subheading}</p>
      {blog.image && (
        <img
          src={urlFor(blog.image).url()}
          alt={blog.name || "Blog Image"}
          className="w-full h-auto mb-6"
        />
      )}
      <p className="text-gray-700 text-base mb-4">{blog.description}</p>
      <p className="text-gray-700 text-base mb-4">{blog.detail}</p>
       {/* Read More Button */}
       <Link href="/" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                    Go Back
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
    </div>
    <Footer />
    </div>
  );
};

export default BlogPost;
