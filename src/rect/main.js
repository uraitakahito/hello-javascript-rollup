// https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules
/* eslint-disable no-magic-numbers */
import { create, createReportList } from './canvas.js';
import randomSquare, {
  draw, reportArea, reportPerimeter,
} from './square.js';

const root = document.getElementById('root');
const myCanvas = create('myCanvas', root, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
randomSquare(myCanvas.ctx);
