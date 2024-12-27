"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const BlogPost = () => {
  const { slug } = useParams(); // Extract slug from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || Array.isArray(slug)) {
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        const blogData = await client.fetch(
          `*[_type == "blog" && slug.current == $slug][0]`,
          { slug }
        );
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Blog Not Found</h1>
        <p className="text-gray-700 mt-4">
          The blog you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg text-white bg-green-400 rounded-2xl sm:w-auto"
        >
          Go Back
        </Link>
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
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
        >
          Go Back
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
