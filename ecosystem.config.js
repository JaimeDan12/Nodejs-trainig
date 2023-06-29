module.exports = {
  apps : [{
    script: './Bases/index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      key  : './kkb-key.key',
      user : 'ubuntu',
      host : '195.15.195.132',
      ref  : 'origin/main',
      repo : 'https://github.com/JaimeDan12/Nodejs-trainig.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
