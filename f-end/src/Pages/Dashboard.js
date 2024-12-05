import React, { useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import MessagePage from "./MessagePage";
const Dashboard = () => {
  

  return (
    <>
      <section className="mt-5">
        <div className="dashboard-nav">
          <Container>
            
            <h1 className="text-danger " style={{
              textAlign:'center',
              fontWeight:'bold'
            }}>Admin Dashboard</h1>

            <div className="sub-menu-container">

              
                <Link to="/dashboard/messages" style={{textDecoration:'none'}}>
                  <div className="sub-menu text-center " style={{
                    backgroundColor:'', border:'1px solid black',borderRadius:'10px'
                    }}>
                  <i className="bi bi-envelope" style={{fontSize:'4rem'}}></i><br/>
                    <p style={{
                      textDecoration:'none',
                      fontSize:'1.2rem'
                    }}>Messages</p>
                  </div>
                </Link>
                
               <Link to="/dashboard/booking" style={{textDecoration:'none'}}>
                <div className="sub-menu text-center " style={{
                  backgroundColor:'',border:'1px solid black',borderRadius:'10px'
                  }}>
                <i className="bi bi-book" style={{fontSize:'4rem'}}></i><br/>
                  <p style={{
                    textDecoration:'none',
                    fontSize:'1.2rem'
                  }}>Booking</p>
                </div>
                </Link>
            </div>

          </Container>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
