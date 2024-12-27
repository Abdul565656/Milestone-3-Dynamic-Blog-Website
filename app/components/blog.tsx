"use client"
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Page = async () => {
  const getBlogs = async () => {
    const blogs = await client.fetch(`
      *[_type=="blog"]{
        name,
        description,
        image,
        slug
      }
    `);
    return blogs;
  };

  const allBlogs = await getBlogs();
  console.log("All Blogs Data:", allBlogs);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
    {allBlogs.map((blog: any, index: number) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Blog Image */}
        {blog.image && (
          <div className="relative w-full h-64 bg-gray-200">
            <img
              src={urlFor(blog.image).width(600).height(400).url()}
              alt={blog.name || "Blog Image"}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
  
        <div className="p-6">
          {/* Blog Title */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 transition-colors duration-200">
            {blog.name}
          </h2>
  
          {/* Blog Description */}
          <p className="text-gray-700 mb-4 text-base line-clamp-3">
            {blog.description}
          </p>

          {/* Read more button */}
          <Link href={`/blog/${blog.slug.current}`} className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </Link>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Page;
