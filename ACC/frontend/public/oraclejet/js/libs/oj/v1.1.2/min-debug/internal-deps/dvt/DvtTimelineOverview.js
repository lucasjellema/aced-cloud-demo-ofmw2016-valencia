/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimelineOverview$$ = function $$DvtTimelineOverview$$$($context$$618$$, $callback$$176$$, $callbackObj$$123$$) {
  this.Init($context$$618$$, $callback$$176$$, $callbackObj$$123$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverview", D.$DvtTimelineOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverview$$, D.$DvtOverview$$, "DvtTimelineOverview");
D.$DvtTimelineOverview$$.prototype.Init = function $$DvtTimelineOverview$$$$Init$($colors$$5_context$$619$$, $callback$$177$$, $callbackObj$$124$$) {
  D.$DvtTimelineOverview$$.$superclass$.Init.call(this, $colors$$5_context$$619$$, $callback$$177$$, $callbackObj$$124$$);
  $colors$$5_context$$619$$ = [D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getPastel$("#aadd77", 0.35)), "#aadd77", D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getDarker$("#aadd77", 0.5))];
  D.$DvtTimeUtils$$.$supportsTouch$() && ($colors$$5_context$$619$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$5_context$$619$$;
  this.$_markerBorderFill$ = (0,D.$DvtSolidFill$invisibleFill$$)();
  this.$_markerSize$ = 12
};
D.$DvtTimelineOverview$$.prototype.$getParser$ = function $$DvtTimelineOverview$$$$$getParser$$() {
  return new D.$DvtTimelineOverviewParser$$(this)
};
D.$DvtTimelineOverview$$.prototype.$_applyParsedProperties$ = function $$DvtTimelineOverview$$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$10$$) {
  D.$DvtTimelineOverview$$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$10$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$10$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$10$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$10$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$10$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$10$$ = "solid" == this.$getStyle$("_", "bs") ? (0,window.parseInt)(this.$getStyle$("_", "bof"), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$("_as", "bs") ? (0,window.parseInt)(this.$getStyle$("_as", "bof"), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$("_s", "bs") ? (0,window.parseInt)(this.$getStyle$("_s", "bof"), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? window.Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$10$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : 0.75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new D.$DvtLinearGradientFill$$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new D.$DvtLinearGradientFill$$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$10$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new D.$DvtSolidStroke$$("#aadd77", $_eOffset_borderOpacity_props$$10$$)
};
D.$JSCompiler_StaticMethods_getDrawableById$$ = function $$JSCompiler_StaticMethods_getDrawableById$$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$300$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$300$$, $durationId$$ = "_drn_" + $id$$300$$, $numChildren$$16$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$11$$ = 0;$childIndex$$11$$ < $numChildren$$16$$;$childIndex$$11$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$11$$);
    if($drawable$$7$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5)
};
D.$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$100$$, $style$$114$$) {
  return this.$_borderStyles$[$state$$100$$ + $style$$114$$]
};
D.$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return $drawable$$9$$.$_node$ != D.$JSCompiler_alias_NULL$$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$
};
D.$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return $drawable$$10$$.$_node$ != D.$JSCompiler_alias_NULL$$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$
};
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$304_scaleX$$7$$) {
  $node$$304_scaleX$$7$$ = $node$$304_scaleX$$7$$.$getScaleX$();
  $node$$304_scaleX$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$304_scaleX$$7$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$304_scaleX$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$305_scaleY$$7$$) {
  $node$$305_scaleY$$7$$ = $node$$305_scaleY$$7$$.$getScaleY$();
  $node$$305_scaleY$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$305_scaleY$$7$$ = 1);
  return $node$$305_scaleY$$7$$
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$166$$, $height$$149$$) {
  D.$DvtTimelineOverview$$.$superclass$.$parseDataXML$.call(this, $width$$166$$, $height$$149$$);
  if(this.$_markers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $opt$$2$$ = (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)(this, this.$_start$, this.$_end$, $width$$166$$, $height$$149$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_8956_j$$122$$ = 0;$context$$inline_8956_j$$122$$ < this.$_markers$.length;$context$$inline_8956_j$$122$$++) {
      var $i$$inline_8957_marker$$19$$ = this.$_markers$[$context$$inline_8956_j$$122$$];
      $i$$inline_8957_marker$$19$$.$_endTime$ == D.$JSCompiler_alias_NULL$$ ? this.$addMarker$($i$$inline_8957_marker$$19$$, $opt$$2$$) : $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_8957_marker$$19$$
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_8956_j$$122$$ = this.$getCtx$();
    for($i$$inline_8957_marker$$19$$ = this.$_maxDurationY$;0 < $i$$inline_8957_marker$$19$$;$i$$inline_8957_marker$$19$$--) {
      for(var $j$$inline_8958$$ = 0;$j$$inline_8958$$ < $durationMarkers$$.length;$j$$inline_8958$$++) {
        var $node$$inline_8959$$ = $durationMarkers$$[$j$$inline_8958$$];
        if($i$$inline_8957_marker$$19$$ == $node$$inline_8959$$.$_durationLevel$) {
          var $duration$$inline_8964_x$$inline_8960$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $node$$inline_8959$$.getTime(), this.$isVertical$() ? this.$Height$ : this.$Width$), $durationId$$inline_8961_feelerStroke$$inline_8965$$ = "_drn_" + $node$$inline_8959$$.getId(), $durationY$$inline_8962$$ = 9 + 5 * $node$$inline_8959$$.$_durationLevel$, $x2$$inline_8963$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $node$$inline_8959$$.$_endTime$, this.$isVertical$() ? 
          this.$Height$ : this.$Width$), $duration$$inline_8964_x$$inline_8960$$ = this.$isVertical$() ? this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8956_j$$122$$, 0, $duration$$inline_8964_x$$inline_8960$$, $durationY$$inline_8962$$, $x2$$inline_8963$$ - $duration$$inline_8964_x$$inline_8960$$, $durationId$$inline_8961_feelerStroke$$inline_8965$$) : new D.$DvtRect$$($context$$inline_8956_j$$122$$, this.$Width$ - $durationY$$inline_8962$$, $duration$$inline_8964_x$$inline_8960$$, $durationY$$inline_8962$$, 
          $x2$$inline_8963$$ - $duration$$inline_8964_x$$inline_8960$$, $durationId$$inline_8961_feelerStroke$$inline_8965$$) : this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8956_j$$122$$, this.$Width$ - $x2$$inline_8963$$, this.$Height$ - $durationY$$inline_8962$$ - 20, $x2$$inline_8963$$ - $duration$$inline_8964_x$$inline_8960$$, $durationY$$inline_8962$$, $durationId$$inline_8961_feelerStroke$$inline_8965$$) : new D.$DvtRect$$($context$$inline_8956_j$$122$$, $duration$$inline_8964_x$$inline_8960$$, 
          this.$Height$ - $durationY$$inline_8962$$ - 20, $x2$$inline_8963$$ - $duration$$inline_8964_x$$inline_8960$$, $durationY$$inline_8962$$, $durationId$$inline_8961_feelerStroke$$inline_8965$$);
          $duration$$inline_8964_x$$inline_8960$$.$setFill$(new D.$DvtSolidFill$$($node$$inline_8959$$.$_durationFillColor$));
          $durationId$$inline_8961_feelerStroke$$inline_8965$$ = new D.$DvtSolidStroke$$(this.$getStyle$("_", "dbc"), 1, 1);
          $duration$$inline_8964_x$$inline_8960$$.$setStroke$($durationId$$inline_8961_feelerStroke$$inline_8965$$);
          (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($duration$$inline_8964_x$$inline_8960$$);
          $duration$$inline_8964_x$$inline_8960$$.$_node$ = $node$$inline_8959$$;
          this.$addChild$($duration$$inline_8964_x$$inline_8960$$);
          $node$$inline_8959$$.$_durationBar$ = $duration$$inline_8964_x$$inline_8960$$;
          $node$$inline_8959$$.$_durationY$ = $durationY$$inline_8962$$ - 2
        }
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$2$$
  }
};
D.$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = D.$JSCompiler_alias_NULL$$;
  this.$_durationColorMap$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$ = {});
  for(var $i$$857$$ = 0;$i$$857$$ < $durationMarkers$$1$$.length;$i$$857$$++) {
    var $marker$$20$$ = $durationMarkers$$1$$[$i$$857$$], $id$$301$$ = $marker$$20$$.getId(), $sId$$2$$ = $id$$301$$.substring($id$$301$$.indexOf(":") + 1, $id$$301$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$20$$.$_durationLevel$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)(this, $marker$$20$$, $durationMarkers$$1$$);
    $marker$$20$$.$_durationFillColor$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$[$id$$301$$] == D.$JSCompiler_alias_NULL$$ ? (this.$_durationColorMap$[$id$$301$$] = this.$_colorCount$, $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$301$$]])
  }
};
D.$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverview$$.prototype.getDurationColorMap = D.$DvtTimelineOverview$$.prototype.$getDurationColorMap$;
D.$JSCompiler_StaticMethods_calculateOptimalSize$$ = function $$JSCompiler_StaticMethods_calculateOptimalSize$$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$167$$, $height$$150$$, $size$$48$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$, $JSCompiler_object_inline_maxy_11751_result$$inline_11642$$, $result$$5$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$150$$ : $width$$167$$, $i$$858$$ = 0;$i$$858$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$858$$++) {
    var $marker$$21_node$$inline_8972$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$858$$];
    if($marker$$21_node$$inline_8972$$.$_endTime$ != D.$JSCompiler_alias_NULL$$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$48$$, $end$$32$$, $marker$$21_node$$inline_8972$$.getTime(), $canvasSize$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$) && ($JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$);
      $marker$$21_node$$inline_8972$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_8981_start$$inline_8973$$ = $start$$48$$, $counter$$inline_8985_end$$inline_8974$$ = $end$$32$$, $cy$$inline_8983_size$$inline_8975$$ = $canvasSize$$, $borderOffset$$inline_8982_hsz$$inline_8976$$ = $size$$48$$ / 2, $result$$inline_8977$$ = $result$$5$$, $maxHeight$$inline_8978$$ = $height$$150$$, $hszx$$inline_8979$$ = $borderOffset$$inline_8982_hsz$$inline_8976$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$getScaleX$($marker$$21_node$$inline_8972$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$_markerSpacingOffset$, $hszy$$inline_8980$$ = $borderOffset$$inline_8982_hsz$$inline_8976$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$getScaleY$($marker$$21_node$$inline_8972$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$_markerSpacingOffset$, $cx$$inline_8981_start$$inline_8973$$ = 
      D.$DvtTimeUtils$$.$getDatePosition$($cx$$inline_8981_start$$inline_8973$$, $counter$$inline_8985_end$$inline_8974$$, $marker$$21_node$$inline_8972$$.getTime(), $cy$$inline_8983_size$$inline_8975$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$) && ($cx$$inline_8981_start$$inline_8973$$ = $cy$$inline_8983_size$$inline_8975$$ - $cx$$inline_8981_start$$inline_8973$$ - 2 * $hszx$$inline_8979$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$isVertical$()) {
        $borderOffset$$inline_8982_hsz$$inline_8976$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$getStyle$("_", "bs") && ($borderOffset$$inline_8982_hsz$$inline_8976$$ = (0,window.parseInt)($JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$getStyle$("_", "bw"), 10)), $cy$$inline_8983_size$$inline_8975$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$isRTL$() ? $borderOffset$$inline_8982_hsz$$inline_8976$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$Width$ - 
        2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$.$getScaleX$($marker$$21_node$$inline_8972$$) - $borderOffset$$inline_8982_hsz$$inline_8976$$ - 4
      }else {
        for(var $cy$$inline_8983_size$$inline_8975$$ = 3, $maxy$$inline_11648_maxy$$inline_8984$$ = 0, $counter$$inline_8985_end$$inline_8974$$ = 0;1 > $counter$$inline_8985_end$$inline_8974$$;) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8971_x$$294$$;
          $JSCompiler_object_inline_maxy_11751_result$$inline_11642$$ = $result$$inline_8977$$;
          var $shape$$inline_11643$$ = $marker$$21_node$$inline_8972$$.$getShape$(), $cx$$inline_11644$$ = $cx$$inline_8981_start$$inline_8973$$, $cy$$inline_11645$$ = $cy$$inline_8983_size$$inline_8975$$, $hszx$$inline_11646$$ = $hszx$$inline_8979$$, $hszy$$inline_11647$$ = $hszy$$inline_8980$$, $hsz$$inline_11649$$ = $borderOffset$$inline_8982_hsz$$inline_8976$$, $maxHeight$$inline_11650$$ = $maxHeight$$inline_8978$$;
          "above" == $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$.$_overviewPosition$ && ($cy$$inline_11645$$ += (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)($JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$));
          for(var $i$$inline_11651$$ = 0;$i$$inline_11651$$ < $JSCompiler_object_inline_maxy_11751_result$$inline_11642$$.$arr$.length;$i$$inline_11651$$++) {
            var $prevMarker$$inline_11652_prevScaleY$$inline_11657$$ = $JSCompiler_object_inline_maxy_11751_result$$inline_11642$$.$arr$[$i$$inline_11651$$], $prevX$$inline_11653_xDist$$inline_11658$$ = $prevMarker$$inline_11652_prevScaleY$$inline_11657$$.$getX$(), $prevY$$inline_11654$$ = $prevMarker$$inline_11652_prevScaleY$$inline_11657$$.$getY$(), $height$$inline_11660_prevShape$$inline_11655$$ = $prevMarker$$inline_11652_prevScaleY$$inline_11657$$.$getShape$(), $prevScaleX$$inline_11656$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$.$getScaleX$($prevMarker$$inline_11652_prevScaleY$$inline_11657$$), $prevMarker$$inline_11652_prevScaleY$$inline_11657$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$.$getScaleY$($prevMarker$$inline_11652_prevScaleY$$inline_11657$$), $prevX$$inline_11653_xDist$$inline_11658$$ = window.Math.abs($cx$$inline_11644$$ - $prevX$$inline_11653_xDist$$inline_11658$$), 
            $minDist$$inline_11659$$ = $hsz$$inline_11649$$ * $prevScaleX$$inline_11656$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$.$_markerSpacingOffset$ + $hszx$$inline_11646$$;
            if(!($prevX$$inline_11653_xDist$$inline_11658$$ >= $minDist$$inline_11659$$) && ($height$$inline_11660_prevShape$$inline_11655$$ = "circle" == $shape$$inline_11643$$ && "circle" == $height$$inline_11660_prevShape$$inline_11655$$ && $hszx$$inline_11646$$ == $hszy$$inline_11647$$ && $prevScaleX$$inline_11656$$ == $prevMarker$$inline_11652_prevScaleY$$inline_11657$$ ? window.Math.sqrt($minDist$$inline_11659$$ * $minDist$$inline_11659$$ - $prevX$$inline_11653_xDist$$inline_11658$$ * $prevX$$inline_11653_xDist$$inline_11658$$) : 
            $hsz$$inline_11649$$ * $prevMarker$$inline_11652_prevScaleY$$inline_11657$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$.$_markerSpacingOffset$ + $hszy$$inline_11647$$, $height$$inline_11660_prevShape$$inline_11655$$ > window.Math.abs($cy$$inline_11645$$ - $prevY$$inline_11654$$) && ($cy$$inline_11645$$ = $prevY$$inline_11654$$ + $height$$inline_11660_prevShape$$inline_11655$$, $maxy$$inline_11648_maxy$$inline_8984$$ = window.Math.max($maxy$$inline_11648_maxy$$inline_8984$$, 
            $cy$$inline_11645$$ + $height$$inline_11660_prevShape$$inline_11655$$), 1 <= $hsz$$inline_11649$$ && $maxHeight$$inline_11650$$ != D.$JSCompiler_alias_VOID$$ && $maxy$$inline_11648_maxy$$inline_8984$$ > $maxHeight$$inline_11650$$))) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$ = $cy$$inline_11645$$;
          $JSCompiler_object_inline_maxy_11751_result$$inline_11642$$ = $maxy$$inline_11648_maxy$$inline_8984$$;
          $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$ == $cy$$inline_8983_size$$inline_8975$$ && ($counter$$inline_8985_end$$inline_8974$$ = 1);
          $maxy$$inline_11648_maxy$$inline_8984$$ = $JSCompiler_object_inline_maxy_11751_result$$inline_11642$$;
          $cy$$inline_8983_size$$inline_8975$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11641_JSCompiler_object_inline_cy_11750$$;
          $counter$$inline_8985_end$$inline_8974$$++
        }
      }
      $marker$$21_node$$inline_8972$$.$setX$($cx$$inline_8981_start$$inline_8973$$);
      $marker$$21_node$$inline_8972$$.$setY$($cy$$inline_8983_size$$inline_8975$$);
      $result$$inline_8977$$.$arr$.push($marker$$21_node$$inline_8972$$);
      $maxy$$inline_11648_maxy$$inline_8984$$ > $result$$inline_8977$$.max && ($result$$inline_8977$$.max = $maxy$$inline_11648_maxy$$inline_8984$$);
      if($result$$5$$.max > $height$$150$$) {
        break
      }
    }
  }
  return $result$$5$$.max > $height$$150$$ && 1 < $size$$48$$ ? (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$167$$, $height$$150$$, $size$$48$$ - 1) : $size$$48$$
};
D.$DvtTimelineOverview$$.prototype.$addMarker$ = function $$DvtTimelineOverview$$$$$addMarker$$($node$$306$$, $sz$$) {
  var $displayable$$102_itemId$$2$$ = "_mrk_" + $node$$306$$.getId(), $color$$90_count$$24_stroke$$119$$ = $node$$306$$.$getColor$(), $fill$$76_isGradient$$ = $node$$306$$.$_gradient$, $lastChild$$1_opacity$$6$$ = $node$$306$$.$getOpacity$();
  $lastChild$$1_opacity$$6$$ == D.$JSCompiler_alias_NULL$$ && ($lastChild$$1_opacity$$6$$ = this.$_defOpacity$, 0 == $lastChild$$1_opacity$$6$$ && $color$$90_count$$24_stroke$$119$$ != D.$JSCompiler_alias_NULL$$ && ($lastChild$$1_opacity$$6$$ = 1));
  var $colors$$6_lighter_scaleX$$8$$ = this.$getScaleX$($node$$306$$), $alphas$$1_darker_scaleY$$8$$ = this.$getScaleY$($node$$306$$), $marker$$22$$ = $node$$306$$.$getShape$();
  this.$isVertical$() ? ($marker$$22$$ = "square", $displayable$$102_itemId$$2$$ = new D.$DvtMarker$$(this.$getCtx$(), $marker$$22$$, D.$JSCompiler_alias_NULL$$, $node$$306$$.$getY$(), $node$$306$$.$getX$(), 2, 2, $displayable$$102_itemId$$2$$, $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$)) : $displayable$$102_itemId$$2$$ = new D.$DvtMarker$$(this.$getCtx$(), $marker$$22$$, D.$JSCompiler_alias_NULL$$, $node$$306$$.$getX$(), $node$$306$$.$getY$(), $sz$$, $sz$$, $displayable$$102_itemId$$2$$, 
  $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$);
  $displayable$$102_itemId$$2$$.$_node$ = $node$$306$$;
  $color$$90_count$$24_stroke$$119$$ == D.$JSCompiler_alias_NULL$$ && $lastChild$$1_opacity$$6$$ == this.$_defOpacity$ && $fill$$76_isGradient$$ == D.$JSCompiler_alias_NULL$$ ? ($fill$$76_isGradient$$ = "circle" == $marker$$22$$ ? this.$_radialFill$ : this.$_linearFill$, $color$$90_count$$24_stroke$$119$$ = this.$_border$) : ($colors$$6_lighter_scaleX$$8$$ = this.$_defColors$, $color$$90_count$$24_stroke$$119$$ != D.$JSCompiler_alias_NULL$$ && (D.$DvtTimeUtils$$.$supportsTouch$() ? $colors$$6_lighter_scaleX$$8$$ = 
  [$color$$90_count$$24_stroke$$119$$] : ($colors$$6_lighter_scaleX$$8$$ = D.$DvtColorUtils$$.$getPastel$($color$$90_count$$24_stroke$$119$$, 0.5), $alphas$$1_darker_scaleY$$8$$ = D.$DvtColorUtils$$.$getDarker$($color$$90_count$$24_stroke$$119$$, 0.5), $colors$$6_lighter_scaleX$$8$$ = [$colors$$6_lighter_scaleX$$8$$, $color$$90_count$$24_stroke$$119$$, $alphas$$1_darker_scaleY$$8$$])), $alphas$$1_darker_scaleY$$8$$ = [$lastChild$$1_opacity$$6$$, $lastChild$$1_opacity$$6$$, $lastChild$$1_opacity$$6$$], 
  $fill$$76_isGradient$$ = $fill$$76_isGradient$$ == D.$JSCompiler_alias_NULL$$ ? "circle" == $marker$$22$$ ? new D.$DvtLinearGradientFill$$(250, $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$) : new D.$DvtLinearGradientFill$$(180, $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$) : new D.$DvtSolidFill$$($color$$90_count$$24_stroke$$119$$, $alphas$$1_darker_scaleY$$8$$[0]), $color$$90_count$$24_stroke$$119$$ = new D.$DvtSolidStroke$$($color$$90_count$$24_stroke$$119$$, 
  $lastChild$$1_opacity$$6$$));
  $displayable$$102_itemId$$2$$.$setFill$($fill$$76_isGradient$$);
  $displayable$$102_itemId$$2$$.$setStroke$($color$$90_count$$24_stroke$$119$$);
  "none" != this.$_selectionMode$ && $displayable$$102_itemId$$2$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
  $color$$90_count$$24_stroke$$119$$ = this.$getNumChildren$();
  $lastChild$$1_opacity$$6$$ = this.$getChildAt$($color$$90_count$$24_stroke$$119$$ - 1);
  $color$$90_count$$24_stroke$$119$$ > this.$_lastChildIndex$ && ("tb" == $lastChild$$1_opacity$$6$$.getId() || "arr" == $lastChild$$1_opacity$$6$$.getId()) ? this.$addChildAt$($displayable$$102_itemId$$2$$, $color$$90_count$$24_stroke$$119$$ - this.$_lastChildIndex$) : this.$addChild$($displayable$$102_itemId$$2$$);
  $node$$306$$.$setDisplayable$($displayable$$102_itemId$$2$$);
  this.$applyState$($displayable$$102_itemId$$2$$, "_");
  (this.$isVertical$() || "square" == $marker$$22$$ || "diamond" == $marker$$22$$ || "triangleUp" == $marker$$22$$ || "triangleDown" == $marker$$22$$ || "plus" == $marker$$22$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($displayable$$102_itemId$$2$$);
  return $displayable$$102_itemId$$2$$
};
D.$JSCompiler_StaticMethods_calculateDurationY$$ = function $$JSCompiler_StaticMethods_calculateDurationY$$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$58$$, $durationMarkers$$3$$) {
  var $index$$246$$ = $durationMarkers$$3$$.length, $startTime$$6$$ = $item$$58$$.getTime(), $y$$263$$ = $item$$58$$.$_durationLevel$;
  $y$$263$$ == D.$JSCompiler_alias_NULL$$ && ($y$$263$$ = 1);
  for(var $i$$861$$ = 0;$i$$861$$ < $index$$246$$;$i$$861$$++) {
    var $currItem_curry$$ = $durationMarkers$$3$$[$i$$861$$];
    if($currItem_curry$$ != $item$$58$$) {
      var $currEndTime$$ = $currItem_curry$$.$_endTime$;
      if($currEndTime$$ != D.$JSCompiler_alias_NULL$$) {
        var $currStartTime$$ = $currItem_curry$$.getTime(), $currItem_curry$$ = $currItem_curry$$.$_durationLevel$;
        $currItem_curry$$ == D.$JSCompiler_alias_NULL$$ && ($currItem_curry$$ = 1);
        $startTime$$6$$ >= $currStartTime$$ && ($startTime$$6$$ <= $currEndTime$$ && $y$$263$$ == $currItem_curry$$) && ($y$$263$$ = $currItem_curry$$ + 1, $item$$58$$.$_durationLevel$ = $y$$263$$, $y$$263$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$58$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$263$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$263$$);
  return $y$$263$$
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOver$$($event$$814_isSelected$$1_itemId$$3$$) {
  var $drawable$$11$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$814_isSelected$$1_itemId$$3$$);
  if($drawable$$11$$ != D.$JSCompiler_alias_NULL$$) {
    if($drawable$$11$$.$_node$ != D.$JSCompiler_alias_NULL$$) {
      var $evt$$75_i$$862_tooltip$$58$$ = $drawable$$11$$.$_node$.$_desc$;
      $evt$$75_i$$862_tooltip$$58$$ != D.$JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$814_isSelected$$1_itemId$$3$$.pageX, $event$$814_isSelected$$1_itemId$$3$$.pageY, $evt$$75_i$$862_tooltip$$58$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$814_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_FALSE$$;
      if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
        for($evt$$75_i$$862_tooltip$$58$$ = 0;$evt$$75_i$$862_tooltip$$58$$ < this.$_selectedMarkers$.length;$evt$$75_i$$862_tooltip$$58$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$75_i$$862_tooltip$$58$$]) {
            $event$$814_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      $event$$814_isSelected$$1_itemId$$3$$ || ($event$$814_isSelected$$1_itemId$$3$$ = this.$getItemId$($drawable$$11$$), $evt$$75_i$$862_tooltip$$58$$ = new D.$DvtTimelineOverviewEvent$$("highlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$75_i$$862_tooltip$$58$$, "itemId", $event$$814_isSelected$$1_itemId$$3$$), this.dispatchEvent($evt$$75_i$$862_tooltip$$58$$), (0,D.$JSCompiler_StaticMethods_highlightMarker$$)(this, $drawable$$11$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOut$$($drawable$$12_event$$815$$) {
  $drawable$$12_event$$815$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$815$$);
  if($drawable$$12_event$$815$$ != D.$JSCompiler_alias_NULL$$ && !(0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$12_event$$815$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_FALSE$$;
    if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
      for(var $evt$$76_i$$863$$ = 0;$evt$$76_i$$863$$ < this.$_selectedMarkers$.length;$evt$$76_i$$863$$++) {
        if($drawable$$12_event$$815$$ == this.$_selectedMarkers$[$evt$$76_i$$863$$]) {
          $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $isSelected$$2_itemId$$4$$ || ($isSelected$$2_itemId$$4$$ = this.$getItemId$($drawable$$12_event$$815$$), $evt$$76_i$$863$$ = new D.$DvtTimelineOverviewEvent$$("unhighlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$76_i$$863$$, "itemId", $isSelected$$2_itemId$$4$$), this.dispatchEvent($evt$$76_i$$863$$), (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)(this, $drawable$$12_event$$815$$))
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeClick$ = function $$DvtTimelineOverview$$$$$HandleShapeClick$$($event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$, $drawable$$13_newPos$$inline_8994_pageX$$16$$, $evt$$inline_8992_itemId$$inline_11665_pageY$$16$$) {
  $drawable$$13_newPos$$inline_8994_pageX$$16$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeClick$.call(this, $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$, $drawable$$13_newPos$$inline_8994_pageX$$16$$, $evt$$inline_8992_itemId$$inline_11665_pageY$$16$$);
  if($drawable$$13_newPos$$inline_8994_pageX$$16$$ != D.$JSCompiler_alias_NULL$$ && ($event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$ = $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$.ctrlKey || $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$.shiftKey || (0,D.$DvtAgent$isTouchDevice$$)(), "none" != this.$_selectionMode$)) {
    $evt$$inline_8992_itemId$$inline_11665_pageY$$16$$ = this.$getItemId$($drawable$$13_newPos$$inline_8994_pageX$$16$$);
    var $evt$$inline_11666$$ = new D.$DvtTimelineOverviewEvent$$("selection");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11666$$, "itemId", $evt$$inline_8992_itemId$$inline_11665_pageY$$16$$);
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11666$$, "multiSelect", $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$);
    this.dispatchEvent($evt$$inline_11666$$);
    $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$ = $drawable$$13_newPos$$inline_8994_pageX$$16$$.$_node$.getTime();
    $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$ != D.$JSCompiler_alias_NULL$$ && ($evt$$inline_8992_itemId$$inline_11665_pageY$$16$$ = new D.$DvtTimelineOverviewEvent$$("scrollTime"), $evt$$inline_8992_itemId$$inline_11665_pageY$$16$$.setTime($event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$), this.dispatchEvent($evt$$inline_8992_itemId$$inline_11665_pageY$$16$$), $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$ = 
    this.$getChildAt$(1), $drawable$$13_newPos$$inline_8994_pageX$$16$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_8994_pageX$$16$$) - $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_8994_pageX$$16$$) - $event$$816_isMultiSelect$$inline_8990_slidingWindow$$inline_8993_time$$inline_8991$$.getWidth() / 2, (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $drawable$$13_newPos$$inline_8994_pageX$$16$$))
  }
};
D.$JSCompiler_StaticMethods_highlightMarker$$ = function $$JSCompiler_StaticMethods_highlightMarker$$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if($JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$864$$ = 0;$i$$864$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$864$$++) {
      if($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$864$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, "_h")
};
D.$JSCompiler_StaticMethods_unhighlightMarker$$ = function $$JSCompiler_StaticMethods_unhighlightMarker$$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if($JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$865$$ = 0;$i$$865$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$865$$++) {
      if($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$865$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, "_")
};
D.$DvtTimelineOverview$$.prototype.$applyState$ = function $$DvtTimelineOverview$$$$$applyState$$($drawable$$25$$, $state$$101$$) {
  if($drawable$$25$$ instanceof D.$DvtMarker$$) {
    var $requiresBorderMarker_width$$169$$ = D.$JSCompiler_alias_FALSE$$, $requiresGlowMarker$$ = D.$JSCompiler_alias_FALSE$$;
    if("solid" == this.$getStyle$($state$$101$$, "bs")) {
      var $requiresBorderMarker_width$$169$$ = D.$JSCompiler_alias_TRUE$$, $borderColor$$61_stroke$$120$$ = this.$getStyle$($state$$101$$, "bc");
      $borderColor$$61_stroke$$120$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$61_stroke$$120$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_9000$$ = this.$getStyle$($state$$101$$, "gc");
      $glowColor_glowStroke_width$$inline_9000$$ != D.$JSCompiler_alias_NULL$$ && "none" != $glowColor_glowStroke_width$$inline_9000$$ && ($requiresGlowMarker$$ = D.$JSCompiler_alias_TRUE$$)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$requiresBorderMarker_width$$169$$ && $borderMarker$$ != D.$JSCompiler_alias_NULL$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = D.$JSCompiler_alias_NULL$$, $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = D.$JSCompiler_alias_NULL$$)) : !$requiresGlowMarker$$ && $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = 
    D.$JSCompiler_alias_NULL$$);
    var $borderColor$$inline_8999_id$$302_markerType$$2$$ = $drawable$$25$$.$getType$();
    if($requiresBorderMarker_width$$169$$) {
      var $requiresBorderMarker_width$$169$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bw"), 10), $borderOffset$$1$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bof"), 10);
      $borderMarker$$ == D.$JSCompiler_alias_NULL$$ && ("circle" == $borderColor$$inline_8999_id$$302_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0), $borderMarker$$ = new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8999_id$$302_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $borderOffset$$1$$, this.$getY$($drawable$$25$$) - $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$h$ + 
      2 * $borderOffset$$1$$, $drawable$$25$$.getId() + "_border", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$())) : $borderMarker$$ = this.$isVertical$() ? new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8999_id$$302_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getY$($drawable$$25$$) - ($requiresBorderMarker_width$$169$$ + 1) / 2, this.$getX$($drawable$$25$$) - ($requiresBorderMarker_width$$169$$ + 1) / 2, $drawable$$25$$.$getDimensions$().$w$ + ($requiresBorderMarker_width$$169$$ + 
      1), $drawable$$25$$.$getDimensions$().$h$ + ($requiresBorderMarker_width$$169$$ + 1), $drawable$$25$$.getId() + "_border", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()) : new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8999_id$$302_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $borderOffset$$1$$, this.$getY$($drawable$$25$$) - $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$h$ + 
      2 * $borderOffset$$1$$, $drawable$$25$$.getId() + "_border", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()), this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$)), $drawable$$25$$.$_borderMarker$ = $borderMarker$$, $borderMarker$$.$setFill$(this.$_markerBorderFill$));
      $borderColor$$61_stroke$$120$$ = new D.$DvtSolidStroke$$($borderColor$$61_stroke$$120$$, this.$getStyle$($state$$101$$, "bo"), $requiresBorderMarker_width$$169$$);
      $borderMarker$$.$setStroke$($borderColor$$61_stroke$$120$$);
      (this.$isVertical$() || "square" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "diamond" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "plus" == $borderColor$$inline_8999_id$$302_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($borderMarker$$);
      $requiresGlowMarker$$ && ($glowMarker_glowOffset$$ == D.$JSCompiler_alias_NULL$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $requiresBorderMarker_width$$169$$, "circle" == $borderColor$$inline_8999_id$$302_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $glowMarker_glowOffset$$ = new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8999_id$$302_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$, 
      this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$, $drawable$$25$$.getId() + "_glow", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$())) : $glowMarker_glowOffset$$ = this.$isVertical$() ? new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8999_id$$302_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getY$($drawable$$25$$), this.$getX$($drawable$$25$$) - 
      1, $drawable$$25$$.$getDimensions$().$w$ + 3, $drawable$$25$$.$getDimensions$().$h$ + 3, $drawable$$25$$.getId() + "_glow", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()) : new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8999_id$$302_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$, this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$h$ + 
      2 * $glowMarker_glowOffset$$, $drawable$$25$$.getId() + "_glow", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_9000$$ = new D.$DvtSolidStroke$$($glowColor_glowStroke_width$$inline_9000$$, this.$getStyle$($state$$101$$, "go"), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_9000$$), 
      (this.$isVertical$() || "square" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "diamond" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8999_id$$302_markerType$$2$$ || "plus" == $borderColor$$inline_8999_id$$302_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($glowMarker_glowOffset$$))
    }
  }else {
    if(($borderColor$$inline_8999_id$$302_markerType$$2$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_8999_id$$302_markerType$$2$$.substring(0, 5)) {
      $borderColor$$inline_8999_id$$302_markerType$$2$$ = this.$getStyle$($state$$101$$, "dbc"), $borderColor$$inline_8999_id$$302_markerType$$2$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$inline_8999_id$$302_markerType$$2$$ = "#000000"), $glowColor_glowStroke_width$$inline_9000$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "dbw"), 10), $drawable$$25$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_8999_id$$302_markerType$$2$$, 1, $glowColor_glowStroke_width$$inline_9000$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$getAutomation$ = function $$DvtTimelineOverview$$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new D.$DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$
};
D.$DvtTimelineOverview$$.prototype.getAutomation = D.$DvtTimelineOverview$$.prototype.$getAutomation$;
D.$DvtTimelineOverviewParser$$ = function $$DvtTimelineOverviewParser$$$($timelineOverview$$) {
  this.Init($timelineOverview$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewParser$$, D.$DvtObj$$, "DvtTimelineOverviewParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$6$$) {
  this.$_view$ = $overview$$6$$;
  this.$_parser$ = new D.$DvtXmlParser$$
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$99_xmlString$$9$$) {
  var $childNodes$$27_rootNode$$3$$ = this.$_parser$.parse($ret$$99_xmlString$$9$$);
  $ret$$99_xmlString$$9$$ = this.$ParseRootAttributes$($childNodes$$27_rootNode$$3$$);
  var $childNodes$$27_rootNode$$3$$ = $childNodes$$27_rootNode$$3$$.$getChildNodes$(), $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$;
  if($JSCompiler_inline_result$$70_xmlNode$$inline_9022$$ = $childNodes$$27_rootNode$$3$$[0]) {
    var $ret$$inline_9023$$ = {};
    $ret$$inline_9023$$.width = $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$.$getAttr$("width");
    $ret$$inline_9023$$.height = $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$.$getAttr$("height");
    $ret$$inline_9023$$.$ticks$ = $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$.$getChildNodes$();
    $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$ = $ret$$inline_9023$$
  }else {
    $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$99_xmlString$$9$$.$timeAxisInfo$ = $JSCompiler_inline_result$$70_xmlNode$$inline_9022$$;
  $ret$$99_xmlString$$9$$.$markers$ = this.$_parseDataNode$($childNodes$$27_rootNode$$3$$[1], $ret$$99_xmlString$$9$$.$defaultMarkerStyles$);
  2 < $childNodes$$27_rootNode$$3$$.length && ($ret$$99_xmlString$$9$$.$formattedTimeRanges$ = !$childNodes$$27_rootNode$$3$$[2] ? D.$JSCompiler_alias_NULL$$ : $childNodes$$27_rootNode$$3$$[2].$getChildNodes$());
  return $ret$$99_xmlString$$9$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$72$$) {
  var $ret$$100$$ = {};
  $ret$$100$$.start = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("start"));
  $ret$$100$$.end = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("end"));
  $ret$$100$$.width = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("width"));
  $ret$$100$$.$renderStart$ = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("renstart"));
  $ret$$100$$.currentTime = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("ocd"));
  $ret$$100$$.orientation = $xmlNode$$72$$.$getAttr$("orn");
  $ret$$100$$.$overviewPosition$ = $xmlNode$$72$$.$getAttr$("ovp");
  $ret$$100$$.$selectionMode$ = $xmlNode$$72$$.$getAttr$("selmode");
  $ret$$100$$.$isRtl$ = $xmlNode$$72$$.$getAttr$("rtl");
  $ret$$100$$.borderTopStyle = $xmlNode$$72$$.$getAttr$("_bts");
  $ret$$100$$.borderTopColor = $xmlNode$$72$$.$getAttr$("_btc");
  $ret$$100$$.$seriesIds$ = $xmlNode$$72$$.$getAttr$("sid");
  $ret$$100$$.$animationOnClick$ = $xmlNode$$72$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$72$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$72$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$72$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$72$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$72$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$72$$.$getAttr$("_ph");
  $ret$$100$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$100$$.$handleFillColor$ = $xmlNode$$72$$.$getAttr$("_hfc");
  $ret$$100$$.$handleTextureColor$ = $xmlNode$$72$$.$getAttr$("_htc");
  $ret$$100$$.$handleBackgroundImage$ = $xmlNode$$72$$.$getAttr$("_hbi");
  $ret$$100$$.$handleWidth$ = $xmlNode$$72$$.$getAttr$("_hw");
  $ret$$100$$.$handleHeight$ = $xmlNode$$72$$.$getAttr$("_hh");
  $ret$$100$$.$windowBackgroundColor$ = $xmlNode$$72$$.$getAttr$("_wbc");
  $ret$$100$$.$windowBorderTopStyle$ = $xmlNode$$72$$.$getAttr$("_wbts");
  $ret$$100$$.$windowBorderRightStyle$ = $xmlNode$$72$$.$getAttr$("_wbrs");
  $ret$$100$$.$windowBorderBottomStyle$ = $xmlNode$$72$$.$getAttr$("_wbbs");
  $ret$$100$$.$windowBorderLeftStyle$ = $xmlNode$$72$$.$getAttr$("_wbls");
  $ret$$100$$.$windowBorderTopColor$ = $xmlNode$$72$$.$getAttr$("_wbtc");
  $ret$$100$$.$windowBorderRightColor$ = $xmlNode$$72$$.$getAttr$("_wbrc");
  $ret$$100$$.$windowBorderBottomColor$ = $xmlNode$$72$$.$getAttr$("_wbbc");
  $ret$$100$$.$windowBorderLeftColor$ = $xmlNode$$72$$.$getAttr$("_wblc");
  $ret$$100$$.$overviewBackgroundColor$ = $xmlNode$$72$$.$getAttr$("_obc");
  $ret$$100$$.$currentTimeIndicatorColor$ = $xmlNode$$72$$.$getAttr$("_ctic");
  $ret$$100$$.$timeIndicatorColor$ = $xmlNode$$72$$.$getAttr$("_tic");
  $ret$$100$$.$timeAxisBarColor$ = $xmlNode$$72$$.$getAttr$("_tabc");
  $ret$$100$$.$timeAxisBarOpacity$ = $xmlNode$$72$$.$getAttr$("_tabo");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$72$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$72$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$72$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$72$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$72$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$72$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$72$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$72$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$72$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$72$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$72$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$72$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$72$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$72$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$72$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$72$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$72$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$72$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$72$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$72$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$72$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$72$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$72$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$72$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$72$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$72$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$72$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$72$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$72$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$72$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$72$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$72$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$72$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$72$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$72$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$72$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$72$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$72$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$72$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$72$$.$getAttr$("_asdbw");
  $ret$$100$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$100$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$73$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$73$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $treeNodes$$ = [], $markers$$12$$ = $xmlNode$$73$$.$getChildNodes$(), $i$$873$$ = 0;$i$$873$$ < $markers$$12$$.length;$i$$873$$++) {
    var $props$$14_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$12$$[$i$$873$$], $defaultMarkerStyles$$1$$), $props$$14_treeNode$$1$$ = new D.$DvtTimelineOverviewNode$$(this.$_view$, $props$$14_treeNode$$1$$);
    $treeNodes$$.push($props$$14_treeNode$$1$$)
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$74$$, $defaultMarkerStyles$$2$$) {
  var $ret$$101$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$74$$.$getAttr$("_sd");
  $ret$$101$$.id = $xmlNode$$74$$.$getAttr$("tid");
  $ret$$101$$.$rowKey$ = $xmlNode$$74$$.$getAttr$("rk");
  $ret$$101$$.time = $xmlNode$$74$$.$getAttr$("t");
  $ret$$101$$.$endTime$ = $xmlNode$$74$$.$getAttr$("et");
  $ret$$101$$.shape = $xmlNode$$74$$.$getAttr$("s");
  $useSkinningDefaults$$ && $ret$$101$$.shape == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$101$$.$desc$ = $xmlNode$$74$$.$getAttr$("d");
  $ret$$101$$.color = $xmlNode$$74$$.$getAttr$("c");
  $ret$$101$$.$durationFillColor$ = $xmlNode$$74$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && $ret$$101$$.color == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$101$$.$scaleX$ = $xmlNode$$74$$.$getAttr$("sx");
  $useSkinningDefaults$$ && $ret$$101$$.$scaleX$ == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$101$$.$scaleY$ = $xmlNode$$74$$.$getAttr$("sy");
  $useSkinningDefaults$$ && $ret$$101$$.$scaleY$ == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$101$$.$gradient$ = $xmlNode$$74$$.$getAttr$("g");
  $ret$$101$$.opacity = $xmlNode$$74$$.$getAttr$("o");
  $useSkinningDefaults$$ && $ret$$101$$.opacity == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$101$$
};
D.$DvtTimelineOverviewNode$$ = function $$DvtTimelineOverviewNode$$$($overview$$4$$, $props$$11$$) {
  this.Init($overview$$4$$, $props$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewNode$$, D.$DvtObj$$, "DvtTimelineOverviewNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$12$$) {
  this.$_view$ = $overview$$5$$;
  this.$_rowKey$ = $props$$12$$.$rowKey$;
  this.$_id$ = $props$$12$$.id;
  this.$_time$ = (0,window.parseInt)($props$$12$$.time);
  this.$_endTime$ = $props$$12$$.$endTime$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,window.parseInt)($props$$12$$.$endTime$);
  this.$_shape$ = "circle";
  "square" == $props$$12$$.shape ? this.$_shape$ = "square" : "plus" == $props$$12$$.shape ? this.$_shape$ = "plus" : "diamond" == $props$$12$$.shape ? this.$_shape$ = "diamond" : "triangleUp" == $props$$12$$.shape ? this.$_shape$ = "triangleUp" : "triangleDown" == $props$$12$$.shape && (this.$_shape$ = "triangleDown");
  this.$_desc$ = $props$$12$$.$desc$;
  this.$_color$ = $props$$12$$.color;
  this.$_gradient$ = $props$$12$$.$gradient$;
  $props$$12$$.opacity != D.$JSCompiler_alias_NULL$$ && (this.$_opacity$ = (0,window.parseFloat)($props$$12$$.opacity));
  $props$$12$$.$scaleX$ != D.$JSCompiler_alias_NULL$$ && (this.$_scaleX$ = (0,window.parseFloat)($props$$12$$.$scaleX$));
  $props$$12$$.$scaleY$ != D.$JSCompiler_alias_NULL$$ && (this.$_scaleY$ = (0,window.parseFloat)($props$$12$$.$scaleY$));
  $props$$12$$.$durationFillColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_durationFillColor$ = $props$$12$$.$durationFillColor$)
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.getTime = (0,D.$JSCompiler_get$$)("$_time$");
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = (0,D.$JSCompiler_get$$)("$_scaleX$");
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = (0,D.$JSCompiler_get$$)("$_scaleY$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShape$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getOpacity$ = (0,D.$JSCompiler_get$$)("$_opacity$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = (0,D.$JSCompiler_set$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtTimelineOverviewEvent$$ = function $$DvtTimelineOverviewEvent$$$($type$$256$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$256$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewEvent$$, D.$DvtOverviewEvent$$, "DvtTimelineOverviewEvent");
D.$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId")
};
D.$DvtTimelineOverviewAutomation$$ = function $$DvtTimelineOverviewAutomation$$$($overview$$2$$) {
  this.$_Init$($overview$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewAutomation$$, D.$DvtAutomation$$, "DvtTimelineOverviewAutomation");
D.$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = (0,D.$JSCompiler_set$$)("$_overview$");
D.$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$17_displayable$$103_prev$$4$$) {
  var $id$$303_seriesIds$$1_seriesIndex$$117$$ = $arr$$17_displayable$$103_prev$$4$$.getId();
  if($arr$$17_displayable$$103_prev$$4$$ instanceof D.$DvtMarker$$) {
    $arr$$17_displayable$$103_prev$$4$$ = $id$$303_seriesIds$$1_seriesIndex$$117$$.split(":");
    if(4 != $arr$$17_displayable$$103_prev$$4$$.length) {
      return D.$JSCompiler_alias_NULL$$
    }
    $id$$303_seriesIds$$1_seriesIndex$$117$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" ");
    if($id$$303_seriesIds$$1_seriesIndex$$117$$ != D.$JSCompiler_alias_NULL$$ && ($id$$303_seriesIds$$1_seriesIndex$$117$$ = $id$$303_seriesIds$$1_seriesIndex$$117$$.indexOf($arr$$17_displayable$$103_prev$$4$$[1]), -1 < $id$$303_seriesIds$$1_seriesIndex$$117$$)) {
      return"marker[" + $id$$303_seriesIds$$1_seriesIndex$$117$$ + "][" + $arr$$17_displayable$$103_prev$$4$$[2] + "]"
    }
  }else {
    if("window" == $id$$303_seriesIds$$1_seriesIndex$$117$$) {
      return"range_window"
    }
    if("lh" == $id$$303_seriesIds$$1_seriesIndex$$117$$ || "lhb" == $id$$303_seriesIds$$1_seriesIndex$$117$$ || "lbgrh" == $id$$303_seriesIds$$1_seriesIndex$$117$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$303_seriesIds$$1_seriesIndex$$117$$ || "rhb" == $id$$303_seriesIds$$1_seriesIndex$$117$$ || "rbgrh" == $id$$303_seriesIds$$1_seriesIndex$$117$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$303_seriesIds$$1_seriesIndex$$117$$) {
      return $arr$$17_displayable$$103_prev$$4$$ = $arr$$17_displayable$$103_prev$$4$$.getParent().$getChildBefore$($arr$$17_displayable$$103_prev$$4$$), this.$GetSubIdForDomElement$($arr$$17_displayable$$103_prev$$4$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_9014_subId$$27$$) {
  for(var $array$$inline_9007_marker$$32_markerId$$inline_9017$$ = $markers$$inline_9014_subId$$27$$.split("["), $i$$inline_9018_len$$inline_9008_seriesIds$$2$$ = $array$$inline_9007_marker$$32_markerId$$inline_9017$$.length, $i$$inline_9009_index$$248_marker$$inline_9019$$ = 1;$i$$inline_9009_index$$248_marker$$inline_9019$$ < $i$$inline_9018_len$$inline_9008_seriesIds$$2$$;$i$$inline_9009_index$$248_marker$$inline_9019$$++) {
    var $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$ = $array$$inline_9007_marker$$32_markerId$$inline_9017$$[$i$$inline_9009_index$$248_marker$$inline_9019$$], $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$ = $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$.substr(0, $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$.length - 1), $tempIdAsNumber$$inline_9012$$ = (0,window.parseFloat)($elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$), $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$ = 
    (0,window.isNaN)($tempIdAsNumber$$inline_9012$$) ? $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$ : $tempIdAsNumber$$inline_9012$$;
    $array$$inline_9007_marker$$32_markerId$$inline_9017$$[$i$$inline_9009_index$$248_marker$$inline_9019$$] = $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$
  }
  if($array$$inline_9007_marker$$32_markerId$$inline_9017$$ && 3 == $array$$inline_9007_marker$$32_markerId$$inline_9017$$.length && "marker" == $array$$inline_9007_marker$$32_markerId$$inline_9017$$[0]) {
    if($i$$inline_9018_len$$inline_9008_seriesIds$$2$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" "), $i$$inline_9018_len$$inline_9008_seriesIds$$2$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_9009_index$$248_marker$$inline_9019$$ = (0,window.parseInt)($array$$inline_9007_marker$$32_markerId$$inline_9017$$[1], 10), -1 < $i$$inline_9009_index$$248_marker$$inline_9019$$ && $i$$inline_9009_index$$248_marker$$inline_9019$$ < 
    $i$$inline_9018_len$$inline_9008_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_9014_subId$$27$$ = this.$_overview$.$_markers$;
        $array$$inline_9007_marker$$32_markerId$$inline_9017$$ = "tl1:" + $i$$inline_9018_len$$inline_9008_seriesIds$$2$$[$i$$inline_9009_index$$248_marker$$inline_9019$$] + ":" + $array$$inline_9007_marker$$32_markerId$$inline_9017$$[2] + ":";
        for($i$$inline_9018_len$$inline_9008_seriesIds$$2$$ = 0;$i$$inline_9018_len$$inline_9008_seriesIds$$2$$ < $markers$$inline_9014_subId$$27$$.length;$i$$inline_9018_len$$inline_9008_seriesIds$$2$$++) {
          if($i$$inline_9009_index$$248_marker$$inline_9019$$ = $markers$$inline_9014_subId$$27$$[$i$$inline_9018_len$$inline_9008_seriesIds$$2$$], $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$ = $i$$inline_9009_index$$248_marker$$inline_9019$$.getId(), $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$ != D.$JSCompiler_alias_NULL$$ && 0 == $elem$$inline_9010_id$$inline_9020_tempId$$inline_9011$$.indexOf($array$$inline_9007_marker$$32_markerId$$inline_9017$$)) {
            $array$$inline_9007_marker$$32_markerId$$inline_9017$$ = $i$$inline_9009_index$$248_marker$$inline_9019$$;
            break a
          }
        }
        $array$$inline_9007_marker$$32_markerId$$inline_9017$$ = D.$JSCompiler_alias_NULL$$
      }
      return $array$$inline_9007_marker$$32_markerId$$inline_9017$$ ? $array$$inline_9007_marker$$32_markerId$$inline_9017$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
    }
  }else {
    if("range_window" == $markers$$inline_9014_subId$$27$$) {
      return this.$_overview$.$getChildAt$(1).$getElem$()
    }
    if("range_start_handle" == $markers$$inline_9014_subId$$27$$) {
      return this.$_overview$.$getChildAt$(this.$_overview$.$getNumChildren$() - this.$_overview$.$_lastChildIndex$).$getElem$()
    }
    if("range_end_handle" == $markers$$inline_9014_subId$$27$$) {
      return(0,D.$JSCompiler_StaticMethods_getRightHandle$$)(this.$_overview$).$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);
  return D;
});