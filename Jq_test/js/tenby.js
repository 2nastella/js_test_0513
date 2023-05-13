<script>
  $(function(){
    $.ajax({
      url: "./json/tenby.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){   
            $(".md_sell").eq(i).find("img").attr("src", "img/"+data[i].url);
            $(".md_sell").eq(i).find("p:first").text(data[i].title);
            $(".md_sell").eq(i).find("p:last").text(data[i].price);
          }
        }
      }
    })
  });
</script>