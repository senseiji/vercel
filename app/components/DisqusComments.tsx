'use client';

import { useEffect } from 'react';

interface DisqusCommentsProps {
  url: string;
  identifier: string;
  title: string;
}

declare global {
  interface Window {
    disqus_config: any;
    DISQUS: any;
  }
}

export default function DisqusComments({ url, identifier, title }: DisqusCommentsProps) {
  useEffect(() => {
    // Clear any existing Disqus thread
    const existingThread = document.getElementById('disqus_thread');
    if (existingThread) {
      existingThread.innerHTML = '';
    }

    // Configure Disqus
    window.disqus_config = function (this: any) {
      this.page.url = url;
      this.page.identifier = identifier;
    };

    // Load Disqus script
    if (!document.querySelector('script[src*="mlacademy-1.disqus.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://mlacademy-1.disqus.com/embed.js';
      script.setAttribute('data-timestamp', (+new Date()).toString());
      (document.head || document.body).appendChild(script);
    } else if (window.DISQUS && typeof window.DISQUS.reset === 'function') {
      // Reset Disqus if it's already loaded
      try {
        window.DISQUS.reset({
          reload: true,
          config: window.disqus_config,
        });
      } catch (error) {
        console.warn('Error resetting Disqus:', error);
      }
    }

    return () => {
      // Cleanup on unmount - add null check
      if (window.DISQUS && typeof window.DISQUS.reset === 'function') {
        try {
          window.DISQUS.reset({
            reload: true,
          });
        } catch (error) {
          console.warn('Error resetting Disqus:', error);
        }
      }
    };
  }, [url, identifier, title]);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Comments</h3>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  );
}