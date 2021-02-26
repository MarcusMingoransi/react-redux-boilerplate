import React, { useState, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CLICK_SET_THEME } from "../../../store/types"

import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import { Grid, Paper, Container, Card, CardContent, CardActions, Box, Typography } from '@material-ui/core'
import ExampleTable from './ExampleTable'
import { FaBeer } from 'react-icons/fa'

const Example = () => {
    const themeReducer = useSelector((state: any) => state.themeReducer)
    console.log('themeReducer', themeReducer)
    const dispatch = useDispatch()

    const [shared] = useTranslation()

    return (
        <>
        <FaBeer />
            <Button
                color="primary"
                onClick={() => dispatch({type: CLICK_SET_THEME, theme: true })}>Set Light</Button>
            <Button
                color="secondary"
                onClick={() => dispatch({type: CLICK_SET_THEME, theme: false})}>Set Dark</Button>


            <Container fixed>
                <h1>Overview</h1>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Card color="text.primary">
                            <Box bgcolor="backgroundCard.main" color="text.primary">
                                <CardContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit sapiente odit autem est. Temporibus asperiores, natus sed accusantium, amet commodi culpa ut distinctio eos nulla atque ipsum. Quod, a!
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" size="small">Learn More</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card color="text.primary">
                            <Box bgcolor="backgroundCard.main" color="text.primary">
                                <CardContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit sapiente odit autem est. Temporibus asperiores, natus sed accusantium, amet commodi culpa ut distinctio eos nulla atque ipsum. Quod, a!
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" color="secondary" size="small">Learn More</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={12}>
                        <ExampleTable />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Example
