
### Nafn og netfang höfunda

- Bragi Arnarson
    - (bra26@hi.is)

## Lýsing á Verkefni

Verkefnið er endurbætt útgáfa af vefsíðunni smlileyco.in

Á endurbættu vefsíðunni er ein forsíða og 5 undirsíður.

Undiríðurnar eru
- Introduction (Útskýrir betur hvað SmileyCoin er)
- Get started (Útskýrir nokkrar leiðir hvernig maður eignast SmileyCoin)
- Wallets (Velur þér veski)
- Coin and mining information (Meiri upplýsingar um myntina og uppgröftinn)
- Details (Meiri smáatriði um smileycoin)

Á forsíðunni er haus sem inniheldur linka yfir á hinar undirsíðurnar og einnig "live price tracker" sem fær beint verð SmileyCoin. Við útfærðum það með hjálp þessarar síðu: https://min-api.cryptocompare.com/
Einnig eru helstu upplýsingar um SmileyCoin á forsíðunni og við settum einnig Twitter news feedið frá @smileyCoinNews á forsíðuna.

[Smelltu hér ](https://smileycoin.herokuapp.com/#/) til að komast á slóð verkefnisins keyrandi á vef.  

Við notuðum React javascript libraryið til þess að byggja upp síðuna

## Deploying to Github pages

The site is hosted via. Github pages from the ``gh-pages`` branch in this repository.
To update the repository, run the following:

```
npm run build
npm run deploy
```

#Structure
```
project
│   README.md
│       
│
└─── src
    │   
    │
    └─── components (mainly main page)
    |  │   index-about
    |  │   index-coin
    |  │   ...
    |  
    └─── routes (pages)
       |  about
       |  coininfo
       |  getstarted
       |  home
       |  wallets
```
Inside every page component is a js file, containing html code and necessary scripts,
and also a stylesheet (scss file).

# How to run the project

## Download NodeJS

https://nodejs.org/en/

Confirm the installation by typing in terminal
`node -v` and `npm -v`.

## Install the dependencies
Navigate to the project folder and type in
`npm install` and it should install all the necessary packages.

## React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# One way how to run the (static) project for production use on server

## 1. Build the project with npm run build

It builds the app and should make a build folder. You can do it on your device and then move the
build folder to the server.

### 2. Install pm2 globally
`sudo npm install -g pm2`

### 3. If it's not there, add this deploy script to your scripts in the package.json file

`deploy": "pm2 start ./server.sh --name yourAppName",`

### 4. Then in the same directory as the package.json, create an executable server.sh:
```
echo "Serving yourAppName!"
serve -s build #(serve -s build -l 80) for deploying on port 80
```

Don't forget to make server.sh an executable by running:

`chmod +x server.sh`

### 5. Deploy your app by using: (might have to use sudo)
`npm run deploy`

### 6. To make the server start on boot read: http://pm2.keymetrics.io/docs/usage/startup/


# Other ways to set it up
- https://create-react-app.dev/docs/deployment
