const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  dbName: 'doctorNotes'
});
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});