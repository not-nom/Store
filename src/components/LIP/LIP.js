import { useNavigate } from 'react-router-dom';

export default function LIP() {
  
  const navigate = useNavigate()
  const LIF = (event) => {
    event.preventDefault()
        fetch(`https://petstore3.swagger.io/api/v3/user/login?username=${event.target.elements.login.value}&password=${event.target.elements.password.value}}`)
            .then((response) => navigate("/store"))
  }
  return (
    <div>
      <form onSubmit={LIF}>
        <input type='text' name='name'/>
        <input type='password' name='pass'/>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}
// const navigate = useNavigate()