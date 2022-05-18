(function ( $ ) {

    $.fn.PuzzleCAPTCHA = function( options ) {

        var num = getRandomArbitrary(0,5);
     
        var urls = ["https://dynl.mktgcdn.com/p/VNkahEa7sRSHyLyMlAx139ar5dy990ORB7RJjweKGQs/196x196.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmMos41HXdljPLx5116TdGGLPeGgEBm58nA&usqp=CAU",
        "data:image/png;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCkbXciezTz68m1vT1_Y8dhDHzpkxAw8TQw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNN5krZ-ZoKVFa3lx_m2kPkHDL9DamR2Z9BA&usqp=CAU"]

        var sets = $.extend({
            imageURL: urls[num],
            width: "auto",
            height: "auto",
            columns: 20,
            rows: 3,
            targetInput: null,
            targetVal: null,
            targetButton: null
        }, options );

        var tmpObj=this;
        tmpObj.addClass("puzzleCAPTCHA");
        tmpObj.append('<div class="pcBox"><div class="pcBoxBG"><img src="'+sets.imageURL+'" style="width:'+sets.width+';height:'+sets.height+';"></div></div> <div class="pcAnswer"></div>');

        tmpObj.find(".pcBoxBG img").load(function(){
            tmpImg=$(this);

            if(sets.width == 'auto'){
                tmpW=tmpImg.width();
                tmpH=tmpImg.height();
            }else{
                tmpW=sets.width;
                tmpH=sets.height;
            }
            itemW = Math.round(tmpW/sets.columns);
            itemH = Math.round(tmpH/sets.rows);

            tmpObj.find(".pcAnswer").width(itemW).height(itemH).append( tmpImg.clone() ).css({'margin-top':tmpH/2-itemH/2});

            tmpObj.find(".pcBox").width(tmpObj.find(".pcBox").width()-1);
            tmpObj.find(".pcBox").height(tmpObj.find(".pcBox").height()-1);

            tmpAnswer=Math.floor(Math.random() * sets.columns * sets.rows);

            var x,y,tmpItem,i;

            tmpItem = $(document.createElement("div"));
            tmpItem.addClass("pcBoxItem");

            i=0;

            for(x=0;x<sets.columns;x++){
                for(y=0;y<sets.rows;y++){
                    tmpLeft=itemW*x;
                    tmpTop=itemH*y;
                    if(i==tmpAnswer){
                        answerLeft=tmpLeft;
                        answerTop=tmpTop;
                    }

                    _item=tmpItem.clone().attr("data-val",i).css({
                        width:itemW,
                        height:itemH,
                        left:tmpLeft,
                        top:tmpTop
                    }).append(tmpImg.clone());
                    tmpObj.find(".pcBox").append(_item);

                    i++;
                }
            }
            tmpObj.find(".pcBoxItem img, .pcAnswer img").css({'margin-left':answerLeft*-1,'margin-top':answerTop*-1});

            tmpObj.find(".pcBoxItem").click(function(){
                if($(this).data("val")==tmpAnswer){
                    tmpObj.find(".pcBoxItem").fadeOut(300);
                    if(sets.targetInput!=null){
                        $(sets.targetInput).val(sets.targetVal);
                    }
                    if(sets.targetButton!=null){
                        $(sets.targetButton).prop("disabled",false);
                    }
                }
            });

        });

        return this;

    };

}( jQuery ));

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}