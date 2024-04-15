import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GoogleTranslate = () => {
    useEffect(() => {
        function googleTranslateElementInit() {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', includedLanguages: 'en,es,fr,de', },
            'google_translate_element'
          );
        }

    // Load Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    // Define callback function for script onload event
    script.onload = () => {
      googleTranslateElementInit();
    };

    // Append script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Helmet>
    <div id="google_translate_element"></div>
  </Helmet>
   // <div id="google_translate_element"></div>

  );
};

export default GoogleTranslate;
