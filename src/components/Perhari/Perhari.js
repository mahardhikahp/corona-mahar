import React from 'react';
import axios from 'axios'
import Container from '@material-ui/core/Container'

import './Perhari.css';


class Perhari extends React.Component{

    state = {
        kasusBaru : '',
        meninggalPerhari: '',
        sembuhPerhari: '',
        perTanggal : ''
    }

    componentDidMount(){
        this.getData();
    }


    getData = () => {
        const url = 'http://apicovid19indonesia-v2.vercel.app/api/indonesia/harian'

        axios.get(url).then((res)=>{
            console.log(res)
            const data = res.data;
            const dataUptodate = data[data.length - 1];
            console.log(dataUptodate, "harusnya hari ini")
            const fixTanggal = new Date(dataUptodate.tanggal)
            const tanggalBaru = new Date().toISOString(dataUptodate.lastUpdate);
            console.log(tanggalBaru)
            
            
            this.setState({
                kasusBaru: dataUptodate.positif.toLocaleString(),
                meninggalPerhari: dataUptodate.meninggal.toLocaleString(),
                sembuhPerhari: dataUptodate.sembuh.toLocaleString(),
                perTanggal: dataUptodate.tanggal
            })
            // const data = res.data.data
            // const fixData = data.[data.length - 1]
            // console.log("data perhari", fixData)
            // const tanggal = new Date(fixData.tanggal)
            // console.log(tanggal)
            // // console.log(data)
            // this.setState({
            //     kasusBaru : fixData.jumlahKasusBaruperHari,
            //     meninggalPerhari : fixData.jumlahKasusMeninggalperHari,
            //     sembuhPerhari : fixData.jumlahKasusSembuhperHari,
            //     tanggal : fixData.date
            // })
            
        })
    }




    render(){

        const {kasusBaru, meninggalPerhari, sembuhPerhari, perTanggal} = this.state

        return(
            <div>
                <h1 style={{textAlign:'center'}}>Data COVID-19 Per Tanggal {perTanggal}</h1>
                <div className="viewFlex">
                <div className="card-kasus">
                    <div className="text">
                    <h3>Kasus Baru</h3>
                     <h1>{kasusBaru}</h1>
                     <p><strong>Orang</strong></p>
                    </div>
                </div>
                <div className="card-meninggal">
                    <div className="text">
                    <h3>Meninggal Perhari</h3>
                     <h1>{meninggalPerhari} </h1>
                     <p><strong>Orang</strong></p>
                    </div>
                </div>
                <div className="card-perhari">
                    <div className="text">
                    <h3>Sembuh Perhari</h3>
                    <h1> {sembuhPerhari} </h1>
                    <p><strong>Orang</strong></p>
                    </div>
                </div>
            </div>
            </div>


            
        )
    }
}

export default Perhari;