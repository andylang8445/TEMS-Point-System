aws CentOS WebServer, NodeJS Server, and Google Cloud Platform(SQL and Storage Bucket) is used.
For CentOS WebServer:
	General Apache server is being used
	Directory is /var/www/html/

For NodeJS Websocket Server:
	This Server is being used to update the SQL DB when there is a request from tutor's console.
	forever is used (npm forever) for keeping the NodeJS app up and to auto start the program when the Server is up.
	Directory for the NodeJS app is /var/websocket/w.js

EST Bill form AWS: 20CAD/Month
EST Bill from Google Cloud Platform: 22.55CAD/Month

Last Updated: 04/12/2020 @ 8:42am (UTC)