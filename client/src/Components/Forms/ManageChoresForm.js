import React, { useState, useEffect } from "react";
import axios from 'axios'
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";

const ManageChoresForm = () => {
// const [chore , setChore] = React.useState([])
// const [amount , setAmount] = React.useState()

const [chores, setChores] = useState()
const [amount , setAmount] = useState()
const [choresArray , setChoresArray] = useState([])

const [formObject, setFormObject] = useState({})


  // Load all chores and store them with setChore
  useEffect(() => {
    loadChores()
  }, [])

  // Loads all chores and sets them to chores
  function loadChores() {
    axios.get("/api/chores/")
      .then(res =>
        setChoresArray(res.data),
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads chores from the db
  function deleteChore(chore_id) {

  }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value })
  // };

  



function addChore(event) {
    // event.preventDefault();

    // Send the GET request.
    var newChore = {
      chore_name: chores,
      amount: amount,
      admin_id: 1,
    };

console.log(newChore)

    axios.post("/api/chores/", newChore).then(
      function () {
        console.log("This is the result", newChore)
      })
    }

    return (
      <>
        <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            Chore Enforement Officer
  </a>
        </nav>

        <div className="col-md-8 offset-md-2">
          <br></br>
          <br></br>


         

          {choresArray.length ? (
            <List>
                {choresArray.map(chore => {
                  return (
                    <ListItem key={chore.chores_id}>

                        <strong>
                          {chore.chore_name} Amount: {chore.amount}
                        </strong>
  
                      <DeleteBtn onClick={() => deleteChore(chore.chores_id)} />
                    </ListItem>
                  );
                })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
    







          <table className="table">
            <thead>
              <tr>
                <th scope="col">Chore</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Empty Dishwaser</td>
                <td>$1.00</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
              <tr>
                <td>Take out Trash</td>
                <td>$2.00</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
              <tr>
                {/* <td>{chore}</td>
                <td>{amount}</td> */}
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <form>
          <div className="col-md-6 offset-md-3">
            <br></br>
            <br></br>

            <h3>Add Chores</h3>
            <div className="form-group">
              <h3>Chore Name</h3>
              <input type="Name" className="form-control" onChange={e => setChores(e.target.value)} id="choreName"></input>
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
              <h3>Amount</h3>
              <input type="Amount" className="form-control" onChange={e => setAmount(e.target.value)}  id="choreAmount"></input>
            </div>
            <button type="submit" onClick={addChore} className="btn btn-primary">Submit</button>
          </div>
        </form>
        <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
          <a className="navbar-brand" href="#">
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
          </a>
        </nav>

      </>
    )
  };

  export default ManageChoresForm