import React from "react";
import axios from 'axios'
import Button from '@material-ui/core/Button';

import '../assets/integration.css'

class Integration extends React.Component {
    constructor(props){
        super(props);
        this.integrationApi = this.integrationApi.bind(this);
    }
    
    integrationApi(apiname) {
        axios.post('http://localhost:4400/api/integration', { apiname })
        .then(response => {
            if(response.status == 200) {
                alert("Success:" + response.data.message + ",Name:" + response.data.api);
            } else {
                alert("Unauthorized:" + response.data.message)
            }
        })
        .catch((error) => {
            alert("Error PLease Try Again")
        });
    }
    
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={(event) => this.integrationApi('API 1')}>
                    API 1
                </Button>
                <Button variant="contained" color="primary" onClick={(event) => this.integrationApi('API 2')}>
                    API 2
                </Button>
                <Button variant="contained" color="primary" onClick={(event) => this.integrationApi('API 3')}>
                    API 3
                </Button>
            </div>
        );
    }

}

export default Integration;