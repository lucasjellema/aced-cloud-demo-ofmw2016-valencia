/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojpagingcontrol", "ojs/ojknockout-model"], function($oj$$43$$, $$$$39$$, $ko$$6$$) {
  $oj$$43$$.$ArrayPagingDataSource$ = function $$oj$$43$$$$ArrayPagingDataSource$$($data$$157$$) {
    this.data = $data$$157$$;
    this.current = 0;
    this.Init();
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$43$$.$ArrayPagingDataSource$, $oj$$43$$);
  $oj$$43$$.$Object$.$createSubclass$($oj$$43$$.$ArrayPagingDataSource$, $oj$$43$$.$DataSource$, "oj.ArrayPagingDataSource");
  $oj$$43$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$43$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$43$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$43$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$($options$$353$$) {
    $options$$353$$ = $options$$353$$ || {};
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$379$$ = 0;$i$$379$$ < this.$dataWindow$.length;$i$$379$$++) {
      this.$dataWindow$[$i$$379$$] = this.data[this.current + $i$$379$$];
    }
    this.$_refreshObservableDataWindow$();
    this.$_endIndex$ = this.$_startIndex$ + this.$dataWindow$.length - 1;
    $options$$353$$.silent || this.handleEvent("sync", {data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$380$$ = 0;$i$$380$$ < this.$dataWindow$.length;$i$$380$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$380$$]);
      }
    }
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$43$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$49$$, $event$$497$$) {
    return $oj$$43$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$49$$, $event$$497$$);
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$43$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$6$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$43$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.getPage = function $$oj$$43$$$$ArrayPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPage", {getPage:$oj$$43$$.$ArrayPagingDataSource$.prototype.getPage});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.setPage = function $$oj$$43$$$$ArrayPagingDataSource$$$setPage$($value$$263$$, $options$$354$$) {
    $options$$354$$ = $options$$354$$ || {};
    $value$$263$$ = parseInt($value$$263$$, 10);
    try {
      $oj$$43$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$43$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$263$$, previousPage:this.$_page$});
    } catch ($err$$17$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$354$$.pageSize ? $options$$354$$.pageSize : this.pageSize;
    $options$$354$$.startIndex = $value$$263$$ * this.pageSize;
    var $previousPage$$3$$ = this.$_page$;
    this.$_page$ = $value$$263$$;
    this.$_startIndex$ = $options$$354$$.startIndex;
    var $self$$162$$ = this;
    return new Promise(function($resolve$$53$$, $reject$$52$$) {
      $self$$162$$.$_fetchInternal$($options$$354$$).then(function() {
        $oj$$43$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call($self$$162$$, $oj$$43$$.$PagingModel$.$EventType$.PAGE, {page:$self$$162$$.$_page$, previousPage:$previousPage$$3$$});
        $resolve$$53$$(null);
      }, function() {
        $self$$162$$.$_page$ = $previousPage$$3$$;
        $self$$162$$.$_startIndex$ = $self$$162$$.$_page$ * $self$$162$$.pageSize;
        $reject$$52$$(null);
      });
    });
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.setPage", {setPage:$oj$$43$$.$ArrayPagingDataSource$.prototype.setPage});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.getStartItemIndex = function $$oj$$43$$$$ArrayPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$43$$.$ArrayPagingDataSource$.prototype.getStartItemIndex});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.getEndItemIndex = function $$oj$$43$$$$ArrayPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$43$$.$ArrayPagingDataSource$.prototype.getEndItemIndex});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.getPageCount = function $$oj$$43$$$$ArrayPagingDataSource$$$getPageCount$() {
    var $totalSize$$9$$ = this.totalSize();
    return-1 == $totalSize$$9$$ ? -1 : Math.ceil($totalSize$$9$$ / this.pageSize);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$43$$.$ArrayPagingDataSource$.prototype.getPageCount});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$43$$$$ArrayPagingDataSource$$$fetch$($options$$355_opts$$32$$) {
    $options$$355_opts$$32$$ = $options$$355_opts$$32$$ || {};
    if (void 0 !== $options$$355_opts$$32$$.pageSize && void 0 !== $options$$355_opts$$32$$.startIndex) {
      if (!this.$_hasMore$()) {
        return Promise.resolve();
      }
      this.$currentPageSize$ = $options$$355_opts$$32$$.startIndex + $options$$355_opts$$32$$.pageSize;
    }
    this.$_refreshDataWindow$(null);
    return Promise.resolve();
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$43$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$_fetchInternal$$($options$$356$$) {
    var $opts$$33$$ = $options$$356$$ || {};
    void 0 !== $opts$$33$$.startIndex && (this.current = $opts$$33$$.startIndex);
    void 0 !== $opts$$33$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$33$$.pageSize);
    this.$_refreshDataWindow$($options$$356$$);
    return Promise.resolve({data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$_hasMore$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$43$$$$ArrayPagingDataSource$$$$_setPageSize$$($n$$25$$) {
    this.$currentPageSize$ = this.pageSize = $n$$25$$;
    this.$_refreshDataWindow$(null);
  };
  $oj$$43$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$43$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$43$$.$CollectionPagingDataSource$ = function $$oj$$43$$$$CollectionPagingDataSource$$($collection$$43$$) {
    this.$collection$ = $collection$$43$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$43$$.$CollectionPagingDataSource$, $oj$$43$$);
  $oj$$43$$.$Object$.$createSubclass$($oj$$43$$.$CollectionPagingDataSource$, $oj$$43$$.$DataSource$, "oj.CollectionPagingDataSource");
  $oj$$43$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$43$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$43$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$43$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$164$$ = this;
    return this.$collection$.$IterativeAt$(this.current, this.current + this.$dataWindow$.length).then(function($array$$17$$) {
      for (var $i$$381$$ = 0;$i$$381$$ < $array$$17$$.length;$i$$381$$++) {
        $self$$164$$.$dataWindow$[$i$$381$$] = $array$$17$$[$i$$381$$];
      }
      $self$$164$$.$_refreshObservableDataWindow$();
      $self$$164$$.$_endIndex$ = $self$$164$$.$_startIndex$ + $self$$164$$.$dataWindow$.length - 1;
    });
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$382$$ = 0;$i$$382$$ < this.$dataWindow$.length;$i$$382$$++) {
        this.$observableDataWindow$.push($oj$$43$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$382$$]));
      }
    }
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$43$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$6$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$43$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.getPage = function $$oj$$43$$$$CollectionPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPage", {getPage:$oj$$43$$.$CollectionPagingDataSource$.prototype.getPage});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.setPage = function $$oj$$43$$$$CollectionPagingDataSource$$$setPage$($value$$264$$, $options$$357$$) {
    $options$$357$$ = $options$$357$$ || {};
    $value$$264$$ = parseInt($value$$264$$, 10);
    try {
      $oj$$43$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$43$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$264$$, previousPage:this.$_page$});
    } catch ($err$$18$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$357$$.pageSize ? $options$$357$$.pageSize : this.pageSize;
    $options$$357$$.startIndex = $value$$264$$ * this.pageSize;
    var $previousPage$$4$$ = this.$_page$;
    this.$_page$ = $value$$264$$;
    this.$_startIndex$ = $options$$357$$.startIndex;
    var $self$$165$$ = this;
    return new Promise(function($resolve$$54$$, $reject$$53$$) {
      $self$$165$$.$_fetchInternal$($options$$357$$).then(function() {
        $oj$$43$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call($self$$165$$, $oj$$43$$.$PagingModel$.$EventType$.PAGE, {page:$self$$165$$.$_page$, previousPage:$previousPage$$4$$});
        $resolve$$54$$(null);
      }, function() {
        $self$$165$$.$_page$ = $previousPage$$4$$;
        $self$$165$$.$_startIndex$ = $self$$165$$.$_page$ * $self$$165$$.pageSize;
        $reject$$53$$(null);
      });
    });
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.setPage", {setPage:$oj$$43$$.$CollectionPagingDataSource$.prototype.setPage});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.getStartItemIndex = function $$oj$$43$$$$CollectionPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$43$$.$CollectionPagingDataSource$.prototype.getStartItemIndex});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.getEndItemIndex = function $$oj$$43$$$$CollectionPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$43$$.$CollectionPagingDataSource$.prototype.getEndItemIndex});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.getPageCount = function $$oj$$43$$$$CollectionPagingDataSource$$$getPageCount$() {
    var $totalSize$$10$$ = this.totalSize();
    return-1 == $totalSize$$10$$ ? -1 : Math.ceil($totalSize$$10$$ / this.pageSize);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$43$$.$CollectionPagingDataSource$.prototype.getPageCount});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$43$$$$CollectionPagingDataSource$$$fetch$($options$$358$$) {
    var $opts$$34$$ = $options$$358$$ || {};
    if (void 0 !== $opts$$34$$.pageSize && void 0 !== $opts$$34$$.startIndex) {
      if (!this.$_hasMore$()) {
        return this.$_processSuccess$(null), Promise.resolve();
      }
      this.$currentPageSize$ = $opts$$34$$.startIndex + $opts$$34$$.pageSize;
      var $self$$166$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$166$$.$_processSuccess$(null);
      });
    }
    return this.$_fetchInternal$($options$$358$$);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$43$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_fetchInternal$$($options$$359$$) {
    var $opts$$35$$ = $options$$359$$ || {};
    void 0 !== $opts$$35$$.startIndex && (this.current = $opts$$35$$.startIndex);
    void 0 !== $opts$$35$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$35$$.pageSize);
    var $self$$167$$ = this;
    return new Promise(function($resolve$$55$$) {
      try {
        $self$$167$$.$collection$.fetch({success:function() {
          $self$$167$$.$_refreshDataWindow$().then(function() {
            $self$$167$$.$_processSuccess$($opts$$35$$);
            $resolve$$55$$({data:$self$$167$$.$getWindow$(), startIndex:$self$$167$$.current});
          });
        }});
      } catch ($e$$108$$) {
        $self$$167$$.$_refreshDataWindow$().then(function() {
          $self$$167$$.$_processSuccess$($opts$$35$$);
          $resolve$$55$$({data:$self$$167$$.$getWindow$(), startIndex:$self$$167$$.current});
        });
      }
    });
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$360_opts$$36$$) {
    $options$$360_opts$$36$$ = $options$$360_opts$$36$$ || {};
    $options$$360_opts$$36$$.silent || this.handleEvent("sync", {data:this.$getWindow$(), startIndex:this.current});
    $options$$360_opts$$36$$.success && $options$$360_opts$$36$$.success();
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$43$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$50$$, $event$$498$$) {
    return $oj$$43$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$50$$, $event$$498$$);
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_hasMore$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$43$$$$CollectionPagingDataSource$$$$_setPageSize$$($n$$26$$) {
    this.$currentPageSize$ = this.pageSize = $n$$26$$;
  };
  $oj$$43$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$43$$$$CollectionPagingDataSource$$$size$() {
    var $w$$8$$ = this.$getWindow$();
    return $w$$8$$ ? $w$$8$$.length : 0;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$43$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$43$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$43$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$43$$.$CollectionPagingDataSource$.prototype.totalSize});
});
