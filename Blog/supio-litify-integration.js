// Supio Schema - How Does Litify Integration with Supio Work?
// URL: https://www.supio.com/blog/supio-litify-integration

(function() {
  var schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "How Does Litify Integration with Supio Work? Automated Case Intelligence for PI Firms",
        "description": "Supio's Litify integration automatically syncs case documents, processes them with AI, and pushes structured insights back—eliminating manual data entry while preserving your existing workflows.",
        "author": {
          "@type": "Organization",
          "name": "Supio",
          "url": "https://www.supio.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Supio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://cdn.prod.website-files.com/67d1d6c69cd4d82353e58909/67db04559c77bb34b44a22f0_supio%20logo%20black.avif",
            "width": 600,
            "height": 60
          }
        },
        "datePublished": "2025-09-03T09:00:00Z",
        "dateModified": "2025-11-12T09:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.supio.com/blog/supio-litify-integration"
        },
        "articleSection": "Legal Technology",
        "keywords": [
          "Litify integration",
          "Litify API",
          "Litify legal software",
          "case management integration",
          "legal AI integration",
          "personal injury software",
          "document automation"
        ],
        "about": [
          {
            "@type": "Thing",
            "name": "Legal Case Management Software Integration"
          },
          {
            "@type": "Thing",
            "name": "AI-Powered Legal Tools"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I have to upload anything to Supio manually?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Once the integration is live, Supio auto-pulls new files from Litify twice daily."
            }
          },
          {
            "@type": "Question",
            "name": "Can I see Supio insights inside Litify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The integration embeds Supio's AI outputs directly into the Matter overview tab."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between a connector and a full integration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A connector requires manual uploads. A full Litify API integration (like with Supio) enables automatic case creation, file sync, and insight pushback."
            }
          },
          {
            "@type": "Question",
            "name": "What kinds of AI outputs are pushed back into Litify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chronologies, timeline events, provider lists, and any structured data Supio extracts from case files."
            }
          },
          {
            "@type": "Question",
            "name": "How long does Litify integration setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial setup typically completes within one business day after your Litify administrator grants API access permissions."
            }
          },
          {
            "@type": "Question",
            "name": "How does the integration handle document security?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The integration respects Litify's existing permission structures, maintaining your firm's established security protocols."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly do insights appear in Litify after documents sync?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most medical chronologies generate within 10-15 minutes. Complex cases with thousands of pages may take longer, but insights typically populate within hours."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.supio.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.supio.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Litify Integration",
            "item": "https://www.supio.com/blog/supio-litify-integration"
          }
        ]
      }
    ]
  };
  
  // Create and inject the script tag
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
  
  console.log('Schema injected successfully: How Does Litify Integration with Supio Work?');
})();