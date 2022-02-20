import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import hammer from "../assests/hammer.jpeg";
import cutter from "../assests/Cutter.webp";
import drill from "../assests/drill.webp";
import axe from "../assests/images.jpeg";
import ladder from "../assests/ladder.webp";
import sawblade from "../assests/saw blade.jpg";
import wire from "../assests/shopping.png";
import weldingmachine from "../assests/welding machine.webp";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography variant="h4">EQUIPMENT RENTAL</Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <Link
              to="/Login"
              style={{ color: "white", textDecoration: "none" }}
            >
              LOGIN
            </Link>
            <Button color="inherit"><Link
              to="/Signup"
              style={{ color: "white", textDecoration: "none" }}
            >
            SIGN UP
            </Link></Button>
          </Toolbar>
        </AppBar>
      </Box>

      <br></br>
      <div className="row">
        <div className="col-md-3 text-center">
          <div className="card">
            <img
              src={hammer}
              className="card-img-top"
              height="300"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">Hammer</span>
                <br></br>
                <span className="fw-bolder"> $50.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>

        <div className="col-md-3 text-center">
          <div className="card">
            <img
              src={cutter}
              sx={{ width: 500, height: 450 }}
              className="card-img-top"
              height="300"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">CUTTER</span>
                <br></br>
                <span className="fw-bolder"> $30.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <img src={drill} className="card-img-top" height="300" alt=""></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">DRILL</span>
                <br></br>
                <span className="fw-bolder"> $30.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <img src={axe} className="card-img-top" height="300" alt=""></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">Hammer</span>
                <br></br>
                <span className="fw-bolder"> $80.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <img
              src={ladder}
              className="card-img-top"
              height="300"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">LADDER</span>
                <br></br>
                <span className="fw-bolder"> $100.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <img
              src={sawblade}
              className="card-img-top"
              height="300"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">SAW BLADE</span>
                <br></br>
                <span className="fw-bolder"> $10.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <img src={wire} className="card-img-top" height="300" alt=""></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike> <span className="fw-bolder">Hammer</span>
                <br></br>
                <span className="fw-bolder"> $150.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <img
              src={weldingmachine}
              className="card-img-top"
              height="300"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                <strike></strike>{" "}
                <span className="fw-bolder">WELDING MACHINE</span>
                <br></br>
                <span className="fw-bolder"> $500.00</span>
              </p>
              <button className="btn btn-primary">Add to cart</button>
              {/* <span>{this.state.intialvalue}</span> */}
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="bg-dark py-5 ">
        <div className="text-light fw-bold  text-center fs-4" style={{textDecoration:"underline"}}>
          CONTACT US
        </div>
        <div className="text-light fw-bold  text-center ">No:1, xxx street,</div>
        <div className="text-light fw-bold  text-center ">YYY city</div>
        <div className="text-light fw-bold  text-center ">Mobile📞:123456</div>
      </div>
    </div>
  );
}
