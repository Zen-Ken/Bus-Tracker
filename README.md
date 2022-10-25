# Bus-Tracker
In this project I utilize two API to create a bus tracker. First I use mapbox to get a map of Boston, Massachusetts and this api is also used to create marks that represent buses.  To get the buses live location we need the help of the second api in this project, which is Massachusetts Bay Transportation Authority (MTBA) V3 api.

Using JavaScript and the Hypertext Transfer Protocol we send a HTTP request to the MTBA V3 API and to retrieve data and formatting to JSON format. In this data we get the live location of the bus that run through the MIT campus.  After capturing and parse the data we create markers for each bus and add them to the map using the mapbox api.

This result of this be seen below.
<img src="BusTracker.png"> <img>


# Road Map
