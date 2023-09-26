import { useState } from "react"
import {toast} from 'react-toastify'
import {FaUser} from "react-icons/fa"

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('passwords do not match')
    }
  }


  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-ocntrol"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Input your name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-ocntrol"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Input your email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-ocntrol"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Input your password"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-ocntrol"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register