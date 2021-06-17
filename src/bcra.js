//import react, { Component } from 'react'


function Reservas() {
        const myHeader = new Headers({
            Authorization: "BEARER " + 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ3MjU0NDUsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkZW1pbmFzLm5pY29sYXNAZ21haWwuY29tIn0.cP-pYlrYreW60fjsJ4NfuDr6VQIcnET1vzUiLbVP4iNlLvDmu7AdZ3SzrE0bNW2qXNzb7vxznK4qvXIbqimZKQ',
            mode: 'no-cors',
        });

        const request = new Request('https://api.estadisticasbcra.com/base', {myHeader});

        fetch(request)
        .then((response) => response.json())
        .then(response => console.log(response))
        .catch(console.log)

        return(
            <div> 
                <p> Probando........</p>
            </div>
        )
    }

export default Reservas