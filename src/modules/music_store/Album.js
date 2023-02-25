import { Card, Container, Grid } from "@material-ui/core";
import React from "react";
import Item from "./Item";

export default function Album(props) {
  console.log("Album: ",props)
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Card variant="outlined">
            <Item
              src="assets/images/m3.jpeg"
              color='primary'
              song="Malang.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
          </Card>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined">
            <Item
              src="assets/images/m1.jpeg"
              color='secondary'
              song="Malang.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
          </Card>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined">
            <Item
              src="assets/images/m7.jpg"
              color='secondary'
              song="Malang.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
            </Card>
          </Grid>
          <Grid item xs={3}>
          <Card variant="outlined">
            <Item
              src="assets/images/m6.jpeg"
              color='secondary'
              song="Malang.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
            </Card>
          </Grid>
          <Grid item xs={3}>
          <Card variant="outlined">
            <Item
              src="assets/images/m5.jpeg"
              color='secondary'
              song="Cheli.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
            </Card>
          </Grid>
          <Grid item xs={3}>
          <Card variant="outlined">
            <Item
              src="assets/images/m4.jpeg"
              color='secondary'
              song="Malang.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
            </Card>
          </Grid>
          <Grid item xs={3}>
          <Card variant="outlined">
            <Item
              src="assets/images/m2.webp"
              color='secondary'
              song="Malang.mp3"
              updateSong = {(song) => props.updateSong(song)}
            />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
