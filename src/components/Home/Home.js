import React from 'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import axios from 'axios'
import './Home.css'
import Cards from '../Cards/Cards'
import Provinsi from '../Provinsi/Provinsi';
import Perhari from '../Perhari/Perhari'
import { red } from '@material-ui/core/colors';


class Home extends React.Component{

    state = {
        confirmed:'',
        deaths:'',
        recovered:'',
        country: '',
        active: '',
        lastUpdate: '',
    };

    
    componentDidMount(){

        this.getAdvice();
    }
    
    getAdvice = () => {
        axios.get('https://covid19.mathdro.id/api/countries/ID').then((res)=>{
            console.log(res)
            const statistik = res.data
            console.log(statistik)
            
            this.setState({
                confirmed: statistik.confirmed.value.toLocaleString(),
                deaths: statistik.deaths.value.toLocaleString(),
                recovered : statistik.recovered.value.toLocaleString(),
                lastUpdate: statistik.lastUpdate
            })
            })
    }

    separator = (nStr) => {
        
    }


    render(){

        const {country, confirmed, deaths, recovered,lastUpdate} = this.state

        return(
            <Container>
            
            <div className="top">
                <h1>Data COVID-19 Di Indonesia</h1>
            </div>

            <div className="middle-part">
                <div className="card confirmed">
                <div className="text-white">
                    <h3>Total Positif</h3>
                    <h1>{confirmed}</h1>
                    <p>Orang</p>
                </div>
                </div>
                <div className="card deaths">
                <div className="text-white">
                    <h3>Total Meninggal</h3>
                    <h1>{deaths} </h1>
                    <p>Orang</p>
                </div>
                </div>
                <div className="card recovered">
                <div className="text-white">
                    <h3>Total Sembuh</h3>
                    <h1>{recovered}</h1>
                    <p>Orang</p>
                </div>
                </div>
            </div>


            <div className="middle-part">
                <Perhari/>
            </div>

            


            <div className="bottom-part">
            <h1>Data Per Provinsi</h1>
                <Provinsi/>
            </div>


            <h1 style={{color:'red'}}>TOLONG DIRUMAH AJA YA.</h1>

            {/* <Cards/> */}

            </Container>
        )
    }
}

export default Home;