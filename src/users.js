import {useState, useEffect} from 'react'
//import './users.css'

function Usuarios(props) {
    const [usuario, setUsuario] = useState([])
    const api = 'https://randomuser.me/api/?nat=US&'
    const results = props.cantUsuarios

    useEffect(() => {
        fetch(`${api}results=${results}&seed=1`)
        .then(response => response.json())
        .then(data => {setUsuario(data.results)})
    })

    
    return (
        <div className='users' >
                <table id='users'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    {usuario.map(user => 
                    <tbody key={user.id.value}>
                        <tr> 
                            <td id='firstName' >{user.name.first}</td> 
                            <td id='lastName' >{user.name.last}</td> 
                            <td id='age' >{user.dob.age}</td> 
                        </tr>
                </tbody>
                )}
                </table>
        </div>
    )
}

export function CantidadUsuarios() {
    const [cantUsuarios, setCantUsuarios] = useState(10)

    
    const onChange = (event) => {setCantUsuarios(event.target.value)}
    
    return(
        <div>
            <input type='number' value={cantUsuarios} onChange={onChange}/>
            <Usuarios cantUsuarios={cantUsuarios}/>
        </div>
    )
}

export function BotonSiguiente() {

    const nextPage = () => {}
    return (
        <div> 
            <button onClick={nextPage} > Siguiente </button>
        </div>
    )
}
export default Usuarios