import React, { useEffect, useState } from 'react'
import { Paper, List, ListSubheader, ListItem, Grid, Typography, Radio, RadioGroup, FormControlLabel, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    label: {
        fontSize: '16px', // Adjust the font size as needed
    },
    radio: {
        width: '28px', // Adjust the radio button size as needed
        height: '28px',
    },
});
const Question = ({ Question, index, onAnswerChange, userAnswers }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const classes = useStyles();
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onAnswerChange(event)
    };

    console.log("Question :", Question, index, userAnswers);
    return (
        <div style={{
            display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: "4%", paddingBottom: "2%", flexDirection: "column"
        }}>
            <Paper variant="outlined" key={index} style={{ width: "60%", minHeight: "200px", height: "100%", padding: "10px" }} >
                <List
                    component="nav"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <Typography variant="h6" style={{ backgroundColor: "#ccc", width: "100%", padding: "10px", paddingLeft: "20px", borderRadius: "5px" }}>{`${index + 1}. `}{Question.question}</Typography>
                        </ListSubheader>
                    }
                    style={{
                        margin: "15px"
                    }}
                >
                    <Grid item container direction="column" alignContent="flex-start" spacing={1} style={{ padding: "20px", width: "100%" }}>
                        <RadioGroup value={userAnswers[index] || ''} onChange={handleOptionChange}>
                            {Question.options.map((option, optionIndex) => (
                                <Grid item key={optionIndex} >
                                    <ListItem key={optionIndex} button>
                                        <FormControlLabel
                                            value={option}  // This value should match the selectedOption
                                            control={<Radio className={classes.radio} />}
                                            label={option}
                                            classes={{ label: classes.label }}
                                        />
                                    </ListItem>
                                </Grid>
                            ))}
                        </RadioGroup>

                    </Grid>
                </List>
            </Paper>
        </div>
    )
}

export default Question
