/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Created by jaxle on 26/01/2017.
 */

$(function () {
    $(function () {
        $("[data-role=panel]").enhanceWithin().panel();
    });
    $( "#gotop2" ).on('click',function( event ) {
        console.log("RRRRRR")
        $.mobile.navigate( "#nd", {
            info: "info about the #bar hash"
        });
        $( window ).on( "navigate", function( event, data ) {
            console.log(data);
            console.log( data.state.info );
            console.log( data.state.direction );
            console.log( data.state.url );
            console.log( data.state.hash );
        });
        window.history.back();
    });


    $("#st").on('navigate', function (event, data) {
        console.log(data.state.url);
        console.log(data.state.hash);
        console.log(data.state.direction);
    });
    $("#goback").on('click', function(event){
        console.log("HERE IT IS BACK");
        $.mobile.navigate("#st",{
            info: "HASHCODE"
        });
        $( window ).on( "navigate", function( event, data ) {
            console.log(data);
            console.log( data.state.info );
            console.log( data.state.direction );
            console.log( data.state.url );
            console.log( data.state.hash );
        });
        window.history.back();
    });

    $("#ThisIsNotMe").on('click', function(event){
        $.mobile.navigate("#Login",{
        });
    });
    $("#OpGear").on('click', function(event){
        $( "#LoginOptions" ).popup();
        console.log("AFTER POPUP");
        $("#LoginOptions").popup("open");
    });

    $("#SubmitLogin").on('click',function (event) {
        $.mobile.navigate("#Home",{
            Login: "Direct"
        });
    });
    $("#DiscardAll").on('click',function (event) {
        $(".MissedMatch").remove();
        $("#DiscardAll").parent().hide("fast",function () {
            console.log("HIDDING");
            $("#nomissedmatchnotice").toggleClass("displayhidden",false);
        });
    });
    $( "#SideMenu" ).panel({
        theme: "a"
    });
    $("#matchesyoumissed").$("ul").$("li").on("swipeleft swiperight",function (event) {
        
    })

});