  let sidesArray = [dlina,visota];
  let pricesListArray = [];
  let totalPriceArray = [];     

  function start(){
       getSize();  
    }
  
    function getPriceList(){
        pricesListArray.banner = Number (document.getElementById("price").value.replace(/,/, '.'));
        pricesListArray.prokleika = Number (document.getElementById("priceProkleika").value.replace(/,/, '.'));
        pricesListArray.luvers = Number (document.getElementById("priceLuvers").value.replace(/,/, '.'));    
    }             
                
        function getSize(){
        let dlina = Number (document.getElementById("dlina").value.replace(/,/, '.'));
        let visota = Number (document.getElementById("visota").value.replace(/,/, '.'));
        sidesArray.dlina=dlina;
        sidesArray.visota=visota;
        getPriceList();
        getBannerPrice(dlina,visota);
        getProkleikaPrice(dlina,visota);
        getLuversPrice(dlina,visota);
        getTotalPrice();
        render(dlina,visota);    
    }
            
        function getBannerPrice(dlina,visota) {  
        let p_price = (dlina*visota)*pricesListArray.banner;
        p_price = p_price.toFixed();   
    if (p_price<500){
        p_price = 500;
        document.getElementById("printPrice").value = p_price +(" рублей");
        totalPriceArray.bannerPrice=p_price;
    } else{
        document.getElementById("printPrice").value = p_price +(" рублей"); 
        totalPriceArray.bannerPrice=p_price;
    } 
            
    } 
     
        function getProkleikaPrice(dlina,visota) {
        let prokleikaPrice = ((dlina+visota)*2)*pricesListArray.prokleika;
        prokleikaPrice = prokleikaPrice.toFixed();
        totalPriceArray.prokleikaPrice=prokleikaPrice;    
        document.getElementById("prokleikaOut").value = prokleikaPrice + (" рублей");
    }
     
        function getLuversPrice(dlina,visota) {
        let priceLuvers = ((dlina+visota)*2)/0.3;
        priceLuvers = priceLuvers * pricesListArray.luvers;
        priceLuvers = priceLuvers.toFixed();
        totalPriceArray.priceLuvers=priceLuvers;    
        document.getElementById("luversOut").value = priceLuvers + (" рублей");  
    }
     
        function getTotalPrice() {
            let totalPrice = Number (totalPriceArray.bannerPrice) + Number (totalPriceArray.prokleikaPrice) + Number(totalPriceArray.priceLuvers);
            document.getElementById("priceTotalOut").value = totalPrice + (" рублей");
    }   
         
             
        function render(dlina,visota){
       if (dlina>visota){
          document.getElementById("banner_box_kvadrat").style.display = 'none';
          document.getElementById("banner_box_vertical").style.display = 'none';
          document.getElementById("banner_box").style.display = 'block';
          document.getElementById("box_visota").innerHTML = visota;
          document.getElementById("box_dlina").innerHTML = dlina;
       }else if(dlina==visota){
          document.getElementById("banner_box_kvadrat").style.display = 'block';
          document.getElementById("banner_box").style.display = 'none';
          document.getElementById("banner_box_vertical").style.display = 'none';
          document.getElementById("box_visota_kvadrat").innerHTML = visota;
          document.getElementById("box_dlina_kvadrat").innerHTML = dlina;
       }else{
          document.getElementById("banner_box_kvadrat").style.display = 'none';
          document.getElementById("banner_box").style.display = 'none';
          document.getElementById("banner_box_vertical").style.display = 'block';
          document.getElementById("box_visota_vertical").innerHTML = visota;
          document.getElementById("box_dlina_vertical").innerHTML = dlina;
       }   
      }
     
        function drop(){
              document.getElementById("drop_list").style.display = 'block';
          }
            function DropOut(){
              document.getElementById("drop_list").style.display = 'none';
          }      