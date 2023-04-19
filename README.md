# MoedasConversor

<h1>
    <a href="moedas-conversor.vercel.app"><img src="/MoedasConversor/public/captura-tela.gif"></a>
</h1>

# Summary

- [About](#about)
- [Demo](#-demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [API](#-exchangerate-api)
- [License](#license)
- [Contact](#contact)
 
## About

This project is a currency conversion application. The user types the value that will be attributed to the source currency, chooses this source currency in a drop down menu, chooses the conversion currency in a second drop down menu and clicks on the conversion button. There is another button to toggle the coin order. The exchange rates used to calculate the conversion are obtained by the exchangerate-api API and the consumption of these data is carried out with the Axios library. Another imported component in this project is the react-dropdown for the drop down menu with the list of currencies of several countries.


### :desktop_computer: Desktop design

![image](https://user-images.githubusercontent.com/4975360/233080243-bf0af97f-9bdd-4bbb-9365-2c5c83646fcd.png)

### :iphone: Tablets design

![image](https://user-images.githubusercontent.com/4975360/233080429-fa3731b1-1e8c-49ef-b646-e08c379517ce.png)

### :iphone: Mobile design

<img src="https://user-images.githubusercontent.com/4975360/233090787-ad6d05fe-3d5a-47ea-8805-aaabfe10b18a.png" style="width: 50%;">


### [🌐 Demo](moedas-conversor.vercel.app)

### Technologies

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev/guide/)
- [Axios](https://www.npmjs.com/package/react-dropdown)
- [react-dropdown](https://www.npmjs.com/package/react-dropdown)
- [React Icons](https://react-icons.github.io/react-icons/)

## Setup

```bash
git clone https://github.com/edpadua/MoedasConversor

cd moedasconversor
npm i
npm run dev
```

## [🚀 exchangerate-api](https://app.exchangerate-api.com/)

Get the API Key value from the website and assign it to the environment variable VITE_API_KEY in the .env file


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Eduardo de Pádua: ed.padua@gmail.com

Project Link: [https://github.com/edpadua/MoedasConversor/](https://github.com/edpadua/MoedasConversor) 
