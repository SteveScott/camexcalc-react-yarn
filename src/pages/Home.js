import React, { useState, useEffect } from "react";
import Footer from "./../components/Footer";
import Slider from "@mui/material/Slider";

import { styled } from "@mui/material/styles";

// Create a styled Slider component
const StyledSlider = styled(Slider)({
  color: "#f2ce6f",
  height: 8,
  padding: "18px 0 14px",
  "& .MuiSlider-rail": {
    opacity: 1,
    height: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.24)",
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 8,
    borderRadius: 999,
    background: "linear-gradient(90deg, #f8dd8a 0%, #d9a53f 100%)",
  },
  "& .MuiSlider-thumb": {
    width: 22,
    height: 22,
    backgroundColor: "#fffaf0",
    border: "3px solid #1d1d1d",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.35)",
    "&::before": {
      boxShadow: "none",
    },
    "&:hover, &.Mui-focusVisible, &.Mui-active": {
      boxShadow: "0 0 0 8px rgba(242, 206, 111, 0.18)",
    },
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    color: "white",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: 10,
    padding: "6px 10px",
    lineHeight: 1.1,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
    "&::before": {
      display: "none",
    },
  },
  "@media (max-width: 767px)": {
    padding: "14px 0 10px",
    "& .MuiSlider-thumb": {
      width: 20,
      height: 20,
    },
    "& .MuiSlider-valueLabel": {
      fontSize: "12px",
      padding: "4px 8px",
    },
  },
});

const SliderField = ({
  ariaLabel,
  label,
  labelId,
  max,
  onChange,
  value,
  valueLabel,
}) => (
  <div className="row slider-row">
    <div className="col-xs-12 col-sm-4 col-md-4 slider-heading">
      <span id={`${labelId}Label`} className="slider-heading__label">
        {label}
      </span>
      <span className="slider-heading__value slider-heading__value--mobile">
        {valueLabel}
      </span>
    </div>
    <div className="hidden-xs col-sm-2 col-md-2 slider-value-column">
      <label id={labelId} className="slider-heading__value">
        {valueLabel}
      </label>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 slider-control-column">
      <StyledSlider
        value={value}
        aria-label={ariaLabel}
        aria-labelledby={`${labelId}Label`}
        getAriaValueText={() => `${ariaLabel} ${valueLabel}`}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabel}
        min={0}
        max={max}
        onChange={onChange}
      />
    </div>
  </div>
);

const Home = () => {
  const FSTOPVALUES = [1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32, 45, 64]
    .slice()
    .reverse();
  const [Fstop, setFStop] = useState(5);
  const [FstopText, setFStopText] = useState("F " + FSTOPVALUES[5]);

  const SHUTTERSPEEDVALUES = [
    1 / 8000,
    1 / 4000,
    1 / 2000,
    1 / 1000,
    1 / 500,
    1 / 250,
    1 / 125,
    1 / 60,
    1 / 30,
    1 / 15,
    1 / 8,
    1 / 4,
    1 / 2,
    1,
    2,
    4,
    8,
    15,
  ];
  const SHUTTERSPEEDLABEL = [
    "1/8000",
    "1/4000",
    "1/2000",
    "1/1000",
    "1/500",
    "1/250",
    "1/125",
    "1/60",
    "1/30",
    "1/15",
    "1/8",
    "1/4",
    "1/2",
    "1",
    "2",
    "4",
    "8",
    "15",
  ];
  const [shutterSpeed, setShutterSpeed] = useState(5);
  const [shutterSpeedText, setShutterSpeedText] = useState(
    SHUTTERSPEEDLABEL[5] + " s"
  );

  const ISOVALUES = [25, 50, 100, 200, 400, 800, 1600, 3200];
  const [Iso, setIso] = useState(5);
  const [isoText, setIsoText] = useState(ISOVALUES[5]);

  const [gn, setGn] = useState(0);
  const [flashDistMeter, setFlashDistMeter] = useState(0);
  const [flashDistFeet, setFlashDistFeet] = useState(0);

  const [ev, setEv] = useState("");

  // calculate
  function calculation(ShutterSpeed, Fstop, Iso) {
    var cdpm2;
    var exposure;
    var exposure1;

    //set exposure to 15, sunny (and then subtract 3 as per formula)
    cdpm2 = Math.pow(2, 12);
    exposure1 = (12.5 * Math.pow(Fstop, 2)) / (ShutterSpeed * Iso) - cdpm2;
    //console.log("exposure 1: " + exposure1);
    exposure =
      -1 *
      (Math.log(cdpm2 + exposure1) / Math.log(2) +
        3 -
        (Math.log(cdpm2) / Math.log(2) + 3));
    //console.log(exposure);

    var message = "";
    if (exposure > -0.5 && exposure < 0.5) {
      message = "Level 15 - Sunny";
    } else if (exposure > -1.5 && exposure < -0.5) {
      message = "Level 16 - Bright daylight on sand or snow";
    } else if (exposure > -2.5 && exposure < -1.5) {
      message = "Level 17 - Unnaturally bright";
    } else if (exposure > -3.5 && exposure < -2.5) {
      message = "Level 18 - Unnaturally bright";
    } else if (exposure > -4.5 && exposure < -3.5) {
      message = "Level 19 - Unnaturally bright";
    } else if (exposure < -4.6) {
      message = "Level 20+ - Unnaturally bright";
    } else if (exposure > 0.5 && exposure < 1.5) {
      message = "Level 14 - Hazy sun";
    } else if (exposure > 1.5 && exposure < 2.5) {
      message = "Level 13 - Cloudy-bright light (no shadows)";
    } else if (exposure > 2.5 && exposure < 3.5) {
      message = "Level 12 - Shade or overcast";
    } else if (exposure > 3.5 && exposure < 4.5) {
      message = "Level 11 - Sunset or deep shade";
    } else if (exposure > 4.5 && exposure < 5.5) {
      message = "Level 10 - Immediately after sunset";
    } else if (exposure > 5.5 && exposure < 6.5) {
      message = "Level 9 - Neon lights, spotlighted subjects";
    } else if (exposure > 6.5 && exposure < 7.5) {
      message =
        "Level 8 - Fires, stadiums at night, bright indoor florescent lights";
    } else if (exposure > 7.5 && exposure < 8.5) {
      message = "Level 7 - Night time streets, indoor sports, stage shows.";
    } else if (exposure > 8.5 && exposure < 9.5) {
      message = "Level 6 - Brigthly lit home interiors, amusement parks";
    } else if (exposure > 9.5 && exposure < 10.5) {
      message =
        "Level 5 - Night home interiors, average light, auditoriums, subjects lit by fire";
    } else if (exposure > 10.5 && exposure < 11.5) {
      message =
        "Level 4 - Candle light, Christmas lights, floodlights, street lamps.";
    } else if (exposure > 11.5 && exposure < 12.5) {
      message = "Level 3 - Fireworks (with long exposure)";
    } else if (exposure > 12.5 && exposure < 13.5) {
      message = "Level 2 - Lightning (with long exposure)";
    } else if (exposure > 13.5 && exposure < 14.5) {
      message = "Level 1 - Distant view of lighted skyline";
    } else if (exposure > 14.5) {
      message = "Level 0 or less - Dim ambient light";
    } else {
      message = "Unknown";
    }

    // $('#ev').text(message);
    setEv(message);

    // return (exposure);
  }

  function FStop_Slide(e, newValue) {
    setFStop(newValue);
    setFStopText("F " + FSTOPVALUES[newValue]);

    // FlashCalc();
    // calculation(SHUTTERSPEEDVALUES[shutterSpeed], FSTOPVALUES[newValue], ISOVALUES[Iso]);
  }

  function ShutterSpeed_Slide(e, newValue) {
    // shutterSpeedPosition = shutterSpeed_Slider;
    //console.log("shutterSpeed_Slider = " + shutterSpeed_Slider);
    setShutterSpeed(newValue);
    setShutterSpeedText(SHUTTERSPEEDLABEL[newValue] + " s");

    // FlashCalc();
    // calculation(SHUTTERSPEEDVALUES[newValue], FSTOPVALUES[Fstop], ISOVALUES[Iso]);
  }

  function Iso_Slide(e, newValue) {
    setIso(newValue);
    setIsoText(ISOVALUES[newValue]);

    // FlashCalc();
    // calculation(SHUTTERSPEEDVALUES[shutterSpeed], FSTOPVALUES[Fstop], ISOVALUES[newValue]);
  }

  function GN_Change(e) {
    const newValue = e.target.value;
    setGn(newValue);
  }

  // calulate on change of GN value and slider values
  useEffect(() => {
    FlashCalc();
    calculation(
      SHUTTERSPEEDVALUES[shutterSpeed],
      FSTOPVALUES[Fstop],
      ISOVALUES[Iso]
    );
  }, [Fstop, shutterSpeed, Iso, gn]);

  function FlashCalc() {
    // alert("FlashCalc called");
    //var gn = document.getElementById('GN').value;
    calculateGN();

    var fgn = Number(newGuideNumber);
    console.log("fgn: " + fgn);

    var flashDistMeter = fgn / FSTOPVALUES[Fstop];
    flashDistMeter = roundTwoDecimal(flashDistMeter);
    var flashDistFeet = flashDistMeter * 3.28084;
    flashDistFeet = roundTwoDecimal(flashDistFeet);

    if (flashDistMeter === 0) {
      setFlashDistMeter("0.00 m");
      setFlashDistFeet("0.00 ft");
    } else {
      setFlashDistMeter(flashDistMeter + " m");
      setFlashDistFeet(flashDistFeet + " ft");
    }
  }

  var isoSteps = 0;
  var newGuideNumber = 1;

  function calculateGN(value = null) {
    console.log(
      "calculateGN called ::: gn = " +
        gn +
        " : Fstop = " +
        FSTOPVALUES[Fstop] +
        " : ISO = " +
        ISOVALUES[Iso]
    );

    isoSteps = 0;
    newGuideNumber = gn;

    findIsoSteps(ISOVALUES[Iso]);
    solveForGN(isoSteps);
  }

  function findIsoSteps(iso) {
    if (iso === 100) {
      //alert("ISO Steps: " + isoSteps);
      return isoSteps;
    } else if (iso > 100) {
      isoSteps += 1;
      iso = iso / 2;
      findIsoSteps(iso);
    } else if (iso < 100) {
      isoSteps -= 1;
      iso = iso * 2;
      findIsoSteps(iso);
    }
  }

  function solveForGN(isoSteps) {
    if (isoSteps === 0) {
      //console.log("Guide Number: " + newGuideNumber + "Type: " + typeof (newGuideNumber));
      return Number(newGuideNumber);
    } else if (isoSteps > 0) {
      //console.log("current GN: " + newGuideNumber);
      newGuideNumber = Number(newGuideNumber) * Math.sqrt(2);
      isoSteps -= 1;
      solveForGN(isoSteps);
    } else if (isoSteps < 0) {
      newGuideNumber = Number(newGuideNumber) / Math.sqrt(2);
      isoSteps += 1;
      solveForGN(isoSteps);
    }
  }

  function roundTwoDecimal(num) {
    return Math.round(num * 100) / 100;
  }

  return (
    <main className="content">
      <div className="container-fluid main-app">
        <form>
          <div className="row">
            <div className="col-lg-3">
              </div>
            <div className="col-sm-12 col-lg-6 CalculationDiv">
              <SliderField
                ariaLabel="Aperture"
                label="Aperture"
                labelId="FStopDisplay"
                max={FSTOPVALUES.length - 1}
                onChange={FStop_Slide}
                value={Fstop}
                valueLabel={FstopText}
              />
              <SliderField
                ariaLabel="Shutter Speed"
                label="Shutter Speed"
                labelId="ShutterSpeedDisplay"
                max={SHUTTERSPEEDVALUES.length - 1}
                onChange={ShutterSpeed_Slide}
                value={shutterSpeed}
                valueLabel={shutterSpeedText}
              />
              <SliderField
                ariaLabel="ISO"
                label="ISO"
                labelId="IsoDisplay"
                max={ISOVALUES.length - 1}
                onChange={Iso_Slide}
                value={Iso}
                valueLabel={String(isoText)}
              />
            </div>
            <div className="col-lg-3">
              </div>
            <div className="col-sm-12 CalculationDiv">
              <div className="row">

                <div className="col-lg-3">
                  </div>
                <div className="col-xs-4 col-lg-2">Flash Guide Number (@ ISO 100)</div>
                <div className="col-xs-2 ">
                  <input
                    className="NumberDisplay InputText"
                    id="GN"
                    value={gn}
                    type="number"
                    onChange={GN_Change}
                  />
                </div>
                <div className="col-xs-3 col-lg-1">
                  <label className="NumberDisplay" id="GNDisplayMeters">
                    {flashDistMeter}
                  </label>
                </div>
                <div className="col-xs-3 col-lg-1">
                  <label className="NumberDisplay" id="GNDisplayFeet">
                    {flashDistFeet}
                  </label>
                </div>
                <div className="col-lg-3">
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 CalculationDiv">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3"></div>
              <div className="hidden-xs col-sm-2 col-md-2 col-lg-1">Exposure Value</div>
              <div className="hidden-xs col-sm-2 col-md-2 col-lg-1"></div>
              <div className="col-lg-3"></div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-12 d-flex justify-content-center">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 ExposureDiv">{ev}</div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
