import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const PageContentDirectory = join(process.cwd(), 'page-content');

export function getPageContent(page) {
    const pageSlug = page.replace(/\.md/, '');
    const pagePath = join(PageContentDirectory, `${pageSlug}.md`);
    const fileContents = fs.readFileSync(pagePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return {
        data: data,
        content: content
    }
}