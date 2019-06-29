    $(document).ready(function(){
      
      $("#getWeatherForcast").click(function(){
                
                var city = $("#city").val();
            var key  = '4de3768c62b67fe359758977a3efc069';
            
            $.ajax({
              url:'http://api.openweathermap.org/data/2.5/weather',
              dataType:'json',
              type:'GET',
              data:{q:city, appid: key, units: 'metric'},

              success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val){

                  wf += '<p><b>' + data.name + "</b><img src="+ val.icon + ".png></p>"+ data.main.temp + '&deg;C ' + 
                  ' | ' + val.main + ", " + val.description 

                });
              
               $(".ShowWeatherForcast").html(wf);
              }

            })

      });
    });