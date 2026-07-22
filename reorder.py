import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Define the sections using regex to capture comments and the section tag
pattern = re.compile(r'(\s*<!--.*?-->\s*<section class=\"(about|testimonials|method|process|students-photos|resources|certificate|plans|final-cta).*?</section>)', re.DOTALL)

sections = {}
for match in pattern.finditer(html):
    full_text = match.group(1)
    class_name = match.group(2)
    sections[class_name] = full_text

# The new order
new_order = [
    'method',
    'testimonials',
    'process',
    'students-photos',
    'resources',
    'certificate',
    'about',
    'plans',
    'final-cta'
]

# Ensure we found all of them
if len(sections) == 9:
    # Concatenate in new order
    new_html_block = ''.join([sections[name] for name in new_order])
    
    # Replace the whole block of sections with the new block
    # Find the start of the first section and end of the last section in the original html
    first_match = next(pattern.finditer(html))
    last_match = list(pattern.finditer(html))[-1]
    
    start_idx = first_match.start()
    end_idx = last_match.end()
    
    final_html = html[:start_idx] + new_html_block + html[end_idx:]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(final_html)
    print('Reordered successfully!')
else:
    print('Error: Found', len(sections), 'sections. Expected 9.')
    print('Found:', list(sections.keys()))
