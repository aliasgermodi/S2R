This is for S2R.

Please run the following:

cd backend
npm install
node app.js

cd frontend
npm install
cd reach-googlemaps
npm start

Use the following APIs to add the data

POSTMAN

POST: http://127.0.0.1:5050/api/restaurant

Bulk Edit -> x-www-form-urlencoded

restaurant:Restaurant name
lat:latitude
long:longitude

GET: http://127.0.0.1:5050/api/restaurant


