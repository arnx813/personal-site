import { Grid, Typography, Link } from '@material-ui/core/';
import astronaut from "./astronaut.png"
import astro from "./astro.svg"

function App() {
  return (
    <Grid container direction="row">
      <Grid item xs={6} style={{ paddingLeft: "10rem", paddingTop: "2rem"}}>

      <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
      <img
              src={astro}
              style={{ width: "75px"}}
            />


                  <Typography color="primary" variant="h6" style={{ display: "inline-block", marginLeft: "1rem" }}>aaronxie.app</Typography>
</div>
    

      <Typography color="primary" variant="h2" style={{ paddingTop: "5rem"}}>yo, im aaron.</Typography>
      <Typography color="primary" variant="h6" style={{ paddingTop: "2rem"}}>im building things. im exploring product, art, & design. im interning at b2b saas startups. im reading a lot. im studying cs & philosophy at dartmouth. and more.</Typography>
      <Typography color="primary" variant="h6" style={{ paddingTop: "2rem"}}>- <Link target="_blank" href="https://drive.google.com/file/d/1zgQnC4p2jTH-wbibQ3wk0-07L29it_zP/view?usp=sharing">cv</Link></Typography>
      <Typography color="primary" variant="h6" style={{ paddingTop: "1rem"}}>- <Link target="_blank" href="https://www.linkedin.com/in/aaron-xie-384a12113/">linkedin</Link></Typography>
      <Typography color="primary" variant="h6" style={{ paddingTop: "1rem"}}>- <Link target="_blank" href="mailto:aaron">say hi</Link></Typography>



      </Grid>
      <Grid item xs={6}>
          <img
              src={astronaut}
              style={{ width: "650px", marginTop: "1rem"}}
            />
      </Grid>
    </Grid>
  );
}

export default App;
