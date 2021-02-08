[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ndkv9/conversation-stats">
    <img src="https://i.imgur.com/rDYzhFy.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Conversation Stats</h3>

  <p align="center">
   Simple Conversation Stats App that can retrieve conversation data base on user's input dates.
    <br />
    <a href="https://github.com/ndkv9/conversation-stats"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://conversation-stats.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/ndkv9/conversation-stats/issues">Report Bug</a>
    ·
    <a href="https://github.com/ndkv9/conversation-stats/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://i.imgur.com/uITm6B5.png)

### Built With

- [React]()
- [HTML]()
- [CSS]()
- [JavaScript]()
- [Material UI]()

<!-- GETTING STARTED -->

### Installation

1. Clone the repo

```sh
git clone https://github.com/ndkv9/conversation-stats
```

1. Install NPM packages

```sh
npm install
yarn
```

3. Implement application on local server

```sh
npm start
yarn start
```

<!-- USAGE EXAMPLES -->

## Usage

+ Fill in start date and end date that you want to retrieve the chat data and the access token.
+ Press the 'SEARCH' button to get the result.

+ After receiving response from API the app will render to UI:
- First big box is value from field total_conversation_count.
- Middle big box is value from field total_user_message_count.
- Right most big box is value from field total_visitor_message_count.
- Table on the bottom part of the page shows daily numbers from response which can be found from by_date array in response.
- Table will show maximum of 5 items at time. If there are more daily results they will be paginated.

+ Stores start date, end date and token in localStorage so they are already populated if user comes back to app later time.
+ The app will display a status line to help user tracking its state. (Like date range to take data or when user fills in wrong format of data)
<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/ndkv9/conversation-stats/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

**vu.nguyen101@gmail.com**

Project Link: [Conversation Stats](https://conversation-stats.netlify.app/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/ndkv9/conversation-stats.svg?style=flat-square
[license-url]: https://github.com/ndkv9/conversation-stats/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ndkv9
[product-screenshot]: https://i.imgur.com/uITm6B5.png
