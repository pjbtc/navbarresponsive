import React from 'react'
import {Grid} from '@material-ui/core'

export default function Blog() {
    return (
        <Grid lg={12} item container spacing={2}>
            <Grid lg={6}><h1 style={{backgroundColor: "yellow"}}>This is  compendium of my articles</h1></Grid>
            <Grid lg={6}><h1 style={{backgroundColor: "yellow"}}>This is  compendium of my articles</h1></Grid>
        </Grid>
    )
}