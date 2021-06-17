import SearchBar from './searchBar'
import Grid from '@material-ui/core/Grid'
function App() {
  
  return (
    <Grid container spacing={1} >
      <Grid item xs={12} align="center">
        <SearchBar  />
      </Grid>
    </Grid>
  );
}

export default App;
