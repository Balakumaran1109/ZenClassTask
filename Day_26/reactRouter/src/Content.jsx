import React, { useState } from "react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div>
      <div>
        <nav class="navbar navbar-light bg-light d-flex justify-content-center">
          <span class="navbar-brand mb-0 h1">G COURSES</span>
        </nav>
      </div>
      <div>
        <img src={props.imgAddress0}></img>
      </div>

      <nav>
        <div id="nav" className="bg-light px-5 p-2 ">
          <Link to="/">ALL</Link>
          <Link to="/full-stack-development">FULL STACK DEVELOPMENT</Link>
          <Link to="/data-science">DATA SCIENCE</Link>
          <Link to="/cyber-security">CYBER SECURITY</Link>
          <Link to="/career">CAREER</Link>
        </div>
      </nav>

      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 px-5 mb-3">
        <div class="col">
          <div class="card h-100">
            <img
              src={props.imgAddress1}
              class="card-img-top"
              alt="UI/UX Designer"
            ></img>
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle1}</h5>
              <p class="card-text">
                <div>{props.cardText1}</div>
                <br></br>
                <div>READ MORE »</div>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={props.imgAddress2} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle2}</h5>
              <p class="card-text">
                <div>{props.cardText2}</div>
                <br></br>

                <div>READ MORE »</div>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={props.imgAddress3} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle3}</h5>
              <p class="card-text">
                <div>{props.cardText3}</div>
                <br></br>

                <div>READ MORE »</div>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
