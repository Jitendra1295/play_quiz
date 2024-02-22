import React from 'react'
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { PieChart } from '@mui/x-charts/PieChart';
import { useParams, useNavigate } from "react-router-dom"
const Result = () => {
    const { total, right } = useParams();
    const navigate = useNavigate();
    const wrongAnswer = total - right;
    return (
        <Grid container spacing={3}
            style={{ paddingTop: "5%", paddingLeft: "20%", paddingRight: "20%", }}
        >
            <Grid item xs={6}
                style={{ backgroundColor: "#96d4e2", padding: "3%" }}
            >
                <Paper elevation={3} style={{ paddingTop: "5%", paddingBottom: "3%" }}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: right, label: 'True' },
                                    { id: 1, value: wrongAnswer, label: 'False' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                        padding={30}
                    />
                </Paper>

            </Grid>
            <Grid item xs={6}
                style={{ backgroundColor: "#96d4e2", paddingTop: "3%" }}
            >
                <Paper elevation={3} style={{ paddingTop: "5%", paddingBottom: "3%", marginRight: "20px" }}>
                    <Grid container spacing={2} style={{ marginLeft: "30px", marginTop: "10px", flexDirection: "column" }}     >
                        <Typography variant="h5">Result</Typography>
                        <Typography variant="h6" style={{ marginTop: "15px" }}> {`You've achieved a score of ${right} out of ${total}`}</Typography>

                    </Grid>
                    <Grid container spacing={2} alignItems="center" style={{ padding: "30px", marginTop: "5px" }}>
                        {/* <Grid item>
                            <Button variant="contained" color="primary">
                                Show Answer
                            </Button>
                        </Grid> */}
                        <Grid item>
                            <Button variant="contained" color="secondary" onClick={() => { navigate("/") }}>
                                Try again
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );

}

export default Result
