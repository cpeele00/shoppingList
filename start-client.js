const args = ['start'];
const options = { stdio: 'inherit', cwd: 'challenge-ui', shell: true};

require('child_process').spawn('npm', args, options);