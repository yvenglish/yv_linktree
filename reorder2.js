const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const markers = [
    '    <!-- SOBRE MIM -->',
    '    <!-- 4. AVALIAÇÕES -->',
    '    <!-- 5. MÉTODO YV -->',
    '    <!-- 6. COMO ACONTECE -->',
    '    <!-- 7. CARROSSEL DE FOTOS -->',
    '    <!-- 8. RECURSOS REDESENHADO -->',
    '    <!-- 9. CERTIFICADO -->',
    '    <!-- 10. PLANOS (INVESTIMENTO) -->',
    '    <!-- 11. PRÓXIMO PASSO -->',
    '  <!-- 12. FOOTER REDESENHADO -->'
];

const indices = markers.map(m => html.indexOf(m));
if (indices.includes(-1)) {
    console.error("Missing marker!");
    console.log(indices);
    process.exit(1);
}

const blocks = {};
blocks['about'] = html.substring(indices[0], indices[1]);
blocks['testimonials'] = html.substring(indices[1], indices[2]);
blocks['method'] = html.substring(indices[2], indices[3]);
blocks['process'] = html.substring(indices[3], indices[4]);
blocks['students-photos'] = html.substring(indices[4], indices[5]);
blocks['resources'] = html.substring(indices[5], indices[6]);
blocks['certificate'] = html.substring(indices[6], indices[7]);
blocks['plans'] = html.substring(indices[7], indices[8]);
blocks['final-cta'] = html.substring(indices[8], indices[9]);

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

const newHtmlBlock = newOrder.map(k => blocks[k]).join('');

const finalHtml = html.substring(0, indices[0]) + newHtmlBlock + html.substring(indices[9]);

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Reordered successfully!');
