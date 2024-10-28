import React from 'react'
import { ping_api_endpoint } from '../utils/constant'

const create :React.FC = () => {
  return (
      <div>
          <form action={ping_api_endpoint} method="POST">

              username : <input type="text" />
               : <input type="password" />
              bio : <input type="text" />
              email : <input type='email' />
              
          </form>
    </div>
  )
}

export default create