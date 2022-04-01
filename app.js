const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');

//rutas
const mainRouter = require("./routes/mainRouter");
const usersRouter = require("./routes/usersRoutes");

//app set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//funciones que capturan lo ingresado en el formulario
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Subida de sv y session
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3080, () => {
    console.log("El servidor de LQEQ esta corriendo en: http://localhost:3080/")
});

app.use(methodOverride('_method'));
app.use(session({
	secret: "Shhh, secreto",
	resave: false,
	saveUninitialized: false,
}));


app.use("/users", usersRouter);
app.use("/", mainRouter);

