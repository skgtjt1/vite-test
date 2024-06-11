import express from "express"; //ES6
const app = express();

//tell our app to use JSON data

app.use(express.json());

//add a port for the server to use on the localhost (captials are irrelevant)

const PORT = 8080; //makes it easier to change the port if necessary, can write the port directly in the following method if we prefer.

//tell the app to listen to this port
app.listen(PORT, function () {
  console.log(`Server is up on port: ${PORT}`);
}); //param 1 is port, param 2 can be used for callback function

//need to create an endpoint for my root (ruuut) route (rowt)
//the get method to read data, creating an endpoint to read data.
//two params, 1: the endpoint, param 2: the callback function
app.get("/", (request, response) => {
  //the callback function needs to parameters
  response.json({ message: "this is the root route" });
});

//what if we want to create data we use the .post method
//We can't see our post endpoint in a browser because browsers just read data
app.post("/comments", function (request, response) {
  response.json({ message: "data sent successfully." });
});
//when we handle data from the client, we will use request.body (body will represent to data object we are receiving.)

//how do we test different endpoints that are not .get.
//you can test a post endpoint using thunder client to simulate a client request

app.get("/api/pokemon", function (req, res) {
  const allPokemon = [
    { name: "Pikachu", colour: "yellow" },
    { name: "Charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  res.json(allPokemon);
});
