(function($) {

    $(document).ready(function() {

        // Rozwija elementy w menu Lewym
        $('.setColorText__menuHead').on('click', function(e) {
            e.stopPropagation();

            if($(this).hasClass('opened')) {
                $('#setColorBoxWrap').find('.setColorText__content').slideUp();
                $('.setColorText__menuHead').removeClass('opened');
            }else {
                $(this).addClass('opened');
                $(this).parent().find('.setColorText__content').slideDown();
            }

        });


        // Ukrywanie menu Left/Right
        $("#showColorText").click(function(){
            if($("#boxColors").hasClass("setColorText__showSetColorText")) {
                $("#boxColors").removeClass("setColorText__showSetColorText");
            }else {
                $("#boxColors").addClass("setColorText__showSetColorText");
            }
        });

        $("#showAddField").click(function(){
            if($("#boxAddField").hasClass("addFieldWrapper__showaddField")) {
                $("#boxAddField").removeClass("addFieldWrapper__showaddField");
            }else {
                $("#boxAddField").addClass("addFieldWrapper__showaddField");
            }
        });


        // Background Position
        $("#bgrepeat").click(function(){

            var circleRepeat = $("#bgrepeat").hasClass("switcher__circle--left");
            
            if(circleRepeat) {
                $("#bgrepeat").removeClass("switcher__circle--left");
                $("#bgrepeat").addClass("switcher__circle--right");
                $("#formView").css({
                    'background-repeat': "no-repeat",
                });
            }else {
                $("#bgrepeat").removeClass("switcher__circle--right");
                $("#bgrepeat").addClass("switcher__circle--left");
                $("#formView").css({
                    'background-repeat': "repeat",
                });
            }
        });

        $("#bgsize").click(function(){

            var circleSizeLeft = $("#bgsize").hasClass("switcher__circle--center");
            var circleSizeRight = $("#bgsize").hasClass("switcher__circle--left");

            if(circleSizeLeft) {
                $("#bgsize").removeClass("switcher__circle--center");
                $("#bgsize").addClass("switcher__circle--left");
                $("#formView").css({
                    'background-size': "cover",
                });
            }else if(circleSizeRight) {
                $("#bgsize").removeClass("switcher__circle--left");
                $("#bgsize").addClass("switcher__circle--right");
                $("#formView").css({
                    'background-size': "contain",
                });
            }else {
                $("#bgsize").removeClass("switcher__circle--right");
                $("#bgsize").addClass("switcher__circle--center");
                $("#formView").css({
                    'background-size': "initial",
                });
            }

        });

        $("#bgpositionX").click(function(){

            var circleSizeLeft = $("#bgpositionX").hasClass("switcher__circle--center");
            var circleSizeRight = $("#bgpositionX").hasClass("switcher__circle--left");

            if(circleSizeLeft) {
                $("#bgpositionX").removeClass("switcher__circle--center");
                $("#bgpositionX").addClass("switcher__circle--left");
                $("#formView").css({
                    'background-position-x': "left",
                });
            }else if(circleSizeRight) {
                $("#bgpositionX").removeClass("switcher__circle--left");
                $("#bgpositionX").addClass("switcher__circle--right");
                $("#formView").css({
                    'background-position-x': "right",
                });
            }else {
                $("#bgpositionX").removeClass("switcher__circle--right");
                $("#bgpositionX").addClass("switcher__circle--center");
                $("#formView").css({
                    'background-position-x': "center",
                });
            }

        });

        $("#bgpositionY").click(function(){

            var circleSizeLeft = $("#bgpositionY").hasClass("switcher__circle--center");
            var circleSizeRight = $("#bgpositionY").hasClass("switcher__circle--left");

            if(circleSizeLeft) {
                $("#bgpositionY").removeClass("switcher__circle--center");
                $("#bgpositionY").addClass("switcher__circle--left");
                $("#formView").css({
                    'background-position-y': "top",
                });
            }else if(circleSizeRight) {
                $("#bgpositionY").removeClass("switcher__circle--left");
                $("#bgpositionY").addClass("switcher__circle--right");
                $("#formView").css({
                    'background-position-y': "bottom",
                });
            }else {
                $("#bgpositionY").removeClass("switcher__circle--right");
                $("#bgpositionY").addClass("switcher__circle--center");
                $("#formView").css({
                    'background-position-y': "center",
                });
            }

        });

        // Icon Switcher
        $("#iconAdress").click(function(){

            var circleRepeat = $("#iconAdress").hasClass("switcher__circle--left");
            
            if(circleRepeat) {
                $("#iconAdress").removeClass("switcher__circle--left");
                $("#iconAdress").addClass("switcher__circle--right");
                $("#FootericonPin").attr('src', 'http://email.xenweb.pl/images/black-pin.png');
            }else {
                $("#iconAdress").removeClass("switcher__circle--right");
                $("#iconAdress").addClass("switcher__circle--left");
                $("#FootericonPin").attr('src', 'http://email.xenweb.pl/images/white-pin.png');
            }
        });

        $("#iconPhone").click(function(){

            var circleRepeat = $("#iconPhone").hasClass("switcher__circle--left");
            
            if(circleRepeat) {
                $("#iconPhone").removeClass("switcher__circle--left");
                $("#iconPhone").addClass("switcher__circle--right");
                $("#FootericonPhone").attr('src', 'http://email.xenweb.pl/images/black-phone.png');
            }else {
                $("#iconPhone").removeClass("switcher__circle--right");
                $("#iconPhone").addClass("switcher__circle--left");
                $("#FootericonPhone").attr('src', 'http://email.xenweb.pl/images/white-phone.png');
            }
        });


        // Range do Font-size
        $('#mainfzHead').on('change', function () {
            var fontS = $(this).val();
            $('.headColor').css('font-size', fontS + 'px');
        });

        $('#footerfzHead').on('change', function () {
            var fontS = $(this).val();
            $('.footerHeadColor').css('font-size', fontS + 'px');
        });

        $('#mainfzContent').on('change', function () {
            var fontS = $(this).val();
            $('.mainContentText').css('font-size', fontS + 'px');
        });

        $('#footerfzContent').on('change', function () {
            var fontS = $(this).val();
            $('.contentFooterTxt').css('font-size', fontS + 'px');
        });

        $('#mainWidthContent').on('change', function () {
            var fontS = $(this).val();
            $('#wrapperBox').css('width', fontS + 'px');
        });



        $("body").on('changeColor',function() {


            // Kasuje wcześniej wpisany tekst i dodaje nowy
            $("#contentFooter").remove();
            $("#contentFooterAdress").remove();
            $("#contentFooterContact").remove();
            $("#linkFooterInner").remove();


            // Pobieranie wartości "Value" z inputów
            var getBGColor = $("#getBGColor").val();
            var getBGImg = "'"+$("#getBGImg").val()+"'";
            var getheadColor = $("#getheadColor").val();
            var getcontentTextColor = $("#getcontentTextColor").val();
            var getContentColor = $("#getContentColor").val();
            var getheaderColor = $("#getheaderColor").val();
            var getheaderLogo = $("#getheaderLogo").val();
            var getFooterColor = $("#getFooterColor").val();
            var getFooterColorText = $("#getFooterColorText").val();
            var getTextFooterAdress = $("#getTextFooterAdress").val();
            var getTextFooterContact = $("#getTextFooterContact").val();
            var getHeadUrlFooter = $("#getHeadUrlFooter").val();
            var getURLFooter = $("#getURLFooter").val();
            var getFooterColorBorder = $("#getFooterColorBorder").val();
            var mainfzHead = $("output#rangevalue").val();
            var footerfzHead = $("output#footerrangevalue").val();
            var mainfzContentRange = $("output#mainfzContentRange").val();
            var getFooterHeadColorText = $("#getFooterHeadColorText").val();
            var footerContentrangevalue = $("output#footerContentrangevalue").val();
            var getFooterBackground = $("#getFooterBackground").val();
            var getFooterColorURL = $("#getFooterColorURL").val();
            var mainWidthContentRange = $("output#mainWidthContentRange").val();


            // Dodaje CSS do elementów
            $("body").css({
                'background-color': getBGColor
            });

            $("#formView").css({
                'background-image': 'url(' + getBGImg + ')',
                'background-color': getBGColor,
                'padding': "150px 0",
            });

            $("label.headColor").css({
                'color': getheadColor,
                'border-bottom-color': getheadColor,
                'font-size': mainfzHead + "px",
            });

            $("span.mainContentText").css({
                'color': getcontentTextColor,
                'font-size': mainfzContentRange + "px",
            });

            $("#mainContent").css({
                'background-color': getContentColor,
                'padding': '20px 15px',
            });

            $("#topHeader").css({
                'background-color': getheaderColor,
                'padding': '25px 0',
                'width': '100%',
            });

            $("#headerLogo").attr( "src", getheaderLogo );
            $("#logoLink").attr( "href", getURLFooter );

            $("#footer").css({
                'background-color': getFooterColor,
                'color': getFooterColorText,
            });

            $(".contentFooterTxt").css({
                'font-size': footerContentrangevalue + "px",
            });

            $("#wrapperBox").css({
                'width': mainWidthContentRange + "px",
            });

            $("#footerLeftBox").css({
                'width': '49.9%',
                'float': 'left',
                'border-right': '1px solid',
                'border-color': getFooterColorBorder,
            });

            $("#footerRightBox").css({
                'width': '49.9%',
                'float': 'left',
                'border-color': getFooterColorBorder,
            });

            $(".footerHeadColor").css({
                'color': getFooterHeadColorText,
                'font-size': footerfzHead + "px",
            });

            // Dodaje wpisany tekst
            var footerTextAdress = $("<p class=\"contentFooterTxt\" id=\"contentFooterAdress\" style=\"word-break: break-all; padding: 0 15px; color:"+getFooterColorText+"; font-size:"+footerContentrangevalue+"px;\"\">" + getTextFooterAdress + "</p>");
            var footerTextContact = $("<p class=\"contentFooterTxt\" id=\"contentFooterContact\" style=\"word-break: break-all; padding: 0 15px; color:"+getFooterColorText+"; font-size:"+footerContentrangevalue+"px;\">" + getTextFooterContact + "</p>");

            var footerLink = $("<a style=\"padding: 15px 0px; display: inline-block; width: 100%; text-align: center; color:" + getFooterColorURL +"; background:"+ getFooterBackground +"; border-top: 1px solid; border-color:"+ getFooterColorBorder +"\" id=\"linkFooterInner\" href="+ getURLFooter +">" + getHeadUrlFooter + "</a>")

            $("#footerLeftBox").append(footerTextAdress);
            $("#footerRightBox").append(footerTextContact);
            $("#contentFooterLink").append(footerLink);

        });


        // Dodaje nowe pole do wypełnienia Prawe Menu
        $("#add").click(function() {
            

            var lastField = $("#buildyourform div:last");

            var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;

            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");

            fieldWrapper.data("idx", intId);

            var fieldLabel = $("<label>Nagłówek: </label><input type=\"text\" onkeyup=\"DelayedSubmission()\" class=\"fieldname\" />");
            var fieldNameLabel = $("<label>Treść: </label><input type=\"text\" onkeyup=\"DelayedSubmission()\" class=\"codeForm\" />");

            var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
            removeButton.click(function() {
                $(this).parent().remove();
                $("body").trigger( "generatehtml" );
            });

            fieldWrapper.append(fieldLabel);
            fieldWrapper.append(fieldNameLabel);

            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);

            $("body").trigger( "generatehtml" );
        });

        //Generuje zminifikowany HTML
        $("#preview").click(function() {

            $("body").trigger( "generatehtml" );

            var getHTML = $("#demoView").html().replace(/\n\s+|\n/g, "");

            var textareaHTML = '<textarea id="showHTML">'+ getHTML +'</textarea><button class="copyBtn" onclick="copyHTMLfunc()" >Kopiuj HTML</button><span class="htmlcopied">Kod HTML został skopiowany. Użyj "Ctrl + V".</span>';

            generateKBmodal(textareaHTML, 'html', undefined, undefined);

        });

        // Generuje podgląd Maila
        $("body").on('generatehtml', function() {

            $("#fieldContent").remove();
            $("#showHTML").remove();

            var fieldSet = $("<div id=\"fieldContent\"></div>");

            $("#mainContent").append(fieldSet);

            $("#buildyourform div").each(function() {

                var id = "input" + $(this).attr("id").replace("field","");

                var label = $("<label style=\"font-weight: bold; border-bottom: 2px solid; width: 100%; display: inline-block;\" class=\"headColor\">" + $(this).find("input.fieldname").first().val() + "</label>");
                var codeForm = $("<span class=\"mainContentText\" style=\"font-size: 18px; font-weight: 400; display: block; margin-bottom: 15px; margin-top: 10px;\">" + $(this).find("input.codeForm").first().val() + "</span>");


                fieldSet.append(label);
                fieldSet.append(codeForm);

            });

            $("body").trigger( "changeColor" );

        });
        
    });
})(jQuery);



// Kopiowanie tekstu
function copyHTMLfunc() {
    var copyText = $("#showHTML");
    copyText.select();
    document.execCommand("copy");

    $(".htmlcopied").fadeIn( 2000, function() {
        setTimeout(() => {
            $( ".htmlcopied" ).fadeOut( 2000 );
        }, 2000);
    });
}

// automatyczne odświeżanie dema
function DelayedSubmission() {
    var date = new Date();
    initial_time = date.getTime();
    if (typeof setInverval_Variable == 'undefined') {
            setInverval_Variable = setInterval(DelayedSubmission_Check, 50);
    } 
}

function DelayedSubmission_Check() {
    var date = new Date();
    check_time = date.getTime();
    var limit_ms=check_time-initial_time;
    if (limit_ms > 800) { //Change value in milliseconds
        jQuery("body").trigger( "generatehtml" );
        clearInterval(setInverval_Variable);
        delete setInverval_Variable;
    }
}
