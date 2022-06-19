const controller = require("../controllers/controller")
module.exports = (app) => {
	app.post("/usuario", controller.post)
	app.put("/usuario/:id", controller.put)
	app.delete("/usuario/:id", controller.delete)
	app.get("/usuarios", controller.get)
	app.get("/usuario/:id", controller.getById)
}
