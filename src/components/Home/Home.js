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
        active: ''
    };

    
    componentDidMount(){

        this.getAdvice();
    }
    
    getAdvice = () => {
        axios.get('https://api.kawalcorona.com').then((res)=>{
            // console.log(res)
            const data = res.data
            console.log(data)

            data.forEach((el)=>{
                // console.log(el)
                const getData = el.attributes
                // console.log(getData)

                if(getData.OBJECTID === 81){
                    const indoData = []
                    indoData.push(getData)
                    // console.log(indoData)

                    indoData.forEach((el)=>{
                        console.log(el)
                        this.setState({
                            country: el.Country_Region,
                            confirmed:el.Confirmed,
                            deaths:el.Deaths,
                            recovered:el.Recovered,
                            active: el.Active
                        })
                    })
                }
            })
        })

    }


    render(){

        const {country, confirmed, deaths, recovered,active} = this.state

        return(
            <Container>
            
            <div className="top">
                <h1>Data COVID-19 Di {country}</h1>
            </div>

            <div className="middle-part">
                <div className="card active">
                <div className="text-white">
                    <h3>Total Aktif</h3>
                    <h1>{active}</h1>
                    <p>Orang</p>
                </div>
                </div>
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