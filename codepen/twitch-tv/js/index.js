 $(document).ready(function () {
            var names = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","quin69"];
            names.forEach(function (element) {
                var url = 'https://wind-bow.glitch.me/twitch-api/streams/' + element + '?callback=?'
                $.ajax({
                    type: 'GET',
                    url: url,
                    success: function (data) {
                        element;
                        if (data.stream === null) {
                            $("#streamers").append(`<h4>twitch.tv user: <a target ='_blank' href=https://go.twitch.tv/${element}> ${element}</a></h4> <br> Status: Offline`)
                        } else {
                            $("#streamers").append(`<h4>twitch.tv user: <a target ='_blank' href=https://go.twitch.tv/${element}>${element}</a><h4> <br> Status: Online <br> <p>Currently Streaming: ${data.stream.game} <br> Viewers:${data.stream.viewers}</p>`)
                        }

                    }, dataType: "jsonp"
                })
            })


        });


        function getRequest() {
            var typeUser = document.getElementById("input").value;
            $.ajax({
                type: 'GET',
                url: 'https://wind-bow.glitch.me/twitch-api/streams/' + typeUser + '?callback=?',
                success: function (data) {
                    if (data.stream === null) {
                        $("#req").html(`<h4>twitch.tv user: <a target =' _blank' href=https://go.twitch.tv/${typeUser}> ${typeUser}</a></h4> Status: Offline`)
                    } else {
                        $("#req").html(`<h4>twitch.tv user: <a href=https://go.twitch.tv/${typeUser}>${typeUser}</a></h4> Status: Online <br> <p>Currently Streaming: ${data.stream.game} <br> Viewers:${data.stream.viewers}</p>`)
                    }

                    console.log(data);
                }, dataType: "jsonp"
            })
        };