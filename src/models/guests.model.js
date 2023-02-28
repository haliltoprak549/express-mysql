import { conn } from "../db/connection.js"

export let Guest = (guest) => {
  this.room_id = guest.room_id;
  this.full_name = guest.full_name;
  this.tc_no = guest.tc_no;
  this.origin_city = guest.origin_city;
  this.duty = guest.duty;
  this.phone = guest.phone;
  this.check_in_date = guest.check_in_date;
  this.check_out_date = guest.check_out_date;
  this.current = guest.current;
  this.child = guest.child;
  this.description = guest.description;
}

Guest.getGuests = (req, res, next) => {
  let query = "SELECT * FROM guests;";

  conn.query(query, (err, rows) => {
    if (err) next(err)
    else res.send(rows)
  })
}

Guest.addGuest = (newGuest, req, res, next) => {
  let query = "INSERT INTO guests SET ?";

  console.log(newGuest)

  conn.query(query, newGuest, (err, res) => {
    if (err) next(err)
    else res.send('Guest inserted successfully.')
  });
};