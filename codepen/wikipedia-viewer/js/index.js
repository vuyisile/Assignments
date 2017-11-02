 function getRequestedInput() {
            var input = document.getElementById("input").value;
            $(document).ready(function () {
                $.ajax({
                    type: "GET",
                    url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search= " + input,
                    success: function (data) {
                        console.log(data)
                        $("#requested").html(`
                <h1 class="col-md-12">What you looking for:</h1>
            <center><h4>${data[1][0]}</h4></center> <br> ${data[2][0]} <br> For more infomation: ${data[3][0]}<br>`)
                        $("#rel-head").html(`<h1>Related topics:</h1>`);
                        $("#related").html(function () {
                            var i = 1;
                            var related = "";
                            while (i < data[1].length) {
                                related += `<h5>${data[1][i]}:</h5> ${data[2][i]} <br> `;
                                i++;
                            }
                            return related;
                        })

                    },
                    dataType: "jsonp"
                })
            })

        };