![](https://img.shields.io/badge/fmanimashaun-green)
<a name="readme-top"></a>

<div align="center">
  <img src="src/assets/images/logo.png" alt="logo" width="140"  height="auto" />
  <br/>
</div>


# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

# 📖 CryptoRank App <a name="about-project"></a>

**Cryptorank App** is a web app that lists all cryptocurrency exchanges and their respective ranking in the global cryptocurrency market. Users can click on an exchange to view more detailed information about it, including its trading volume, fees, supported cryptocurrencies, and user reviews.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [Sass](https://sass-lang.com/)
- [Redux Logger](https://github.com/LogRocket/redux-logger)

### Key Features <a name="key-features"></a>

- [x] View a list of all cryptocurrency exchanges with their respective rankings in the global cryptocurrency market.
- [x] Click on an exchange to view more detailed information about it.
- [x] The app enables users to search for specific cryptocurrency exchanges easily.
- [x] View real-time exchange data using the app's integration with the CoinGecko API.
- [x] User-friendly interface and responsive design for desktop and mobile devices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>


- [Live Demo Link](https://fmanimashaun.github.io/Cryptorank-app/)

<p align="center">
  <img width="1200" src="screenshots/demo.png">
</P>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

- [Optional] Install git bash to your machine to enable you to clone this repo.
- install Visual Studio to be able to host a local live version.
- Install a browser to view the local live version.

To get a local copy up and running follow these simple example steps.
### Setup <a name="setup"></a>

Clone this repository to your desired folder:

```sh
  cd your-desired-folder
  git clone https://github.com/fmanimashaun/cryptorank-hub.git
  open the repo folder `bookstore-cms`
```

### Install <a name="install"></a>

Install this project dependencies with:

```sh
  npm install
```

### Usage <a name="usage"></a>

To run the project, execute the following command:

```sh
  npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000/cryptorank-hub](http://localhost:3000/cryptorank-hub) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Run tests <a name="run-tests"></a>

To run tests to check the lint errors, run the following command:

- To check for CSS lint errors, run the following command:

```sh
  npm run stylelint
```

- To check for JS lint errors, run the following command:

```sh
  npm run eslinter
```

To run unit tests, run the following command:

```sh
  npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Deployment <a name="deployment"></a>

You can deploy this project to github pages by running the following command:

```sh
  npm run deploy

```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
and it is automatically deployed to the github page.

See the section about [github page deployment](https://github.com/gitname/react-gh-pages) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Engr. Animashaun Fisayo**

- [GitHub](https://github.com/fmanimashaun)
- [Twitter](https://twitter.com/fmanimashaun)
- [LinkedIn](https://www.linkedin.com/in/fmanimashaun/)
- [Website](https://fmanimashaun.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] Display a list of all cryptocurrencies and their respective rankings in the global cryptocurrency market.
- [ ] Click on a cryptocurrency to view more detailed information about it.
- [ ] The app enables users to search for specific cryptocurrencies easily.
- [ ] View real-time cryptocurrency data using the app's integration with the CoinGecko API.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project and want to support me, you can give a ⭐️ to this repo!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>


I would like to thank [Microverse](https://www.microverse.org/) for giving me this opportunity to learn and build this project. And also, I would like to thank [Nelson Sakwa](https://www.behance.net/sakwadesignstudio) on Behance for providing the design of this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **How is the ranking of the cryptocurrency exchanges determined?**

  - The ranking of the exchanges is determined based on their trading volume, as reported by the CoinGecko API, which aggregates data from various sources. The app ranks the exchanges by their trading volume over a 24-hour period.

- **Can I search for specific exchanges on the app?**

  - Yes, you can! The app includes a search bar that allows you to search for exchanges by name. Simply type in the name of the exchange you're looking for, and the app will display a list of all exchanges that match your search query.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
