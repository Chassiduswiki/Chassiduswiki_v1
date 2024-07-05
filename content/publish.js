document.addEventListener('DOMContentLoaded', function() {
  function convertContent(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const linkRegex = /\[\[([^\|]+)\|([^\]]+)\]\]/g;
      const headingRegex = /^(#+)\s(.+)$/gm;
      let content = node.textContent;
      let converted = false; 

      // Convert links
      content = content.replace(linkRegex, (match, href, text) => {
        converted = true;
        return `<a href="#" data-href="${href}" class="internal-link">${text}</a>`;
      });

      // Convert headings
      content = content.replace(headingRegex, (match, hashes, text) => {
        converted = true;
        const level = hashes.length;
        return `<h${level}>${text}</h${level}>`;
      });

      if (converted) {
        const fragment = document.createRange().createContextualFragment(content);
        node.parentNode.replaceChild(fragment, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE'].includes(node.nodeName)) {
      Array.from(node.childNodes).forEach(convertContent);
    }
  }

  try {
    // Find all Article elements and convert their content
    const articles = document.querySelectorAll('.Article');
    if (articles.length > 0) {
      articles.forEach(article => {
        const visibleContent = article.querySelector('.Article-visible');
        const hiddenContent = article.querySelector('.Article-hidden');
        
        if (visibleContent) convertContent(visibleContent);
        if (hiddenContent) convertContent(hiddenContent);
      });
      console.log('Content conversion completed successfully.');
    } else {
      console.warn('No Article elements found.');
    }
  } catch (error) {
    console.error('Error during content conversion:', error);
  }
});


  // Wait for the graph to be initialized
setTimeout(function() {
  app.graph.renderer.hidePowerTag = true;
}, 0);
