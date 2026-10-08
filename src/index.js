import * as core from '@actions/core';

const url = core.getInput('url', { required: true });
const expected = core.getInput('expected', { required: true });
const retries = core.getInput('retries', { required: false });

const numberOfRetries = parseInt(retries);
let result;
for(let x = 0; x < numberOfRetries; x++){
   try {
    const response = await fetch(url);
    if (!response.ok) {
        await new Promise(r => setTimeout(r, 1000))
        continue;
    }

    result = await response.text()
    core.info(`The feteched text is ${result}`)
    break;
  } catch (error) {
    core.error(error.message);
    await new Promise(r => setTimeout(r, 1000))
  }
}

if(result == undefined){
    core.setFailed("The server couldn't be reached!");
} else {
    core.setOutput('response',result);
    if(result != expected){
        core.setFailed(`There is a missmatch between the expected and the actual value. /n ${result} != ${expected}`);
    }
}
