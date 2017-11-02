var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857","#F0F8FF","#FFD800","#000080","#F0E8D0","#A0B0E0","#FFF0E0","#80FFD0","#808080","#808000","#B0FF30","#FF68B0","#D070D0","#FFE8D0","#000000","#F0FFF0","#FFE0C0","#FFA000","#F0F0E0","#609020","#008000","#F0FFFF","#808080","#D0A020","#D05860","#F0E8A0","#0000FF","#FFFFF0","#90F790","#8028E0","#F0E890","#B0F0F0","#A02820","#E0E8F0","#D07090","#E0B880","#FFF0F0","#FFF0D0","#60A0A0","#80F800","#FFD8B0","#80FF00","#FFF8D0","#D08040","#D06820","#B0D8E0","#FFC0C0","#FFF8E0","#800080","#00FFFF","#90F090","#FF0000","#000080","#FFB8C0","#FF00E0","#008880","#FFA070","#C09090","#B08800","#20B0A0","#4068E0","#A0A8A0","#80D0F0","#804010","#006000","#0000E0","#F08070","#C0B860"];

function getQuote() {
 $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(quote) {
        $('q').html(' '+quote.quoteText+'  ')
        $('p').html("-"+quote.quoteAuthor)
      }
   
    });
}
$('#button').click(function() {
  getQuote();
   
  })