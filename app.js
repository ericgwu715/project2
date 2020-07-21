// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = 600;

  var margin = {
    top: 50,
    bottom: 50,
    right: 150,
    left: 75
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // Append SVG element
  var svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

  // Append group element
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv("manipulated_data.csv").then(function(data) {

      // create date parser
      var dateParser = d3.timeParse("%Y");

      // parse data
      data.forEach(function(d) {
        d.date = dateParser(d.date);
        d.avgtempUSA = +d.avgtempUSA;
        d.avgtempGermany = +d.avgtempGermany;
        d.avgtempGreenland = +d.avgtempSweden;
        d.avgtempVenezuela = +d.avgtempVenezuela;
        d.avgtempDemoCongo = +d.avgtempDemoCongo;
        d.avgtempIndonesia = +d.avgtempIndonesia;
        d.avgtempArgentina = +d.avgtempArgentina;
        d.avgtempNewZealand = +d.avgtempNewZealand;
        d.avgtempSouthAfrica = +d.avgtempSouthAfrica;
        d.avgtempGlobal = +d.avgtempGlobal;
      });

      // create scales
      var xTimeScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0, width]);

      var yLinearScale = d3.scaleLinear()
        .domain([-1,27.5])
        .range([height, 0]);

      // create axes
      var xAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%Y"));
      var yAxis = d3.axisLeft(yLinearScale).ticks(6);

      // append axes
      chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      chartGroup.append("g")
        .call(yAxis);

      //1st line
      var valueline = d3.line()
        .defined(function(d) { return d.avgtempUSA != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempUSA));

      //2nd line
      var valueline2 = d3.line()
        .defined(function(d) { return d.avgtempGermany != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempGermany));

      //3
      var valueline3 = d3.line()
        .defined(function(d) { return d.avgtempVenezuela != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempVenezuela));

      //4
      var valueline4 = d3.line()
        .defined(function(d) { return d.avgtempDemoCongo != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempDemoCongo));

      //5
      var valueline5 = d3.line()
        .defined(function(d) { return d.avgtempIndonesia != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempIndonesia));

      //6
      var valueline6 = d3.line()
        .defined(function(d) { return d.avgtempArgentina != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempArgentina));

      //7
      var valueline7 = d3.line()
        .defined(function(d) { return d.avgtempNewZealand != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempNewZealand));

      //8
      var valueline8 = d3.line()
        .defined(function(d) { return d.avgtempSouthAfrica != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempSouthAfrica));

      //9
      var valueline9 = d3.line()
        .defined(function(d) { return d.avgtempGlobal != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempGlobal));

      //10
      var valueline10 = d3.line()
        .defined(function(d) { return d.avgtempSweden != 0; })
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.avgtempSweden));

      // append line
      chartGroup.append("path")
        .data([data])
        .attr("d", valueline)
        .attr("fill", "none")
        .attr("stroke", "#0FFF00")
        .attr("stroke-width", "2.5");

        //Add valueline2
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#80FF77")
        .attr("d", valueline2)
        .attr("stroke-width", "2.5");

        //3
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#001FFF")
        .attr("d", valueline3)
        .attr("stroke-width", "2.5");

        //4
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#6E7FFF")
        .attr("d", valueline4)
        .attr("stroke-width", "2.5");

        //5
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#0014A8")
        .attr("d", valueline5)
        .attr("stroke-width", "2.5");

        //6
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#FE2D00")
        .attr("d", valueline6)
        .attr("stroke-width", "2.5");

        //7
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#FF8C73")
        .attr("d", valueline7)
        .attr("stroke-width", "2.5");

        //8
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#AF1F00")
        .attr("d", valueline8)
        .attr("stroke-width", "2.5");

        //9
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#F10BE4")
        .attr("d", valueline9)
        .attr("stroke-width", "2.5");

        //10
      chartGroup.append("path")
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "#0AAB00")
        .attr("d", valueline10)
        .attr("stroke-width", "2.5");



      //gridlines x axis function
      function make_x_gridlines() {		
        return d3.axisBottom(xTimeScale)
          .ticks(5)
      }  

      //gridlines y axis function
      function make_y_gridlines() {		
        return d3.axisLeft(yLinearScale)
          .ticks(5)
      }

      //Y gridlines
      chartGroup.append("g")			
        .attr("class", "grid")
        .style("stroke-dasharray", ("3, 3"))
        .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
        )

      chartGroup.append("g")			
        .attr("class", "grid")
        .style("stroke-dasharray", ("3, 3"))
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")
        )

      //Y label
      chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -50)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Temperature (˚C)"); 

      chartGroup.append("text")
        .text("Average Temperature")
        .attr("y", -10)
        .attr("x", 325)

      // append circles
      var circlesGroup = chartGroup.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xTimeScale(d.date))
        .attr("cy", d => yLinearScale(d.avgtempGlobal))
        .attr("r", "5")
        .attr("fill", "#F10BE4")
        .attr("stroke-width", "2")
        .attr("stroke", "black");

      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",10).attr("r",6).style("fill","#0FFF00")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 10).text("United States").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",30).attr("r",6).style("fill","#80FF77")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 30).text("Germany").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",50).attr("r",6).style("fill","#0AAB00")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 50).text("Sweden").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",70).attr("r",6).style("fill","#001FFF")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 70).text("Venezuela").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",90).attr("r",6).style("fill","#6E7FFF")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 90).text("Dem Congo").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",110).attr("r",6).style("fill","#0014A8")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 110).text("Indonesia").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",130).attr("r",6).style("fill","#FE2D00")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 130).text("Argentina").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",150).attr("r",6).style("fill","#FF8C73")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 150).text("New Zealand").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",170).attr("r",6).style("fill","#AF1F00")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 170).text("South Africa").style("font-size", "13px").attr("alignment-baseline","middle")
      
      chartGroup.append("circle").attr("cx", (width + 20)).attr("cy",190).attr("r",6).style("fill","#F10BE4")
      chartGroup.append("text").attr("x", (width + 30)).attr("y", 190).text("Global").style("font-size", "13px").attr("alignment-baseline","middle")

      
      // Date formatter to display dates nicely
      var dateFormatter = d3.timeFormat("%Y");

      // Step 1: Initialize Tooltip
      var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([90, 0])
        .html(function(d) {
          return (`<strong>${dateFormatter(d.date)}<strong>
          </br>--------------------------------</br>
          Global Temp: ${d.avgtempGlobal.toFixed(2)}˚C</br>
          5-yr Change: ${Math.round(d.five_yr_change_Global * 100)/100}˚C`);
        });

      // Step 2: Create the tooltip in chartGroup.
      chartGroup.call(toolTip);

      // Step 3: Create "mouseover" event listener to display tooltip
      circlesGroup.on("mouseover", function(d) {
        toolTip.show(d, this);
      })
      // Step 4: Create "mouseout" event listener to hide tooltip
        .on("mouseout", function(d) {
          toolTip.hide(d);
        });
    }).catch(function(error) {
      console.log(error);
    });



}


// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);







//legend and box and should be done
