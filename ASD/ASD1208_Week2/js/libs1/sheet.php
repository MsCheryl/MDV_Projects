/* jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-datebox
 */


/* Base input element Styles */
.ui-input-datebox { width: 97%; background-image: none; padding: .4em; line-height: 1.4; font-size: 16px; display: block; padding-top: 0px; padding-bottom: 0px; } 
.ui-input-datebox { min-height: 38px; } 
.ui-input-datebox .ui-btn-icon-notext { margin-top: 5px !important; margin-bottom: 5px !important; }
.ui-input-datebox input { width: 100% !important; padding: 0 !important; margin-top: 5px !important; margin-right: -40px !important; border: 1px solid transparent !important; vertical-align: middle; display: inline-block !important; background-color: transparent; zoom: 1; *display: inline; }
.ui-input-datebox input:focus { outline: none;}
.ui-input-datebox .ui-btn-text {display: none;}
.ui-input-datebox.ui-mini { min-height: 30px; font-size: 14px; }
.ui-input-datebox.ui-mini .ui-btn-icon-notext { margin-top: 2px !important; margin-bottom: 2px !important; }
.ui-icon-datebox { background-image: url('image/datebox.png') !important; background-repeat: no-repeat; background-position: 99% 8px; }
.ui-icon-datebox-alt { background-image: url('image/datebox.png') !important; background-repeat: no-repeat; background-position: 99% -28px; }
.ui-mini.ui-icon-datebox { background-position: 99% 6px; }
.ui-mini.ui-icon-datebox-alt { background-position: 99% -30px; }

@media all and (min-width: 450px){
  .ui-field-contain .ui-input-datebox { width: 75%; display: inline-block; }
  .ui-hide-label .ui-input-datebox { width: 100%; }
}


/*  Full width if in a grid, ignore the media query */
.ui-grid-a .ui-input-datebox { width: 97%; }
.ui-grid-b .ui-input-datebox { width: 97%; }
.ui-grid-c .ui-input-datebox { width: 97%; }
.ui-grid-d .ui-input-datebox { width: 97%; }
.ui-grid-e .ui-input-datebox { width: 97%; }



/*  Define a 6-part grid, just in case. */
.ui-grid-e .ui-block-a, .ui-grid-e .ui-block-b, .ui-grid-e .ui-block-c, .ui-grid-e .ui-block-d, .ui-grid-e .ui-block-e, .ui-grid-e .ui-block-f { width: 16.65%; }
.ui-grid-e > :nth-child(n) { width: 16.65%; }
.ui-grid-e .ui-block-a { clear: left; }

.ui-grid-e { overflow: hidden; }
.ui-block-f { margin: 0; padding: 0; border: 0; float: left; min-height: 1px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; }



/* Calendar Mode Styles */
.ui-datebox-gridheader { text-align: center; }
.ui-datebox-gridheader h4 { text-align: center; display: inline-block; margin-top: 10px; margin-bottom: 10px; zoom:1; *display: inline;}
.ui-datebox-gridplus { float: right; }
.ui-datebox-gridminus { float: left; }
.ui-datebox-gridplus-rtl { float: left; }
.ui-datebox-gridminus-rtl { float: right; }
.ui-datebox-gridrow { margin-left: 5px; margin-right: 5px; }
.ui-datebox-grid { clear: both; margin-bottom: 5px; }
.ui-datebox-griddate { width: 36px; height: 30px; display: inline-block; vertical-align: middle; text-align: center; line-height: 30px; font-weight: bold; font-size: 12px; zoom:1; *display: inline;}
.ui-datebox-griddate { width: 31px; height: 30px; display: inline-block; vertical-align: middle; text-align: center; line-height: 30px; font-weight: bold; font-size: 12px; zoom:1; *display: inline;}
.ui-datebox-griddate-empty { border: 1px solid transparent; color: #888; }
.ui-datebox-griddate-label { height: 15px !important; line-height: 15px !important; color: black;}
.ui-datebox-griddate-disable { color: #888; }


/* Android Mode Styles */
.ui-datebox-header h4 { margin-top: 5px; margin-bottom: 5px; text-align: center; }
.ui-datebox-container fieldset div { margin: 0px !important; }
.ui-datebox-dboxin input { text-align: center; }
.ui-datebox-dboxin label { width: 100%; text-align: center; display: block; margin-top: 5px; margin-bottom: -8px; }



/* Slide Mode Styles */
.ui-datebox-slide { width: 280px; margin-left: auto; margin-right: auto;}
.ui-datebox-sliderow-d { margin-bottom: 5px; text-align: center; height: 40px; width: 280px; overflow: hidden;}
.ui-datebox-sliderow-ym { margin-bottom: 5px; text-align: center; height: 32px; width: 280px; overflow: hidden;}
.ui-datebox-sliderow-hi { text-align: center; height: 32px; width: 280px; overflow: hidden;}
.ui-datebox-sliderow-int { display: inline-block; white-space: nowrap;}
.ui-datebox-slideyear { text-align: center; display: inline-block; zoom:1; *display:inline; width: 84px; vertical-align: middle; line-height: 30px; height: 30px; font-size: 14px; font-weight: bold; }
.ui-datebox-slidemonth { text-align: center; display: inline-block; zoom:1; *display:inline; width: 51px; vertical-align: middle; line-height: 30px; height: 30px; font-size: 12px; font-weight: bold; }
.ui-datebox-slideday { text-align: center; display: inline-block; zoom:1; *display:inline; width: 32px; vertical-align: middle; line-height: 20px; height: 38px; font-size: 14px; font-weight: bold; }
.ui-datebox-slidehour { text-align: center; display: inline-block; zoom:1; *display:inline; width: 32px; vertical-align: middle; line-height: 22px; height: 24px; font-size: 14px; font-weight: bold; }
.ui-datebox-slidemins { text-align: center; display: inline-block; zoom:1; *display:inline; width: 32px; vertical-align: middle; line-height: 22px; height: 24px; font-size: 14px; font-weight: bold; }
.ui-datebox-slidearrow { text-align: center; display: inline-block; zoom:1; *display:inline; width: 10px; vertical-align: middle; line-height: 38px; height: 38px; font-size: 10px; font-weight: bold; }
.ui-datebox-slidewday { font-size: 10px; font-weight: normal; }


/* Flip Mode Styles */
.ui-datebox-flipcontent { text-align: center; height: 125px; margin-bottom: -40px;}
.ui-datebox-flipcontent div { margin-left: 3px; margin-right: 3px; width: 77px; height: 120px; display: inline-block; text-align: center; zoom: 1; *display: inline; overflow: hidden;}
.ui-datebox-flipcenter { border: 1px solid #eee; height: 40px; margin-left: 10px; width: 260px; margin-right: auto; margin-left: auto; position: relative; top: -45px;}
.ui-datebox-flipcontent ul { list-style-type: none; display: inline; }
.ui-datebox-flipcontent li { height: 30px; }
.ui-datebox-flipcontent li span { margin-top: 7px; display: block; }


/* Shared Styles */
.ui-datebox-container { border: 5px solid #111 !important; width: 280px; }
.ui-datebox-screen { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; }
.ui-datebox-screen-modal { background-color: black; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80); }
.ui-datebox-hidden { display: none; }
.ui-dialog .ui-datebox-container { border: none !important; }
.ui-datebox-collapse a { display: inline-block; width: 45% }

.ui-datebox-inline { margin-top: 5px; border: 5px solid #111111 !important; margin-left: auto; margin-right: auto; text-align: center; }
.ui-datebox-inlineblind { margin-top: 5px; border: 5px solid #111111 !important; margin-left: auto; margin-right: auto; text-align: center; }
