import {useState, useEffect} from 'react'
import MovieDetail from './movieDetail'
import {Grid, Button, TextField, Card} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function SearchBar() {
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState('https://imdb-api.com/en/API/Search/k_sf50nmob/The Crown')
    const [movie, setMovie] = useState([])
    const [selectedMovie, setSelectedMovie] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    

    useEffect(() => {
        fetch(url)
        .then(response=> response.json())
        .then(data => {setMovie(data.results)})
        //.then(response => console.log(response.results))
        
    }, [url])

    const handleSubmit = e => {
        e.preventDefault()
        return (setUrl('https://imdb-api.com/en/API/Search/k_sf50nmob/'+search),
        setShowDetails(false))
    }

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const searchForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                
                <TextField label='Search' variant='outlined' value={search} onChange={handleChange} />
                <Button color='primary' variant='contained' type="button" onClick={handleSubmit}> Buscar </Button>
            </form>
        )
    }

    const mostrarDetalle = (value) => {
        setShowDetails(value)
    }

    const movieTable = () => {
        return (
          <TableContainer component={Paper}>
            <Table className='' size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {movie.map(pelicula => 
                  <TableRow key={pelicula.id}>
                    
                    <TableCell align="right">{pelicula.title}</TableCell>
                    <TableCell align="right">{pelicula.description}</TableCell>
                    <TableCell align="right"> <img src={pelicula.image} width='64' height='64' alt='poster of the movie'/></TableCell>
                    <TableCell align="right"><Button color='primary' variant='outlined' 
                    onClick={() => {return(setSelectedMovie(pelicula.id), mostrarDetalle(true))}}>D</Button></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
   

      if (showDetails) {
        return (
          <Card>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <MovieDetail selectedMovie={selectedMovie} showDetails={showDetails}/>,
            <Button variant="contained" color='primary' onClick={() => {setShowDetails(false)}}>Volver</Button>
          </Grid>
          </Card>
        )}
      
    return( 
        
        <Grid container spacing={1} >
          
            <Grid item xs={12} align='center'>
                {searchForm()}
                {movieTable()}
            {/* <Grid item xs={6} align='center'>
                {showDetails ? <MovieDetail selectedMovie={selectedMovie} showDetails={showDetails}/> : null}
            </Grid> */}
        </Grid>

        </Grid>
  )
  
}



export default SearchBar




