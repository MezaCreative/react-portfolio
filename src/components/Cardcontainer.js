import React from 'react';
import createClass from 'create-react-class';
// import React, {useState} from 'react';
import "./style.css";



const Cardcontainer = (props) => {
          return (
            <div className="card-container">
        <div className="row cards">
          <div className="card col-4" style={{width: '18rem'}}>
            <img src="assets/Note taker.png" className="card-img-top" alt="Note-taker app" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">App that can write, save, and delete notes. Uses an express backend to save and retrieves note data from a JSON file</p>
              <a href="https://ancient-forest-46869.herokuapp.com/" className="btn btn-primary">Heroku link</a>
            </div>
          </div>
          <div className="card col-4" style={{width: '18rem'}}>
            <img src="assets/template.png" className="card-img-top" alt="Template Enging app" />
            <div className="card-body">
              <h5 className="card-title">Template Engine</h5>
              <p className="card-text">A software engingeering team generator command line application.</p>
              <a href="https://drive.google.com/file/d/1N5KRkkdhPeLxs2TavuBQj0NFhRfjbuAn/view" className="btn btn-primary">Video</a>
            </div>
          </div>
          <div className="card col-4" style={{width: '18rem'}}>
            <img src="assets/weather.png" className="card-img-top" alt="Weather Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Template Engine</h5>
              <p className="card-text">Weather dashboard app that runs in browser and features dynamically updated HTML, CSS, and OpenWeather API.</p>
              <a href="https://mezacreative.github.io/weather-dashboard/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>
        <div className="row cards">
          <div className="card col-4" style={{width: '18rem'}}>
            <img src="assets/inrythmlanding.png" className="card-img-top" alt="inRhythmapp" />
            <div className="card-body">
              <h5 className="card-title">inRhythm</h5>
              <p className="card-text">App that predicts a users Biorhythm with login functioncality to save data.</p>
              <a href="https://guarded-cliffs-86649.herokuapp.com/" className="btn btn-primary">Live link</a>
            </div>
          </div>
          <div className="card col-4" style={{width: '18rem'}}>
            <img src="assets/workoutlanding.png" className="card-img-top" alt="Workout Tracker app" />
            <div className="card-body">
              <h5 className="card-title">Workout Tracker</h5>
              <p className="card-text">App that tracks your workouts and saves info in database.</p>
              <a href="https://github.com/MezaCreative/Workout-Tracker" className="btn btn-primary">Link</a>
            </div>
          </div>
          <div className="card col-4" style={{width: '18rem'}}>
            <img src="assets/covidLanding.png" className="card-img-top" alt="Weather Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Covid-19 Tracker</h5>
              <p className="card-text">App that give up-to-date stats of Covid-19 cases in the U.S</p>
              <a href="https://wpb911.github.io/grpr5COVID/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>
      </div>
          );
}
  
export default Cardcontainer;