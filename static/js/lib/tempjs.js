/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    
    var data = [];
    var data1 = [];
    var dataBT = [];
    var dataBH = [];
    var dataCT = [];
    var dataCH = [];
    var dates = $.parseJSON($(".hidden_date").val());
    var heartRate = $.parseJSON($(".hidden_heartRate").val());
    var refHeartRate = $.parseJSON($(".hidden_refHeartRate").val());
    var BackTemp = $.parseJSON($(".hidden_BackTemp").val());
    var BackHum = $.parseJSON($(".hidden_BackHum").val());
    var CushionTemp = $.parseJSON($(".hidden_CushionTemp").val());
    var CushionHum = $.parseJSON($(".hidden_CushionHum").val());
    
    $.each(dates, function (i, date) {
        if (parseInt(heartRate[i])) {
            data.push([dates[i], parseInt(heartRate[i])]);
            //cal = cal + 1;
        }
    });
    $.each(dates, function (i, date) {
        if (parseInt(refHeartRate[i])) {
            data1.push([dates[i], parseInt(refHeartRate[i])]);
        }
    });
    $.each(dates, function (i, date) {
        if (parseInt(BackTemp[i])) {
            dataBT.push([dates[i], parseInt(BackTemp[i])]);
            //cal = cal + 1;
        }
    });
    $.each(dates, function (i, date) {
        if (parseInt(BackHum[i])) {
            dataBH.push([dates[i], parseInt(BackHum[i])]);
        }
    });
    $.each(dates, function (i, date) {
        if (parseInt(CushionTemp[i])) {
            dataCT.push([dates[i], parseInt(CushionTemp[i])]);
            //cal = cal + 1;
        }
    });
    $.each(dates, function (i, date) {
        if (parseInt(CushionHum[i])) {
            dataCH.push([dates[i], parseInt(CushionHum[i])]);
        }
    });
    
    $('#jqChart').jqChart({

        legend: {visible: false},
        border: {visible: false},
        globalAlpha: 0.60,
        axes: [
            {
                majorGridLines: {
                    lineWidth: 0,
                },
                minorGridLines: {
                    lineWidth: 0,
                },
                location: 'left',
                lineWidth: 0,
                labels: {
                    visible: false,
                },
                majorTickMarks: {
                    lineWidth: 0,
                },
                minorTickMarks: {
                    lineWidth: 0,
                }
            },
            {
                location: 'bottom',
                lineWidth: 0,
                labels: {
                    visible: false,
                },
                majorTickMarks: {
                    lineWidth: 0,
                },
                minorTickMarks: {
                    lineWidth: 0,
                }
            }
        ],
        series: [
            {
                type: 'spline',
                title: 'Temperature',
                strokeStyle: '#cf6e18',
                lineWidth: 2,
                data: data,
                //strokeDashArray: [10, 10],
                labels: {
                    visible: false,
                },
                
                markers: {
                    size: 1,
                    type: 'rectangle',
                    strokeStyle: '#cf6e18', //c0f9f9
                    fillStyle: '#cf6e18',
                    lineWidth: 1
               }  
            },
            {
                type: 'spline',
                title: 'Humidity',
                strokeStyle: '#48abad', //cc8241 #48abad
                lineWidth: 2,
                data: data1,
                strokeDashArray: [10, 10],
                labels: {
                    visible: false,
                },
                
                markers: {
                    size: 1,
                    type: 'rectangle',
                    strokeStyle: '#48abad',
                    fillStyle: '#48abad',
                    lineWidth: 1
               }  
            }
        ]
    });
    $('#jqChart1').jqChart({

        legend: {visible: false},
        border: {visible: false},
        globalAlpha: 0.60,
        axes: [
            {
                majorGridLines: {
                    lineWidth: 0,
                },
                minorGridLines: {
                    lineWidth: 0,
                },
                location: 'left',
                lineWidth: 0,
                labels: {
                    visible: false,
                },
                majorTickMarks: {
                    lineWidth: 0,
                },
                minorTickMarks: {
                    lineWidth: 0,
                }
            },
            {
                location: 'bottom',
                lineWidth: 0,
                labels: {
                    visible: false,
                },
                majorTickMarks: {
                    lineWidth: 0,
                },
                minorTickMarks: {
                    lineWidth: 0,
                }
            }
        ],
        series: [
            {
                type: 'spline',
                title: 'Temperature',
                strokeStyle: '#cf6e18',
                lineWidth: 2,
                data: dataBT,
                //strokeDashArray: [10, 10],
                labels: {
                    visible: false,
                },
                
                markers: {
                    size: 1,
                    type: 'rectangle',
                    strokeStyle: '#cf6e18', //c0f9f9
                    fillStyle: '#cf6e18',
                    lineWidth: 1
               }  
            },
            {
                type: 'spline',
                title: 'Humidity',
                strokeStyle: '#48abad', //cc8241 #48abad
                lineWidth: 2,
                data: dataBH,
                strokeDashArray: [10, 10],
                labels: {
                    visible: false,
                },
                
                markers: {
                    size: 1,
                    type: 'rectangle',
                    strokeStyle: '#48abad',
                    fillStyle: '#48abad',
                    lineWidth: 1
               }  
            }
        ]
    });
    $('#jqChart2').jqChart({

        legend: {visible: false},
        border: {visible: false},
        globalAlpha: 0.60,
        axes: [
            {
                majorGridLines: {
                    lineWidth: 0,
                },
                minorGridLines: {
                    lineWidth: 0,
                },
                location: 'left',
                lineWidth: 0,
                labels: {
                    visible: false,
                },
                majorTickMarks: {
                    lineWidth: 0,
                },
                minorTickMarks: {
                    lineWidth: 0,
                }
            },
            {
                location: 'bottom',
                lineWidth: 0,
                labels: {
                    visible: false,
                },
                majorTickMarks: {
                    lineWidth: 0,
                },
                minorTickMarks: {
                    lineWidth: 0,
                }
            }
        ],
        series: [
            {
                type: 'spline',
                title: 'Temperature',
                strokeStyle: '#cf6e18',
                lineWidth: 2,
                data: dataCT,
                //strokeDashArray: [10, 10],
                labels: {
                    visible: false,
                },
                
                markers: {
                    size: 1,
                    type: 'rectangle',
                    strokeStyle: '#cf6e18', //c0f9f9
                    fillStyle: '#cf6e18',
                    lineWidth: 1
               }  
            },
            {
                type: 'spline',
                title: 'Humidity',
                strokeStyle: '#48abad', //cc8241 #48abad
                lineWidth: 2,
                data: dataCH,
                strokeDashArray: [10, 10],
                labels: {
                    visible: false,
                },
                
                markers: {
                    size: 1,
                    type: 'rectangle',
                    strokeStyle: '#48abad',
                    fillStyle: '#48abad',
                    lineWidth: 1
               }  
            }
        ]
    });
    
    setInterval(function () {
        //var data = [];
        //var data1 = [];
        $.ajax({
            url: "./temphum.php",
            type: 'GET',
            data: {"is_ajax": true},
            dataType: 'json',
            async: false,
            success: function (result) {
                //alert(result.fields[15]);
                $("#AWValue").find("p:eq(0)").html(parseInt(result.fields[1]));
                $("#RefValue").find("p:eq(0)").html(parseInt(result.fields[2]));
                $("#Corr5Bpm").find("p:eq(0)").html(parseInt(result.fields[3])+" %");
                $("#Corr10Bpm").find("p:eq(0)").html(parseInt(result.fields[4])+" %");
                $("#AWRRValue").find("p:eq(0)").html(parseInt(result.fields[5]));
                $("#RFRRValue").find("p:eq(0)").html(parseInt(result.fields[6]));
                $("#Corr3Bpm").find("p:eq(0)").html(parseInt(result.fields[7])+" %");
                $("#Corr7Bpm").find("p:eq(0)").html(parseInt(result.fields[8])+" %");
                $("#AWHRVValue").find("p:eq(0)").html(parseInt(result.fields[9]));
                $("#RFHRVValue").find("p:eq(0)").html(parseInt(result.fields[10]));
                $("#Corr50ms").find("p:eq(0)").html(parseInt(result.fields[11])+" %");
                $("#Corr100ms").find("p:eq(0)").html(parseInt(result.fields[12])+" %");
                $("#SD1Value").find("p:eq(0)").html(parseInt(result.fields[13]));
                $("#SD2Value").find("p:eq(0)").html(parseInt(result.fields[14]));
                $("#ESValue").find("p:eq(0)").html(parseInt(result.fields[19]));
                $("#ERValue").find("p:eq(0)").html(parseInt(result.fields[20]));
                $("#ELValue").find("p:eq(0)").html(parseInt(result.fields[21]));
                $("#AmbTemp").find("p:eq(0)").html(parseInt(result.fields[22]));
                $("#AmbHum").find("p:eq(0)").html(parseInt(result.fields[23]));
                $("#BackTemp").find("p:eq(0)").html(parseInt(result.fields[24]));
                $("#BackHum").find("p:eq(0)").html(parseInt(result.fields[25]));
                $("#CushTemp").find("p:eq(0)").html(parseInt(result.fields[26]));
                $("#CushHum").find("p:eq(0)").html(parseInt(result.fields[27]));
                
                /*var elimated = data.shift();
                var elimated1 = data1.shift();
                var elimated = dataBT.shift();
                var elimated1 = dataBH.shift();
                var elimated = dataCT.shift();
                var elimated1 = dataCH.shift();*/
                data.push([result.fields[0], parseInt(result.fields[22])]);
                data1.push([result.fields[0], parseInt(result.fields[23])]);
                dataBT.push([result.fields[0], parseInt(result.fields[24])]);
                dataBH.push([result.fields[0], parseInt(result.fields[25])]);
                dataCT.push([result.fields[0], parseInt(result.fields[26])]);
                dataCH.push([result.fields[0], parseInt(result.fields[27])]);
                
                
                $('#jqChart').jqChart({

                    legend: {visible: false},
                    border: {visible: false},
                    globalAlpha: 0.60,
                    axes: [
                    {
                        majorGridLines: {lineWidth: 0.20,
                            strokeStyle: '#cf6e18',
                        },
                        minorGridLines: {lineWidth: 0,},
                        location: 'left',
                        lineWidth: 0,
                        labels: {visible: true,
                        strokeStyle: '#48abad',},
                        majorTickMarks: {lineWidth: 0,},
                        minorTickMarks: {lineWidth: 0,}
                    },
                    {
                    location: 'bottom',
                    lineWidth: 0,
                    labels: { visible: false,},
                    majorTickMarks: {lineWidth: 0,},
                    minorTickMarks: {lineWidth: 0,}
                    }
                        ],
                    series: [
                    {
                        type: 'spline',
                        title: 'Temperature',
                        strokeStyle: '#cf6e18',
                        lineWidth: 2,
                        data: data,
                        //strokeDashArray: [10, 10],#48abad
                        labels: {visible: false,},
                        markers: {
                           size: 1,
                           type: 'rectangle',
                           strokeStyle: '#cf6e18',
                           fillStyle: '#cf6e18',
                           lineWidth: 1
                            }  
                    },
                    {
                        type: 'spline',
                        title: 'Humidity',
                        strokeStyle: '#48abad',
                        lineWidth: 2,
                        data: data1,
                        //strokeDashArray: [10, 10],
                        labels: {visible: false,},
                        markers: {
                            size: 1,
                            type: 'rectangle',
                            strokeStyle: '#48abad',
                            fillStyle: '#48abad',
                            lineWidth: 1
                        }  
                    }
                            ]
                                    });
                
                $('#jqChart1').jqChart({

                    legend: {visible: false},
                    border: {visible: false},
                    globalAlpha: 0.60,
                    axes: [
                    {
                        majorGridLines: {lineWidth: 0.20,
                            strokeStyle: '#cf6e18',
                        },
                        minorGridLines: {lineWidth: 0,},
                        location: 'left',
                        lineWidth: 0,
                        labels: {visible: true,
                        strokeStyle: '#48abad',},
                        majorTickMarks: {lineWidth: 0,},
                        minorTickMarks: {lineWidth: 0,}
                    },
                    {
                    location: 'bottom',
                    lineWidth: 0,
                    labels: { visible: false,},
                    majorTickMarks: {lineWidth: 0,},
                    minorTickMarks: {lineWidth: 0,}
                    }
                        ],
                    series: [
                    {
                        type: 'spline',
                        title: 'Temperature',
                        strokeStyle: '#cf6e18',
                        lineWidth: 2,
                        data: dataBT,
                        //strokeDashArray: [10, 10],#48abad
                        labels: {visible: false,},
                        markers: {
                           size: 1,
                           type: 'rectangle',
                           strokeStyle: '#cf6e18',
                           fillStyle: '#cf6e18',
                           lineWidth: 1
                            }  
                    },
                    {
                        type: 'spline',
                        title: 'Humidity',
                        strokeStyle: '#48abad',
                        lineWidth: 2,
                        data: dataBH,
                        //strokeDashArray: [10, 10],
                        labels: {visible: false,},
                        markers: {
                            size: 1,
                            type: 'rectangle',
                            strokeStyle: '#48abad',
                            fillStyle: '#48abad',
                            lineWidth: 1
                        }  
                    }
                            ]
                                    });
                
                $('#jqChart2').jqChart({

                    legend: {visible: false},
                    border: {visible: false},
                    globalAlpha: 0.60,
                    axes: [
                    {
                        majorGridLines: {lineWidth: 0.20,
                            strokeStyle: '#cf6e18',
                        },
                        minorGridLines: {lineWidth: 0,},
                        location: 'left',
                        lineWidth: 0,
                        labels: {visible: true,
                        strokeStyle: '#48abad',},
                        majorTickMarks: {lineWidth: 0,},
                        minorTickMarks: {lineWidth: 0,}
                    },
                    {
                    location: 'bottom',
                    lineWidth: 0,
                    labels: { visible: false,},
                    majorTickMarks: {lineWidth: 0,},
                    minorTickMarks: {lineWidth: 0,}
                    }
                        ],
                    series: [
                    {
                        type: 'spline',
                        title: 'Temperature',
                        strokeStyle: '#cf6e18',
                        lineWidth: 2,
                        data: dataCT,
                        //strokeDashArray: [10, 10],#48abad
                        labels: {visible: false,},
                        markers: {
                           size: 1,
                           type: 'rectangle',
                           strokeStyle: '#cf6e18',
                           fillStyle: '#cf6e18',
                           lineWidth: 1
                            }  
                    },
                    {
                        type: 'spline',
                        title: 'Humidity',
                        strokeStyle: '#48abad',
                        lineWidth: 2,
                        data: dataCH,
                        //strokeDashArray: [10, 10],
                        labels: {visible: false,},
                        markers: {
                            size: 1,
                            type: 'rectangle',
                            strokeStyle: '#48abad',
                            fillStyle: '#48abad',
                            lineWidth: 1
                        }  
                    }
                            ]
                                    });
                                    
                },
            error: function(ts) {
                alert(ts.responseText);
            }
        });//ajax
                            },1000); 
});

