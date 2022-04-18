am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart3D);

    // Add data
    chart.data = [{
        "parn": "Tiếp nhận",
        "visits": 11,
    }, {
        "parn": "chờ trả lời",
        "visits": 349,
    }, {
        "parn": "Đã trả lời",
        "visits": 92,
    }];

    chart.colors.list = [
        am4core.color("#F82D2D"),
        am4core.color("#E9CB28"),
        am4core.color("#1ADC88"),
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "parn";

    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Số parn";
    valueAxis.title.fontWeight = "bold";

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "parn";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    })

    columnTemplate.adapter.add("stroke", function(stroke, target) {
        return chart.colors.getIndex(target.dataItem.index);
    })

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;

    var title = chart.titles.create();
    title.text = "Thống kê PARN theo tuần 38";
    title.fontSize = 16;

    title.fontWeight = 700;
    title.marginBottom = 30;



    // Add cursor

    $('.close-dropdown').on('click', function (e){
        $('.noti-btn').toggleClass('close');
    })
}); // end am4core.ready()