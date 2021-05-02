import React, { forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Container, IconButton, Typography } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { makeStyles, withStyles } from "@material-ui/core/Styles";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import Forward10Icon from "@material-ui/icons/Forward10";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import PauseIcon from "@material-ui/icons/Pause";
import Replay10Icon from "@material-ui/icons/Replay10Outlined";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import SettingsIcon from "@material-ui/icons/Settings";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";
import FastForwardIcon from "@material-ui/icons/FastForward";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

// style

const useStyles = makeStyles({
  controlsWrapper: {
    position: "absolute",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1,
    flexDirection: "column",
    background: "rgba(0,0,0,0.6)",
  },
  controlIcons: {
    color: "#1DB954",
    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      transform: "scale(1)",
    },
  },
  bottomIcons: {
    color: "#1db954",
  },
  volumeSlider: {
    width: 100,
    color: "#1db954",
  },
  settingsText: {
    fontSize: 30,
    width: 130,
    color: "#FFF",
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: "#1DB954",
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#FFF",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#B9FCD1",
  },
})(Slider);

// function

export default forwardRef(
  (
    {
      onPlayPause,
      playing,
      onRewind,
      onFastForward,
      muted,
      onMute,
      volume,
      onVolumeChange,
      onVolumeSeekDown,
      onToggleFullscreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      elapsedTime,
      totalDuration,
      handleChangeDisplayFormat,
    },
    ref
  ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopOver = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const [anchorE2, setAnchorE2] = React.useState(null);
    const handlePopOverE2 = (event) => {
      setAnchorE2(event.currentTarget);
    };

    const handleCloseE2 = () => {
      setAnchorE2(null);
    };

    const openE2 = Boolean(anchorE2);
    const idArrow = openE2 ? "arrow-popover" : undefined;
    const id = open ? "settings-popover" : undefined;
    return (
      <div className={classes.controlsWrapper} ref={ref}>
        {/* Top controls */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ padding: 16 }}
        >
          <Grid item>
            <Typography variant="h5" style={{ color: "#FFF" }}>
              AfterEffects
            </Typography>
          </Grid>
          <Grid item>
            {/* <Button
                  variant="contained"
                  startIcon={}
                  style={{ color: "#28B95B" }}
                ></Button> */}
            <IconButton>
              <BookmarkIcon style={{ color: "#28B95B" }} />
            </IconButton>
          </Grid>
        </Grid>
        {/* Middle controls */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ margin: "auto" }}
        >
          <IconButton
            onClick={onRewind}
            className={classes.controlIcons}
            aria-label="reqind"
          >
            <FastRewindIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={onPlayPause}
            className={classes.controlIcons}
            aria-label="reqind"
          >
            {playing ? (
              <PauseIcon fontSize="inherit" />
            ) : (
              <PlayCircleFilledRoundedIcon fontSize="inherit" />
            )}
          </IconButton>
          <IconButton
            onClick={onFastForward}
            className={classes.controlIcons}
            aria-label="reqind"
          >
            <FastForwardIcon fontSize="large" />
          </IconButton>
        </Grid>
        {/* Bottom controls */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ padding: 16 }}
        >
          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              )}
              aria-label="custom thumb label"
              value={played * 100}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
            />
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <IconButton onClick={onPlayPause} className={classes.bottomIcons}>
                {playing ? (
                  <PauseIcon fontSize="inherit" />
                ) : (
                  <PlayArrowIcon fontSize="inherit" />
                )}
              </IconButton>
              <IconButton onClick={onMute} className={classes.bottomIcons}>
                {muted ? (
                  <VolumeOffIcon fontSize="medium" />
                ) : (
                  <VolumeUpIcon fontSize="medium" />
                )}
              </IconButton>
              {!muted ? (
                <Slider
                  className={classes.volumeSlider}
                  min={0}
                  max={100}
                  value={volume * 100}
                  onChange={onVolumeChange}
                  onChangeCommited={onVolumeSeekDown}
                />
              ) : (
                ""
              )}
              <Button
                onClick={handleChangeDisplayFormat}
                variant="text"
                style={{ color: "#1db954", marginLeft: 16 }}
              >
                <Typography>
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={handlePopOver} className={classes.bottomIcons}>
              <SettingsIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Grid
                container
                direction="column-reverse"
                style={{ backgroundColor: "#1DB954" }}
              >
                <IconButton
                  variant="text"
                  onClick={handlePopOverE2}
                  className={classes.settingsText}
                >
                  <Typography>Speed</Typography>
                  {/* <IconButton onClick={handlePopOverE2} style={{ color: "#FFF" }}>
                  <ArrowRightIcon />
                </IconButton> */}

                  <Popover
                    id={idArrow}
                    open={open}
                    anchorE2={anchorE2}
                    onClose={handleCloseE2}
                    anchorOrigin={{
                      vertical: "right",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                  >
                    <Grid
                      container
                      direction="column-reverse"
                      style={{ backgroundColor: "#1DB954" }}
                    >
                      {[0.5, 1.5, 2.5, 3.5].map((rate) => (
                        <Button>
                          <Typography>{rate}</Typography>
                        </Button>
                      ))}
                    </Grid>
                  </Popover>
                </IconButton>
                <Button variant="text" className={classes.settingsText}>
                  <Typography>Quality</Typography>
                  {/* <IconButton style={{ color: "#FFF" }}>
                    <ArrowRightIcon />
                  </IconButton> */}
                </Button>
              </Grid>
            </Popover>
            <IconButton
              onClick={onToggleFullscreen}
              className={classes.bottomIcons}
            >
              <FullscreenIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
);
