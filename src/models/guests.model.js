import { conn } from "../db/connection.js"

export class Guest {

  constructor(guest) {
    this.room_id = guest.room_id
    this.full_name = guest.full_name
    this.tc_no = guest.tc_no
    this.origin_city = guest.origin_city
    this.duty = guest.duty
    this.phone = guest.phone
    this.check_in_date = guest.check_in_date
    this.check_out_date = guest.check_out_date
    this.current = guest.current
    this.child = guest.child
    this.description = guest.description
  }

  // returns all guests
  static getGuests = (req, res, next) => {
    let query = "SELECT * FROM guests;"

    conn.query(query, (err, rows) => {
      if (err) next(err)
      else res.send(rows)
    })
  }

  // returns the guest with the given id
  static getGuestByID = (guest_id, req, res, next) => {
    let query = "SELECT * FROM guests WHERE guest_id = ?"

    conn.query(query, guest_id, (err, rows) => {
      if (err) next(err)
      else res.send(rows[0])
    })
  }

  // inserts a guest with the given parameters, returns the inserted guest
  addGuest = (req, res, next) => {
    let query = "INSERT INTO guests SET ?"

    conn.query(query, this, (err) => {
      if (err) next(err)
    })

    let query2 = 'SELECT * FROM guests WHERE guest_id = LAST_INSERT_ID();'

    conn.query(query2, (err, rows) => {
      if (err) next(err)
      else res.send(rows[0])
    })
  }

  // deletes the guest with the given guest_id, returns the deleted guest
  static deleteGuest = (guest_id, req, res, next) => {
    let deletedGuest
    let query1 = 'SELECT * FROM guests WHERE guest_id = ?'
    conn.query(query1, guest_id, (err, rows) => {
      if (err) next(err)
      else deletedGuest = rows[0]
    })

    let query2 = 'DELETE FROM guests WHERE guest_id = ?'

    conn.query(query2, guest_id, (err) => {
      if (err) next(err)
      else res.send(deletedGuest)
    })
  }

  // updates the guest with the given guest_id, returns the updated guest
  updateGuest = (guest_id, req, res, next) => {
    let query = 'UPDATE guests SET ? WHERE guest_id = ?'

    conn.query(query, [this, guest_id], (err) => {
      if (err) next(err)
    })

    let query2 = 'SELECT * FROM guests WHERE guest_id = ?'

    conn.query(query2, guest_id, (err, rows) => {
      if (err) next(err)
      else res.send(rows[0])
    })
  }
}