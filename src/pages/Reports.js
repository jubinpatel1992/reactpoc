import React from "react";
import axios from 'axios'
import FormData from 'form-data'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class Reports extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,
            isTable: false,
            headCells: [{ id: 'name', numeric: false, disablePadding: true, label: 'name' },
                        { id: 'date', numeric: false, disablePadding: false, label: 'date' },
                        { id: 'traffic', numeric: true, disablePadding: false, label: 'traffic' },
                        { id: 'trend', numeric: true, disablePadding: false, label: 'trend' }],
            rows: [],
            order: '', orderBy: '', numSelected: '', rowCount: ''
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }


    handleTextChange = (event) => {
        this.setState({
            days: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            csv: event.target.files[0]
        })
    }

    handleSearch = (event) => {
        let rows = this.state.originalData; 
        let result = []
        rows.map(s => {
            if(JSON.stringify(s).indexOf(event.target.value) > -1) {
                result.push(s);
            }
        });
        this.setState({
            rows: result
        });
    }  

    submit = async() => {
        if(this.state.csv != undefined && this.state.days !== undefined) {
            let formData = await new FormData();
            await formData.set('file', this.state.csv);
            await formData.append('days', this.state.days);
            axios.post('http://localhost:4400/users', formData)
            .then(resp => {
                if(resp.status == 200) {
                    this.setState({
                        isTable: true,
                        rows: resp.data,
                        originalData: resp.data,
                    }) 
                } else {
                    alert('Error');
                }   
            });
        } else {
            alert('Error');
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };

      
    render() {
        const { rows, headCells, isTable, page, rowsPerPage } = this.state;
        return (
            <div>
            {!isTable ?
                <div>
                    <input type="text" placeholder="N Days" style={{margin: '1rem 6rem'}} onChange={(event) => this.handleTextChange(event)}/>
                    <input
                        accept=".csv"
                        id="contained-button-file"
                        type="file"
                        style={{margin: '1rem 6rem'}}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <Button variant="contained" color="primary" onClick={(event) => this.submit()}>
                        Submit
                    </Button>
                </div>
            : 
            <Paper style={{marginLeft: '8rem', marginTop: '2rem'}}>
                <TableContainer>
                    <input type="text" placeholder="search" onChange={(event) => this.handleSearch(event)}/>
                <Table>
                    <TableHead>
                        <TableRow>
                        {headCells.map(headCell => (
                            <TableCell
                            key={headCell.id}
                            >
                            {headCell.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                        <TableRow>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.traffic}</TableCell>
                        <TableCell>{row.trend}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={rows.length}
                    rowsPerPage={10}
                    page={page}
                    onChangePage={this.handleChangePage}
                />
            </Paper>
            }
            </div>
        );
    }

}

export default Reports;