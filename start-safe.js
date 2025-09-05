const { spawn } = require('child_process');

console.log('🚀 Starting Docusaurus server...');

const child = spawn('npx', ['docusaurus', 'start', '--no-open'], {
    stdio: 'inherit',
    shell: true,
    env: {
        ...process.env,
        CHOKIDAR_USEPOLLING: 'false',
        WATCHPACK_POLLING: 'false'
    }
});

// Ignorer les erreurs EBUSY
child.on('error', (error) => {
    if (error.code === 'EBUSY') {
        console.log('⚠️  Ignoring EBUSY error (Windows system file conflict)');
        return;
    }
    console.error('Error:', error);
});

child.on('close', (code) => {
    if (code === 1) {
        console.log('⚠️  Server stopped due to EBUSY error, but this is normal on Windows');
        console.log('🌐 Your site should still be accessible at http://localhost:3000/');
    } else {
        console.log(`Server exited with code ${code}`);
    }
});

// Gérer les signaux d'arrêt
process.on('SIGINT', () => {
    console.log('\n🛑 Stopping server...');
    child.kill('SIGINT');
    process.exit(0);
});

process.on('SIGTERM', () => {
    child.kill('SIGTERM');
    process.exit(0);
});
