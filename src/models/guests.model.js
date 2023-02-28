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

  static getGuests = (req, res, next) => {
    let query = "SELECT * FROM guests;"

    conn.query(query, (err, rows) => {
      if (err) next(err)
      else res.send(rows)
    })
  }

  static getSingleGuest = (guest_id, req, res, next) => {
    let query = "SELECT * FROM guests WHERE guest_id = ?"

    conn.query(query, guest_id, (err, rows) => {
      if (err) next(err)
      else res.send(rows)
    })
  }

  addGuest = (req, res, next) => {
    let query = "INSERT INTO guests SET ?"

    conn.query(query, this, (err) => {
      if (err) next(err)
      else res.send(this)
    })
  }

  static deleteGuest = (guest_id, req, res, next) => {
    let query = 'DELETE FROM guests WHERE guest_id = ?'

    conn.query(query, guest_id, (err) => {
      if (err) next(err)
      else res.send(guest_id)
    })
  }

  updateGuest = (guest_id, req, res, next) => {
    let query = `UPDATE guests SET ? WHERE guest_id = ${guest_id}`
    
    conn.query(query, this, (err) => {
      if (err) next(err)
      else {
        console.log(conn)
        res.send('updated')
      }
    })
  }
}