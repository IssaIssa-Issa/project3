import React from 'react'
import BalanceCard from '../Cards/BalanceCard'
import GoalCard from '../Cards/GoalCard'
import ChoreCard from '../Cards/ChoreCard'
import "./style.css"

const ChildContainer = () => {
return(
    <>
            <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img id="childFooterLogo" src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
        <h3 className="header-title">Log Out</h3>

      </nav>

    <div className="childContainer" >
    <div className="row">
    <div className="col-md-6">
    <BalanceCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <ChoreCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <GoalCard />
    </div>
    </div>

    </div>
</>
)

}
export default ChildContainer