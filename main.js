import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import puppeteer from 'puppeteer';

import generated from './src/pagedraw/pg-5';
import App from "./src/App";
import * as data from 'src/data/data.json';

// usage:
//   pagedraw login
//   pagedraw sync
//   pagedraw-to-pdf no_incidents1 data.json > file.pdf

const app = express();

app.get('/', function (req, res) {

    // let rendered_html = ReactDOMServer.renderToStaticMarkup(
    //     React.createElement("div", {},
    //         React.createElement('style', {"dangerouslySetInnerHTML": ({__html:
    //             "@media print { body { -webkit-print-color-adjust: exact; } }\
    //             @page{margin-left: 0px;margin-right: 0px;margin-top: 0px;margin-bottom: 0px;}"
    //         })}),
    //         generated({
    //             response_time: "200ms"
    //         })
    //     )
    // );

    var html = ReactDOMServer.renderToStaticMarkup(<App />);

  res.send(html);
});

// let repData = JSON.stringify(data);
// console.log(data.report_data.customerTeamName);

let PORT = 4252;

let server = app.listen(PORT, function () {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(`http://localhost:${PORT}`, {waitUntil: 'networkidle'});
      await page.pdf({path: 'output.pdf', format: 'A4'});

      await browser.close();

      server.close();
    })();
});
