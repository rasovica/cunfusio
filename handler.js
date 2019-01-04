const txtgen = require('txtgen');
const jade = require('jade');
const fs = require('fs');
const path = require('path');

const randomWords = require('random-words');
const html_types = ["post", "article", "news"];

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath);
}

export const render = async (event, context) => {
  const type = () => html_types[Math.floor(Math.random()*html_types.length)];
  const slug = () => randomWords(5).join("-");

  return {
    statusCode: 200,
    body: /*jade.renderFile('../post.jade', {data : {'val' : 'This is a Test'}}, null)*/ getDirectories('.'),
    headers: {
      'Content-Type': 'text/html'
    }
  };
};