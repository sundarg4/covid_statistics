// import React from 'react';
// import './App.css';
// import LiquidFilledGauge from './Components/LiquidFilledGauge/LiquidFilledGauge';
// import LiquidFilledGaugeTestOptions from './Components/LiquidFilledGauge/LiquidFilledGaugeTestOptions';
// import InteractionChart from './Components/InteractionChart/InteractionChart';
// import InteractionChartData from './Components/InteractionChart/InteractionChartData';
// import HorizontalBarChart from './Components/HorizontalBarChart/HorizontalBarChart';
// import HorizontalBarChartTestData from './Components/HorizontalBarChart/HorizontalBarChartTestData';
// import HorizontalBarChartTestOptions from './Components/HorizontalBarChart/HorizontalBarChartOptions';
// import ZoomableBubbleChart from './Components/ZoomableBubbleChart/ZoomableBubbleChart';
// import ZoomableBubbleChartTestData from './Components/ZoomableBubbleChart/ZoomableBubbleChartTestData';
// import ZoomableBubbleChartTestOptions from './Components/ZoomableBubbleChart/ZoomableBubbleChartTestOptions';
// import LineChart from './Components/LineChart/LineChart';
// import LineChartTestData from './Components/LineChart/LineChartTestData';
// import LineChartTestOptions from './Components/LineChart/LineChartTestOptions';
// function App() {
//   return (
//     <div className="App">
//       <LiquidFilledGauge
//         title={'Liquid Filled Gauge'}
//         data={60}
//         options={LiquidFilledGaugeTestOptions}
//       />

//       <InteractionChart
//         title={'InteractionChart'}
//         data={InteractionChartData}
//       />
//       <HorizontalBarChart
//         title={'Horizontal Bar Chart'}
//         data={HorizontalBarChartTestData}
//         options={HorizontalBarChartTestOptions}
//       />
//       <LineChart
//         title={'Line Chart'}
//         data={LineChartTestData}
//         options={LineChartTestOptions}
//       />
//       <ZoomableBubbleChart
//         title={'Zoomable Bubble Chart'}
//         data={ZoomableBubbleChartTestData}
//         options={ZoomableBubbleChartTestOptions}
//       />
//     </div>
//   );
// }

// export default App;






import React, { Component } from 'react';
import './App.css';
import LiquidFilledGauge from './Components/LiquidFilledGauge/LiquidFilledGauge';
import LiquidFilledGaugeTwo from './Components/LiquidFilledGauge/LiquidFilledGaugeTwo';
import LiquidFilledGaugeThree from './Components/LiquidFilledGauge/LiquidFilledGaugeThree';
import LiquidFilledGaugeTestOptions from './Components/LiquidFilledGauge/LiquidFilledGaugeTestOptions';
import InteractionChart from './Components/InteractionChart/InteractionChart';
import InteractionChartData from './Components/InteractionChart/InteractionChartData';
import HorizontalBarChart from './Components/HorizontalBarChart/HorizontalBarChart';
import HorizontalBarChartTestData from './Components/HorizontalBarChart/HorizontalBarChartTestData';
import HorizontalBarChartTestOptions from './Components/HorizontalBarChart/HorizontalBarChartOptions';
import LineChart from './Components/LineChart/LineChart';
import LineChartTestData from './Components/LineChart/LineChartTestData';
import LineChartTestOptions from './Components/LineChart/LineChartTestOptions';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LinearProgress from "@material-ui/core/LinearProgress";
import ZoomableBubbleChart from './Components/ZoomableBubbleChart/ZoomableBubbleChart';
import ZoomableBubbleChartTestData from './Components/ZoomableBubbleChart/ZoomableBubbleChartTestData';
import ZoomableBubbleChartTestOptions from './Components/ZoomableBubbleChart/ZoomableBubbleChartTestOptions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import HamburgerMenu from 'react-HamburgerMenu'
import HamburgerMenu from 'react-hamburger-menu';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from './CSLOGO.png';
import LongMenu from './Components/Menu/LongMenu'

const cities = [
  { title: 'Oslo', year: 1994 },
  { title: 'Haden', year: 1972 },
  { title: 'Fredrikstad', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

class App extends Component {
  constructor() {
    super();
    this.state = { selectedCity: "Oslo" }
    this.handleComboBoxChange = this.handleComboBoxChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    
  }
  handleComboBoxChange(newValue) {
    this.setState({
      selectedCity: newValue.title
    })
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  // handleClose() {
  //   this.setState({
  //     anchorEl: React.useState(null)
  //   });
    
  // };



  render() {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

    var settings = {
      dots: true,
      autoplay: false
      //infinite: true,
      //speed: 500,
      //slidesToShow: 1,
      //slidesToScroll: 1
    };
    return (
      <Container fluid className="App">
        <Row className="titleRow">
          <Col lg={6} md={6} sm={6} xs={6} className="logoCol">
            <img src={logo} className="loogo" />
          </Col>

          <Col lg={6} md={6} sm={6} xs={6} className="menuCol">
            {/* <HamburgerMenu className="hamburger"
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
            /> */}
            <LongMenu/>

            {/* <div>
              <IconButton
                // aria-label="more"
                // aria-controls="long-menu"
                // aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div> */}


            
          </Col>
        </Row>
        <Row>
          <Col sm={12} xs={12} className="progressBarCol">
            Total Cases in Norway,
            <progress className="progressBar" value="32" placeholder="14266" max="100"> 32% </progress>
          </Col>
        </Row>
        <Row className="liquidGaugeRow">
          <Col lg={4} md={4} sm={4} xs={4} className="liquidGaugeChartCol">
            <Card className="liquidGaugeCard">
              <p className="liquidGaugeCardTitle totalAffected">Total Affected</p>
              <LiquidFilledGauge
                title={'Liquid Filled Gauge'}
                data={50}
                options={LiquidFilledGaugeTestOptions}
              />
            </Card>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="liquidGaugeChartCol">
            <Card className="liquidGaugeCard">
              <p className="liquidGaugeCardTitle">Total Recovered</p>
              <LiquidFilledGaugeTwo
                title={'Liquid Filled Gauge'}
                data={10}
                options={LiquidFilledGaugeTestOptions}
              />
            </Card>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="liquidGaugeChartCol">
            <Card className="liquidGaugeCard">
              <p className="liquidGaugeCardTitle totalDeaths">Total Deaths</p>
              <LiquidFilledGaugeThree
                title={'Liquid Filled Gauge'}
                data={90}
                options={LiquidFilledGaugeTestOptions}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} xs={12} className="comboBoxCol">
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              onChange={(e, newValue) => this.handleComboBoxChange(newValue)}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
          </Col>
        </Row>
        <Row className="carouselRow">
          <Col lg={12} className="carouselCol">
            <Card>
              <div className="carouselContainer">
                <Slider {...settings}>
                  <div>
                    <LineChart
                      title={'Line Chart'}
                      data={LineChartTestData}
                      options={LineChartTestOptions}
                      keyValue={this.state.selectedCity}
                    />
                  </div>
                  <div>
                    <InteractionChart
                      title={'InteractionChart'}
                      data={InteractionChartData}
                      keyValue={this.state.selectedCity}
                    />
                  </div>
                  <div>
                    <ZoomableBubbleChart
                      title={'Zoomable Bubble Chart'}
                      data={ZoomableBubbleChartTestData}
                      options={ZoomableBubbleChartTestOptions}
                      keyValue={this.state.selectedCity}
                    />
                  </div>

                </Slider>
              </div>


            </Card>
          </Col>
        </Row>
      </Container >

    );
  }
}

export default App;















