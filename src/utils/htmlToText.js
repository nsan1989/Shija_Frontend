export const htmlToText = (html) => {
    if (!html) return '';

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    doc.querySelectorAll(
        'script, style, noscript, iframe, template'
    ).forEach(element => element.remove());

    doc.querySelectorAll('br').forEach(element => {
        element.replaceWith('\n');
    });

    doc.querySelectorAll(
        'p, div, li, h1, h2, h3, h4, h5, h6, blockquote'
    ).forEach(element => {
        element.append(document.createTextNode('\n'));
    });

    return doc.body.textContent
        .replace(/\u00a0/g, '')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]{2,}/g, '')
        .trim();
};