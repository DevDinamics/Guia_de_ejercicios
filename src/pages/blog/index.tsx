import React from 'react';
import Head from 'next/head';
import { BlogCard } from '../../components/blog/BlogCard';

const BlogPage = () => {
  const articles = [
    {
      slug: 'guia-principiantes',
      title: '¿Eres nuevo en el gym?',
      description: 'Guía práctica para empezar sin miedo y con confianza',
      icon: ''
    },
    //// Articles ////
  ];

  return (
    <>
      <Head>
        <title>Blog Fitgo - Consejos y Guías</title>
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Blog Fitgo</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <BlogCard
                key={article.slug}
                title={article.title}
                description={article.description}
                slug={article.slug}
                icon={article.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;