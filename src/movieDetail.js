import {useState, useEffect} from 'react'
import {Grid, Typography, Card} from '@material-ui/core'


function MovieDetails(props) {
    const [movieDetail, setMovieDetail] = useState([])

    useEffect( () => {
        fetch('https://imdb-api.com/en/API/Title/k_sf50nmob/'+props.selectedMovie)
        .then(response=> response.json())
        .then(data => {setMovieDetail(data)})
        //.then(response => console.log(response))
        

    }, [props.selectedMovie])
    
    return (
        <Card>
        <Grid> 
            <Typography variant='h2' component='h2'> Detalle</Typography>
            <p>Title: {movieDetail.title}</p>
            <p>Year: {movieDetail.year}</p>
            <p>Release Date: {movieDetail.releaseDate}</p>
            <p>Director/es: {movieDetail.directors}</p>
            <p>Rating: {movieDetail.imDbRating}</p>
            <p>Stars: {movieDetail.stars}</p>
            
        </Grid>
        </Card>
    )
}

export default MovieDetails