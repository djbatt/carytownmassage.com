import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const PageContentDirectory = join(process.cwd(), 'page-content');

export function getPages() { // Outputs all files in page-content
    const Pages = fs.readdirSync(PageContentDirectory);
    console.log(Pages);
    return Pages;
}