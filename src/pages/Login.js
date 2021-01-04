import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from '../images/login-img.svg'
const Login = () => {
 const { loginWithRedirect } = useAuth0()
 return (
  <Wrapper>
   <div className='container'>
    <img src={loginImg} alt='github user' />
    <h1>github user</h1>
    <button onClick={loginWithRedirect} className='btn'>
     log in / sign up
    </button>
   </div>
  </Wrapper>
 )
}
const Wrapper = styled.section`
 min-height: 100vh;
 display: grid;
 place-items: center;
 .container {
  width: 90vw;
  max-width: 600px;
  text-align: center;
 }
 .btn {
  text-transform: uppercase;
  background: lightblue;
  color: #0d4a63;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
 }
 .btn:hover {
  background: var(--clr-primary-8);
  color: var(--clr-primary-1);
 }
 img {
  margin-bottom: 2rem;
 }
 h1 {
  margin-bottom: 1.5rem;
  color: var(--clr-white);
 }
`
export default Login
