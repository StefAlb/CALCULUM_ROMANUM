import { spawn } from 'child_process';
import http from 'http';

const maxRetries = 30;
const retryDelay = 1000;

function waitForServer(url, retries = 0) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(new Error(`Server responded with ${res.statusCode}`));
      }
    });

    req.on('error', (err) => {
      if (retries < maxRetries) {
        console.log(`Waiting for server... (attempt ${retries + 1}/${maxRetries})`);
        setTimeout(() => waitForServer(url, retries + 1).then(resolve).catch(reject), retryDelay);
      } else {
        reject(new Error(`Server did not start within ${maxRetries * retryDelay / 1000} seconds`));
      }
    });
  });
}

async function main() {
  console.log('Starting Vite dev server...');
  
  const vite = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  vite.on('error', (err) => {
    console.error('Failed to start Vite server:', err);
    process.exit(1);
  });

  try {
    await waitForServer('http://localhost:5173/');
    console.log('Vite server is ready!');
    // Keep the process alive
    process.on('SIGINT', () => {
      vite.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error:', err.message);
    vite.kill();
    process.exit(1);
  }
}

main();
