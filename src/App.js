import React, { useEffect } from 'react';
import axios from "axios";
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import Log from './Components/Log/Log';
import DrawerCon from './containers/DrawerContainer';
import i18n from "i18next";
import resources from "./localization/localization"
import Edit from './Components/Edit-Account/Edit';

const App = (props) => {
  let storedLang = localStorage.getItem('lang')
  i18n.init({
    resources,
    lng: storedLang,
    fallbackLng: "en",
  });


  let { store } = props
  let userStore = JSON.parse(localStorage.getItem('user'))


  useEffect(() => {
    axios.get("https://5e0dcaf036b80000143db8a4.mockapi.io/links").then((response) => {
      let arr = []
      response.data.forEach(element => {
        arr.push(element)
      });
      store.dispatch({
        type: "Links",
        links: arr
      })
    })
  })



  let handelLng = () => {
    window.location.reload(false)
    storedLang == "ar" ? localStorage.setItem('lang', "en") : localStorage.setItem('lang', "ar")
  }




  let checkUser = !userStore ? <Redirect exact to={"/Log"} component={Log} /> : <Redirect exact to="/" component={DrawerCon} />


  return (
    <div>
      <button onClick={handelLng} className="lang">{storedLang == "ar" ? "En" : "ع"}</button>

      <HashRouter hashType="noslash">
        {/* <Route exact path={["/Log", "/Log/ar", "/Log/en"]} component={!user ? Log : DrawerCon} />
        <Route exact path={["/", "/ar", "/en"]} component={DrawerCon} /> */}

        <Route exact path="/Log" component={() => !userStore ?
          <Log text={i18n} /> :
          <DrawerCon text={i18n.t('welcome')} />} />


        <Route exact path="/" component={() => <DrawerCon text={i18n.t('welcome')} />} />


        <Route exact path="/Account" component={Edit} />
        <Switch>
          {checkUser}
        </Switch>
      </HashRouter>
    </div>
  );
};



export default App;