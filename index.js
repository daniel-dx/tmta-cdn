const Promise = require('bluebird');
const ghPages = Promise.promisifyAll(require('gh-pages'));
const ora = require('ora');
const fs = require('fs-extra');
const glob = Promise.promisify(require('glob'));
const unzipper = require('unzipper');
const path = require('path');

function publish() {
  const spinner = ora('Publishing gitbooks...').start();
  return ghPages
    .publish('./dist')
    .then(() => {
      spinner.succeed('Publish successfully.');
    })
    .catch(() => {
      spinner.fail(err);
    });
}

function clean() {
  return fs.remove('./dist');
}

async function handleData() {
  await fs.ensureDir('./dist');
  await fs.copy('./data/', './dist/');
  await glob('./dist/**/*.zip').then(zipFiles => {
    return zipFiles.reduce((chain, zipFile) => {
      const extractPath = path.dirname(zipFile);
      const dirName = path.basename(zipFile, '.zip');
      return chain.then(async () => {
        await unzipper.Open.file(zipFile).then(d => d.extract({path: path.resolve(extractPath, dirName), concurrency: 5}));
        await fs.remove(zipFile);
        return;
      })
    }, Promise.resolve())
  })
}

async function main() {
  await clean();
  await handleData();
  await publish();
}

main();
