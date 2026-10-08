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

    result = await res.text()
    core.info(`The feteched text is ${result}`)
  } catch (error) {
    core.error(error.message);
    await new Promise(r => setTimeout(r, 1000))
  }
}

core.setOutput('response',result);
if(result != expected){
    core.setFailed("There is a missmatch between the expected and the actual value.");
}
