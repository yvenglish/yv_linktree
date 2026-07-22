const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// We use a regex that matches the HTML comment followed by the section tag and all its content up to the closing section tag.
const pattern = /(\s*<!--.*?-->\s*<section class=\"(about|testimonials|method|process|students-photos|resources|certificate|plans|final-cta).*?<\/section>)/gs;

const sections = {};
let match;
const matches = [];

while ((match = pattern.exec(html)) !== null) {
    sections[match[2]] = match[1];
    matches.push({ start: match.index, end: pattern.lastIndex });
}

const newOrder = [
    'method',
    'testimonials',
    'process',
    'students-photos',
    'resources',
    'certificate',
    'about',
    'plans',
    'final-cta'
];

if (Object.keys(sections).length === 9) {
    const newHtmlBlock = newOrder.map(name => sections[name]).join('');
    
    const startIdx = matches[0].start;
    const endIdx = matches[matches.length - 1].end;
    
    const finalHtml = html.substring(0, startIdx) + newHtmlBlock + html.substring(endIdx);
    
    fs.writeFileSync('index.html', finalHtml, 'utf8');
    console.log('Reordered successfully!');
} else {
    console.log('Error: Found ' + Object.keys(sections).length + ' sections. Expected 9.');
    console.log('Found:', Object.keys(sections));
}
