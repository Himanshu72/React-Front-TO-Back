const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
class Contact {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from or use "*" Accept  form all
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let contacts = [
  new Contact(1, "Himanshu Joshi", "hjoshi115@gmail.com", "79898985828")
];
app.get("/get/contacts", (req, res) => res.json(contacts));
app.get("/get/contact/:id", (req, res) =>
  res.json(contacts.filter(ele => ele.id == req.params.id))
);
app.post("/add/contact", (req, res) => {
  contacts.push(
    new Contact(req.body.id, req.body.name, req.body.email, req.body.phone)
  );
  res.json({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
});

app.delete("/delete/contact/:id", (req, res) => {
  let newContact = {
    id: req.body.id,
    name: req.body.name,
    emaill: req.body.email,
    phone: req.body.phone
  };
  contacts = contacts.filter(ele => ele.id != req.params.id);
  res.json(newContacts);
});

app.put("/modify/contact/:id", (req, res) => {
  let newContact = {
    id: req.params.id,
    name: req.body.name,
    emaill: req.body.email,
    phone: req.body.phone
  };

  contacts = contacts.filter(ele => ele.id != req.params.id);
  contacts.push(newContact);
  res.json(newContact);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
