# Bus-Tracker
In this project, I utilize two APIs to create a bus tracker. First, I used Mapbox to get a map of Boston, Massachusetts, and this api is also used to create marks that represent buses. To get the buses' live location, we need the help of the second api in this project, which is the Massachusetts Bay Transportation Authority (MTBA) V3 api.

Using JavaScript and the Hypertext Transfer Protocol, we send an HTTP request to the MTBA V3 API and retrieve data and formatting in JSON format. In this data we get the live location of the bus that runs through the MIT campus. After capturing and parsing the data, we create markers for each bus and add them to the map using the mapbox api.

The result of this can be seen below.
<img src="BusTracker.png"> <img>


# Road Map
With this project, I envision creating a GUI that allows the user to select the bus they wish to track. This introduces new challenges in tracking the user's location. This is for a quality of life improvement, which will position the starting position of the map. Which is another aspect of this project I'll have to come up with a solution for. My initial ideas are to utilize Google Location Service built into Google Chrome. I have plans to explore the use of the Google Map API instead of the Mapbox. Speaking of API's, I would also like to swap MTBA v3 APi for NYC's MTA Bus Time API.
