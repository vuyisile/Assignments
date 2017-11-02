 function getWeather() {
            var long;
            var lati;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    long = position.coords.longitude;
                    lati = position.coords.latitude;

                    $(document).ready(function () {
                        console.log("ready!");
                        $.ajax({
                            type: "GET",
                            url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lati + "&lon=" + long,
                          
                            success: function (data) {

                                var infor = data;
                                var temp = infor.main.temp;
                                var maxTemp = infor.main.temp_max;
                                var minTemp = infor.main.temp_min;
                                var description=infor.weather[0].description;
                                
function convertToFahrenheit(temp,minTemp,maxTemp) {
                                        var tempF = (temp * 9 / 5 + 32);
  var maxTempF= (maxTemp * 9 / 5 + 32);
  var minTempF= (minTemp * 9 / 5 + 32);
                                        return `Temp : ${tempF}°F <br> Min-Temp :  ${minTempF}°F <br> Max-Temp :  ${maxTempF}°F`;
                                    }

                                    $("#tempF").on("click", function () {
                     var temp =Math.floor(infor.main.temp);
                                var maxTemp = infor.main.temp_max;
                                var minTemp = infor.main.temp_min;                   $("#Fahr").html(convertToFahrenheit(temp,minTemp,maxTemp));
                                    });
           
                              $("#data").html("Location/City: " + infor.name + "<br>" + "<br>Pressure: " + infor.main.pressure + "<br>" + "<br>Humidity: " + infor.main.humidity + "%" + "<br>" + "<br>Wind speeds: " + infor.wind.speed + "Knots" + "<br>" + "<br>Temperature: " + temp + "°C" + "<br>" + "<br>Temp Max: " + maxTemp + "°C" + "<br>" + "<br>Temp Min: " + minTemp + "°C");
                            
  
                               $("#icon").html("Description: " + description + "<br>"+"<img src='" + infor.weather[0].icon + "'" + "' alt='weather icon' style='width:225px;height:200px;'>");

                                console.log("success");
                     
                              console.log(infor);
                            },
                            error: function (error) {
                                alert("server was not found");
                            },
                            dataType: "jsonp"
                          
                        });

                    });
                })
            }

        }