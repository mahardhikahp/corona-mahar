import React, {Component} from 'react';
import axios from 'axios';import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class Provinsi extends Component{


    state = {
        listProvinsi : []
    }

    componentDidMount(){
        this.getData();
    }

    getData = () =>{
        axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi').then((res)=>{
            const getData = res.data.data
            this.setState({
                listProvinsi : getData
            })
            console.log(getData)
        })
    }


    render(){

        console.log(this.state.listProvinsi)

        return(
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Nama Provinsi</b></TableCell>
                        <TableCell align="right"><b>Positif</b></TableCell>
                        <TableCell align="right"><b>Sembuh</b></TableCell>
                        <TableCell align="right"><b>Meninggoi</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {this.state.listProvinsi.map(list => (
                <TableRow>
                    <TableCell>{list.provinsi}</TableCell>
                    <TableCell align="right">{list.kasusPosi}</TableCell>
                    <TableCell align="right">{list.kasusSemb}</TableCell>
                    <TableCell align="right">{list.kasusMeni}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default Provinsi;