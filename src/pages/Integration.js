import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core'
import axios from 'axios'

import '../assets/integration.css'

class Integration extends React.Component {
    constructor(){
        super();
        this.integrationApi = this.integrationApi.bind(this);
    }
    
    integrationApi = (apiname) => {
        console.log(apiname)
        axios.post('http://localhost:4400/api/integration', { apiname }).then(response => console.log(response))
    }
    
    render() {
        return (
            <div>
                <Card variant="outlined" onClick={this.integrationApi('API 1')}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        API 1
                    </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" onClick={this.integrationApi('API 2')}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        API 2
                    </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" onClick={this.integrationApi('API 3')}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        API 3
                    </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" onClick={this.integrationApi('API 4')}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        API 4
                    </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" onClick={this.integrationApi('API 5')}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        API 5
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

export default Integration;