import { GeniusSDKWrapper } from './geniusSDKWrapper';

const sdk = GeniusSDKWrapper.getInstance();

function init() {
    sdk.initGnus();
    //sdk.processGnus();
}

function cleanup() {
    console.log('Cleaning up before exit...');
    setTimeout(() => {
        console.log('Forcefully terminating the process.');
        process.exit(1);
    }, 1000); // Giving some time for cleanup operations to complete
}

// Listen for termination signals (e.g., Ctrl+C)
process.on('SIGINT', () => {
    console.log('Received SIGINT');
    cleanup();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM');
    cleanup();
    process.exit(0);
});

process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
    cleanup();
});

// Initialize the SDK
init();

setInterval(() => {
    // Do nothing, just keep the event loop busy
}, 1000);