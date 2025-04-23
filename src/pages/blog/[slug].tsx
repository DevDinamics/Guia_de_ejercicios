import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogArticle = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Datos del artículo (en un caso real podrías obtenerlos de una API o CMS)
  const articles = {
    'guia-principiantes': {
      title: '💪 ¿Eres nuevo en el gym?',
      subtitle: 'Guía práctica para empezar sin miedo',
      content: [
        { type: 'heading', text: '👕 Qué ropa usar:' },
        { type: 'paragraph', text: 'Elige ropa deportiva cómoda y transpirable. Unos buenos tenis con soporte son clave para evitar lesiones.' },
        
        { type: 'heading', text: '📋 Cómo armar tu primera rutina:' },
        { type: 'paragraph', text: 'Empieza con 3-4 ejercicios básicos: sentadillas, flexiones, remo con mancuerna y planchas. Haz 2-3 series de 10-15 repeticiones. Entrena 2 a 3 veces por semana.' },
        
        // ... resto del contenido
      ]
    }
  };

  const article = articles[slug as keyof typeof articles] || articles['guia-principiantes'];

  return (
    <>
      <Head>
        <title>{article.title} | Blog Fitgo</title>
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" legacyBehavior>
              <a className="text-orange-500 hover:text-orange-600 font-medium">← Volver al blog</a>
            </Link>
          </div>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
            <h2 className="text-xl text-gray-600 mb-6">{article.subtitle}</h2>
            
            <div className="prose max-w-none">
              {article.content.map((section, index) => (
                <div key={index} className="mb-4">
                  {section.type === 'heading' && (
                    <h3 className="text-xl font-semibold mt-6 mb-3">{section.text}</h3>
                  )}
                  {section.type === 'paragraph' && (
                    <p className="mb-4">{section.text}</p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;