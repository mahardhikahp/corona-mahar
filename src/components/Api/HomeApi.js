import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './HomeApi.css'


class HomeApi extends Component{


   
    render(){
        return(
            <div>
            <Container>
            <Typography variant="h3" style={{textAlign:"center",fontWeight:"bold", marginTop:20}}>LISTING API </Typography>
            <div className="info-api">
                <Card>
                <CardContent>
                <h2>Api Keseluruhan</h2>
                <div className="garis"></div>
                <div className="copy">
                <p style={{backgroundColor:'#eaeaea'}} id="copyApi">https://api.kawalcorona.com/</p>
                {/* <Button color="primary" style={{marginLeft: '10px'}}  >Copy</Button> */}
                </div>
                </CardContent>
                <CardContent>
                    <h2>Api Data Harian</h2>
                    <div className="garis"></div>
                    <div className="copy">
                <p style={{backgroundColor:'#eaeaea'}} id="copyApi">https://indonesia-covid-19.mathdro.id/api/harian</p>
                {/* <Button color="primary" style={{marginLeft: '10px'}}  >Copy</Button> */}
                </div>
                </CardContent>
                <CardContent>
                    <h2>Api Data Provinsi</h2>
                    <div className="garis"></div>
                    <div className="copy">
                <p style={{backgroundColor:'#eaeaea'}} id="copyApi">https://indonesia-covid-19.mathdro.id/api/provinsi</p>
                {/* <Button color="primary" style={{marginLeft: '10px'}}  >Copy</Button> */}
                </div>
                </CardContent>
                </Card>
                </div>

                
                </Container>
            </div>

        )
    }
}


export default HomeApi;