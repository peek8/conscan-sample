const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const reportsRoot = path.join(process.cwd(), 'reports');
const outputHtmlPath = path.join(reportsRoot, "index.html");


// list all subdirectories under reports
const imageDirs = fs.readdirSync(reportsRoot).filter(d => fs.statSync(path.join(reportsRoot, d)).isDirectory());

const images = fs.readdirSync(reportsRoot)
      .filter(d => fs.statSync(path.join(reportsRoot, d)).isDirectory())
      .map(image => ({
        name: image,
        tags: fs.readdirSync(path.join(reportsRoot, image))
                  .filter(f => f.endsWith('.html'))
                  .map(f => ({
                    filePath: `${image}/${f}`,
                    tag: path.basename(f, ".html"),
                  }))
      }));

const env = nunjucks.configure("reports", {
    autoescape: true,
    noCache: true // Set to false in production for better performance
});

const outputHtml = nunjucks.render('report-index-nunjucks.tmpl.html', {images: images});
fs.writeFileSync(outputHtmlPath, outputHtml);