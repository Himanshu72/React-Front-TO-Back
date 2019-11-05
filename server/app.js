const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const uuid = require("uuid");
const port = 8000;
class Contact {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.ph = phone;
  }
}
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
  next();
});

let contacts = [
  new Contact("1", "Himanshu Joshi", "hjoshi115@gmail.com", "79898985828"),
  new Contact("2", "Dhiraj Joshi", "hjoshi", "1234556")
];
app.get("/get/contacts", (req, res) => res.json(contacts));
app.get("/get/contact/:id", (req, res) => {
  const id = Buffer.from(req.params.id, "base64").toString("ascii");

  let data;

  for (let con of contacts) {
    if (con.id == id) {
      data = con;
      break;
    }
  }
  if (!data) {
    data = { opt: false };
  }
  res.json(data);
});
app.post("/add/contact", (req, res) => {
  const newContact = new Contact(
    uuid(),
    req.body.name,
    req.body.email,
    req.body.ph
  );
  contacts.push(newContact);
  res.json(newContact);
});

app.delete("/delete/contact/:id", (req, res) => {
  contacts = contacts.filter(ele => ele.id != req.params.id);
  res.json({ op: true });
});

app.put("/modify/contact/:id", (req, res) => {
  const id = Buffer.from(req.params.id, "base64").toString("ascii");
  console.log(req.body);
  let newContact = {
    id: id,
    name: req.body.name,
    email: req.body.email,
    ph: req.body.ph
  };

  contacts = contacts.filter(ele => ele.id != id);
  contacts.push(newContact);
  res.json(newContact);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
