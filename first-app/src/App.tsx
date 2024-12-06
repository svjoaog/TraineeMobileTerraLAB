import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';
import Employee from './components/Employee';
import { ExmployeeClass } from './components/EmployeeClass';

function App() {
  return (
    <React.Fragment>
      <div className = "container mt-3">
        <div className = "grid">
          <div className = "row">
            <div className="col">
              <p className="h3 fw-bold text-sucess">App Component</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere et purus sed volutpat. Vivamus efficitur feugiat consequat. Morbi accumsan nunc sed justo commodo, eu venenatis felis mollis.</p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book"/>Read More</button>
            </div>
          </div>
          {/* <div className='row'>
            <div className='col'>
              <Customer name={'Joao'} age = {25} title = {'Software Engineer'}/>
            </div>
          </div>
          <div className='=row'>
            <div className='col'>
              <CustomerClass name={'Joao'} age = {25} title = {'Software Engineer'}/>
            </div>
          </div> */}
          <div className="row">
            <div className="col">
              <Employee/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <ExmployeeClass/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
