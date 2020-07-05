# Amiibo-Hub

_**AmiiboHub** Search for release dates, images and other info on your favorite Nintendo characters. Amiibo's are not only collectible figurines but they are also highly functional, having the ability to unlock features that enhance your gameplay._
<br>

### Wireframes

[https://imgur.com/AdOQTNA](url)

- Homepage

[https://imgur.com/1n8QqVg](url)

- Amiibo Page

[https://imgur.com/8gpSLN9](url)

- Amiibo Hub Mobile

[https://imgur.com/drFQ1zF](url)

- Sample Data from console

<br>

### MVP

_**AmiiboHub** Will allow users to search and retrieve data on their favorite Nintendo characters. They'll have the ability to search by character or search by game series._

<br>

#### MVP Goals

- _Search for Amiibo via character name._
- _Search for Amiibo via game series._
- _Access to images and other links for more info._

<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| AmiiboAPI |      yes      | _https://www.amiiboapi.com/docs/_ | _https://www.amiiboapi.com/api/amiibo/?name=mario_ |

Sample Query Results:

```json
{
	"amiibo": [
		{
			"amiiboSeries": "Super Smash Bros.",
			"character": "Mario",
			"gameSeries": "Super Mario",
			"head": "00000000",
			"image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
			"name": "Mario",
			"release": {
				"au": "2014-11-29",
				"eu": "2014-11-28",
				"jp": "2014-12-06",
				"na": "2014-11-21"
			},
			"tail": "00000002",
			"type": "Figure"
		},
		{
			"amiiboSeries": "Super Mario Bros.",
			"character": "Mario",
			"gameSeries": "Super Mario",
			"head": "00000000",
			"image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
			"name": "Mario",
			"release": {
				"au": "2015-03-21",
				"eu": "2015-03-20",
				"jp": "2015-03-12",
				"na": "2015-03-20"
			},
			"tail": "00340102",
			"type": "Figure"
		}
	]
}
```

<br>

#### MVP Libraries & Dependencies

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Access to components to display features._ |
| React Router | _Smooth transitions to Amiibo info pages._ |

<br>

#### MVP Components

```
src
|__ Img/
      |__ mario.jpg
|__ Components/
      |__ AmiiboData.jsx
      |__ Explore.jsx
      |__ GetAmiibo.jsx
      |__ Movie.jsx
      |__ Navbar.jsx
      |__ Tunes.jsx
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|     AmiiboData      |   class    |   n   |   y   |   n   | _Subcomponent that holds results from GetAmiibo._ |
|     Explore      |   functional    |   n   |   n   |   n   | _Links to Nintendo's full aray of games and characters for more exploration._ |
|    GetAmiibo    | class |   y   |   n   |   n   | _API call and distribution of data._ |
|    Movie    |   functional    |   n   |   n   |   n   | _Holds embedded YouTube Aiibo trailer._ |
|   Navbar   | functional |   n   |   n   |   n   | _Important links._ |
|    Tunes    | functional |   n   |   n   |   n   | _Holds embedded Spotify._ |

<br>

#### MVP Timeframes

| Task             | Priority | Estimated Time  | Time Invested | Actual Time |
| ---------------- | :------: | :------------:  | :-----------: | :---------: |
| App              |    H     |     24 hrs      |     48 hrs     |     48     |
| Nav & Footer     |    L     |     3 hrs       |     1 hrs     |     1     |
| API           |    H     |     24 hrs      |     12 hrs     |     12     |
| CSS              |    H     |     12 hrs      |     10 hrs     |     10     |
| TOTAL            |          |     63 hrs      |     71 hrs     |     71 hrs     |

<br>

### Post-MVP

- _Gallery of nintendo characters._
- _Information on funtionality of Amiibo's._

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

_**Use of a Subcomponent** I set up a subcomponent where my API was being called. I wanted to be able to send the data to another component so that it would be eaiser for me to manipulate the container of that data._

```
<div className="amiibo-data">
          <div>
            <AmiiboData
              name= {this.state.name}
              aSeries= {this.state.amiiboSeries}
              gSeries= {this.state.gameSeries}
              releaseDate= {this.state.release}
              charImage={this.state.image}
            />
          </div>
        </div>
      </div>
```

### Code Issues & Resolutions

_**Issues and Resolutions** Most of my issues had to di with styling. Flex box continues to feel very tricky and I feel that better planning or wireframing is necessaary prior to laying down code. Google remains to be the undisputed champion of assitance when the going gets tough._