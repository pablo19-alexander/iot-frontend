import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

class UserCreate extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      
        identification_type: "",
        identification: "",
        phone: "",
        address: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        username: ""
      
    };
  }

  cambioValor = (e) =>{
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({state});
    console.log(this.state);
  }

  enviarDatos = (e) =>{
    e.preventDefault();
    console.log("formulario fue enviado....");

    let{identification_type,identification,phone,address,email,first_name,last_name,password,username} = this.state;
    
    console.log(this.state);

    var datosEnviar={
      identification_type:identification_type,
      identification:identification,
      phone:phone,
      address:address,
      email:email,
      first_name:first_name,
      last_name:last_name,
      password:password,
      username:username
    } 

    console.log(datosEnviar);

    fetch("http://127.0.0.1:8000/api/users/", {
      method:"POST",
      body:JSON.stringify(datosEnviar),
      
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        // <Redirect to="/UserList" />
        this.props.history.push("/UserList");
      }) //mostramos los datos
      .catch(console.log);
  }

  render() {

    let{identification_type,identification,phone,address,email,first_name,last_name,password,username} = this.state;

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                  <strong>New User</strong>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* create new user */}
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">NEW USER</h3>
                </div>

                <form onSubmit={this.enviarDatos}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        
                        <div className="form-group">
                          <label htmlFor="identification_type">Identifiction Type</label>
                          <select className="form-control" name="identification_type" onChange={this.cambioValor} value={identification_type}>
                            <option value="3">Registro civil de nacimiento</option>
                            <option value="4">Tarjeta de identidad</option>
                            <option value="5">Cédula de ciudadanía </option>
                            <option value="6">Tarjeta de extranjería</option>
                            <option value="7">NIT</option>
                            <option value="8">Pasaporte</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="identification" className="form-label">identification</label>
                          <input
                            type="number"
                            className="form-control"
                            name="identification"
                            onChange={this.cambioValor}
                            value={identification}
                            id="identification"
                            placeholder="identification"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">
                            phone
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="phone"
                            onChange={this.cambioValor}
                            value={phone}
                            id="phone"
                            placeholder="phone"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="address" className="form-label">
                            address
                          </label>
                          <input
                            type="address"
                            className="form-control"
                            name="address"
                            onChange={this.cambioValor}
                            value={address}
                            id="address"
                            placeholder="address"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.cambioValor}
                            value={email}
                            id="email"
                            placeholder="email"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="first_name" className="form-label">
                            first name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            onChange={this.cambioValor}
                            value={first_name}
                            id="first_name"
                            placeholder="first_name"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="last_name" className="form-label">
                            last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            onChange={this.cambioValor}
                            value={last_name}
                            id="last_name"
                            placeholder="last_name"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="username" className="form-label">
                            username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.cambioValor}
                            value={username}
                            id="username"
                            placeholder="username"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="password" className="form-label">
                            password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.cambioValor}
                            value={password}
                            id="password"
                            placeholder="password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <Link to={"/UserList"} type="button" className="btn btn-danger">Cancel</Link>
                    <button type="submit" className="btn btn-primary mx-1">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserCreate;