const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const reportPath = `file://${path.resolve('C:/Users/testuser/AutomationTesting/testsreports/nightwatch-html-report/index.html')}`;

    await page.goto(reportPath, { waitUntil: 'networkidle2' });

    await page.pdf({
        path: 'nightwatch-report.pdf',
        format: 'A2',
        printBackground: true
    });

    await browser.close();
    console.log('PDF generated successfully.');
})();
