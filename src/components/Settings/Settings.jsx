import React, { Component } from "react";
import "./Settings.scss";
import axios from "axios";
import { SignedIn, SignedOut } from "../UserState/UserState";

class Settings extends Component {

   state = {
    openMovie: false,
    openSeries: false,
    openLanguage: false,
    languagedata: "",
    movie: "",
    series: "",
    languagename: "",
    language: [],
   };

   componentDidMount() {
    let movie_name = localStorage.getItem('server_movie');
    let series_name = localStorage.getItem('server_series');
    this.setState({ languagename: localStorage.getItem('language_eng') });
    if(movie_name == 1) {
      this.setState({ movie: "VidCloud [No ADS, CC]" });
    } else if(movie_name == 2) {
      this.setState({ movie: "iBomma" });
    } else if(movie_name == 4) {
      this.setState({ movie: "VidSrc PRO" });
    }
    if(series_name == 1) {
      this.setState({ series: "VidCloud [Multi Quality, No ADS, CC]" });
    }


    axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=453752deba3272cd109112cd41127fd8`)
      .then((response) => {
        this.setState({
          language: [
{
"iso_639_1": "en",
"english_name": "English",
"name": "English"
},
{
"iso_639_1": "hi",
"english_name": "Hindi",
"name": "हिन्दी"
},
{
"iso_639_1": "ta",
"english_name": "Tamil",
"name": "தமிழ்"
},
{
"iso_639_1": "te",
"english_name": "Telugu",
"name": "తెలుగు"
},

],
        })
      }).catch(err => console.log(err));
   }

  openServers = () => {
    this.setState({ openMovie: true });
  };

  closeLanguage = () => {
    this.setState({ openLanguages: false });
    this.setState({ languagename: localStorage.getItem('language') });
  }

  openSeries = () => {
    this.setState({ openSeries: true });
  };

  closeSeries = () => {
    this.setState({ openSeries: true});
  }

  closeServers = () => {
    this.setState({ openMovie: true });
  }


  openLanguages = () => {
    this.setState({ openLanguages: true });
  }

  chooseServer1 = () => {
    this.setState({ movie: "VidCloud [No ADS, CC]" });
    localStorage.setItem('server_movie', 1);
    this.setState({ openMovie: false});
  }

  chooseServer2 = () => {
    this.setState({ movie: "2embed" });
    localStorage.setItem('server_movie', 2);
     this.setState({ openMovie: false});
  }

  chooseServer3 = () => {
    this.setState({ movie: "AutoEmbed [NO Ads]" });
    localStorage.setItem('server_movie', 3);
     this.setState({ openMovie: false});
  }

  chooseServer4 = () => {
    this.setState({ movie: "VidSrc PRO" });
    localStorage.setItem('server_movie', 4);
     this.setState({ openMovie: false});
  }

  chooseServerSeries1 = () => {
    this.setState({ series: "VidCloud [No ADS, CC]" });
    localStorage.setItem('server_series', 1);
     this.setState({ openSeries: false});
  }

   chooseServerSeries2 = () => {
    this.setState({ series: "AutoEmbed" });
    localStorage.setItem('server_series', 2);
    this.setState({ openSeries: false});
  }
  
    chooseServerSeries3 = () => {
    this.setState({ series: "2embed" });
    localStorage.setItem('server_series', 3);
    this.setState({ openSeries: false});
  }
  

  handleClick = (e, data) => {
    localStorage.setItem('language', data);
    this.setState({ openLanguages: false });
   
}

handleClick1 = (e, data) => {
    localStorage.setItem('language_eng', data);
    this.setState({ openLanguages: false });
    this.setState({ languagename: localStorage.getItem('language_eng') });
    window.location.reload(false);
}

  render() {
    return (
      
      <div className="container settings">


<div class="sc-1o36vqg-7 brWjXb">
        <header class="sc-1o36vqg-4 kYxrQw">
          <div class="sc-1o36vqg-3 iVeijx">
            <div class="sc-1o36vqg-0 hfwCMq">Change the default language source. (Need to reload to take effect)</div>
          </div>
        </header>
        <hr class="sc-120wsjt-0 sc-1o36vqg-2 keqMWH" />
      <div class="sc-1o36vqg-6 hwytcN">
        <div class="zpicwb-12 erjEHL">
          <div class="zpicwb-10 gmjUwa">
          <div class="zpicwb-11 jBNrZF" onClick={this.openLanguages}>
            <div class="zpicwb-3 bjxAPK">{ this.state.languagename ? this.state.languagename : "Select Language"}</div></div>
            <div class="zpicwb-9 cHJOkB"><svg onClick={this.closeLanguage} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="m9d8o3-0 fxbeUc zpicwb-8 eKqRtN" main="#9B9D9F"><path d="M17 9.5l-5 5-5-5" stroke="#9B9D9F" data-stroke="main" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <ul class="sc-12gjfzm-1 hqidmZ zpicwb-0 jBOakZ" style={{display: this.state.openLanguages ? "block" : "none"}}>
                {this.state.language && this.state.language.map((movie, i) => (<li class="sc-12gjfzm-0 PMXqu" onClick={(e) => { this.handleClick(e, movie.iso_639_1); this.handleClick1(e, movie.english_name);}}>{movie.english_name}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>




      <div class="sc-1o36vqg-7 brWjXb">
        <header class="sc-1o36vqg-4 kYxrQw">
          <div class="sc-1o36vqg-3 iVeijx">
            <div class="sc-1o36vqg-0 hfwCMq">Change the default Movie Source.</div>
          </div>
        </header>
        <hr class="sc-120wsjt-0 sc-1o36vqg-2 keqMWH" />
      <div class="sc-1o36vqg-6 hwytcN">
        <div class="zpicwb-12 erjEHL">
          <div class="zpicwb-10 gmjUwa">
          <div class="zpicwb-11 jBNrZF" onClick={this.openServers}>
            <div class="zpicwb-3 bjxAPK">{ this.state.movie ? this.state.movie : "Select Server"}</div></div>
            <div class="zpicwb-9 cHJOkB"><svg onClick={this.closeServers} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="m9d8o3-0 fxbeUc zpicwb-8 eKqRtN" main="#9B9D9F"><path d="M17 9.5l-5 5-5-5" stroke="#9B9D9F" data-stroke="main" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <ul class="sc-12gjfzm-1 hqidmZ zpicwb-0 jBOakZ" style={{display: this.state.openMovie ? "block" : "none"}}>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServer1}>VidCloud [NO ADS, CC]</li>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServer2}>2embed [Ads, CC]</li>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServer3}>AutoEmbed [NO Ads, CC]</li>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServer4}>VidSrc PRO [Less Ads, CC]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
  
  
  
      <div class="sc-1o36vqg-7 brWjXb">
        <header class="sc-1o36vqg-4 kYxrQw">
          <div class="sc-1o36vqg-3 iVeijx">
            <div class="sc-1o36vqg-0 hfwCMq">Change the default TV-shows Source.</div>
          </div>
        </header>
        <hr class="sc-120wsjt-0 sc-1o36vqg-2 keqMWH" />
      <div class="sc-1o36vqg-6 hwytcN">
        <div class="zpicwb-12 erjEHL">
          <div class="zpicwb-10 gmjUwa">
          <div class="zpicwb-11 jBNrZF"  onClick={this.openSeries}>
            <div class="zpicwb-3 bjxAPK">{ this.state.series ? this.state.series : "Select Server"}</div></div>
            <div class="zpicwb-9 cHJOkB"><svg onClick={this.closeSeries} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="m9d8o3-0 fxbeUc zpicwb-8 eKqRtN" main="#9B9D9F"><path d="M17 9.5l-5 5-5-5" stroke="#9B9D9F" data-stroke="main" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <ul class="sc-12gjfzm-1 hqidmZ zpicwb-0 jBOakZ" style={{display: this.state.openSeries ? "block" : "none"}}>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServerSeries1}>VidCloud [NO ADS, CC]</li>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServerSeries2}>AutoEmbed [NO ADS, CC]</li>
                <li class="sc-12gjfzm-0 PMXqu" onClick={this.chooseServerSeries3}>2embed [ADS]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
  }
}

export default Settings;
