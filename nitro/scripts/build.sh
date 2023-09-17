supervisord -c /app/supervisor/supervisord.conf

cp /app/configuration/nitro-converter/configuration.json /app/nitro-converter/src/configuration.json
cd /app/nitro-converter; yarn install;

cp /app/configuration/nitro-react/public/* /app/nitro-react/public/
cp /app/configuration/nitro-react/vite.config.js /app/nitro-react
cd /app/nitro-react; yarn install; yarn build:prod

supervisorctl start assets-http-server
supervisorctl start swf-http-server
#supervisorctl start nitro-dev-server

tail -f /dev/null

