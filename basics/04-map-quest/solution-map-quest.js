/* eslint-disable no-unused-vars */

const mapQuest = (steps) => {
    let opposite = {N: 'S', S: 'N', E: 'W', W: 'E'};

    return steps.reduce(
        (newSteps, step) => {
            if (newSteps[newSteps.length - 1] === opposite[step]) {
                newSteps.pop();
            }

            else newSteps.push(step);

            return newSteps;
        }, [])
}