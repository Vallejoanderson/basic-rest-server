const express = require('express');
const cors = require('cors');
class Server {
	constructor(){
		this.app = express();
		this.port = process.env.PORT;
		//Path
		this.usersPath = '/api/users';
		//Middlewares
		this.middlewares();
		//App routes
		this.routes();
	}

	middlewares() {
		//CORS
		this.app.use(cors());
		//Parsing and reading body
		this.app.use(express.json());
		//Esta declaracion susituye cualquier path previo hacia '/'
		this.app.use( express.static('public') )
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/user'))
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Example app listening on port ${this.port}`)
		});
	}
}

module.exports = Server;