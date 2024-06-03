// app.js

let memoryLeakArray = [];
let leakInterval;

document.getElementById('startLeak').addEventListener('click', () => {
    if (leakInterval) return; // Prevent multiple intervals

    leakInterval = setInterval(() => {
        // Creating objects and pushing them to the array to simulate memory leak
        for (let i = 0; i < 1000; i++) {
            memoryLeakArray.push(new Array(1000).fill('memory leak'));
        }
        console.log(`Leaked objects count: ${memoryLeakArray.length}`);
    }, 1000);

    // Disable start button and enable stop button
    document.getElementById('startLeak').disabled = true;
    document.getElementById('stopLeak').disabled = false;
});

document.getElementById('stopLeak').addEventListener('click', () => {
    clearInterval(leakInterval);
    leakInterval = null;
    console.log('Memory leak stopped');

    // Enable start button and disable stop button
    document.getElementById('startLeak').disabled = false;
    document.getElementById('stopLeak').disabled = true;
});

// Initially disable the stop button
document.getElementById('stopLeak').disabled = true;
document.getElementById('stopLeak').classList.add('bg-gray-400', 'cursor-not-allowed');
