import { useState } from "react"

const Login = () => {
    const [name, setName ] = useState("David");
      return(
        <div>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <p>{name}</p>
        </form>
      </div>
    )
}

export default Login