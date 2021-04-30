# Expense Tracker UI

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.


# [Template](https://material-ui.com/getting-started/templates/dashboard/)

# Discovery

## What will this product do?

It is an application for managing expenses between two parties or for calculating the budget of a person.
This is mostly helpful between couples, between I and Dana mainly

## Main features

* Form to add expenses and calculate them
* Form to calculate the budget for an individual
* Login interface via Google
* Settings - minimal, username, password, photo

## User flows

1. If the user isn't logged in he should be redirected to a simple login page where he at first can user the following login methods:
    * google login
    * user and password using the passport.js library on backend 
2. After this step he would need to be redirected to a dashboard page where he/she can vizualize his current budget and last 5 expenses(in a table)
3. The sidebar should contain the following links:
    * dashboard 
    * calculate current budget based on the last expense
    * budget manager
    * transactions between 2 parties
4. If he wants he can vizualize his budget and a history across the year - I can use here a chart library
5. !!! The most important feature is the form which will calculate the budget
    -  the user would need to select the party who made the expenses
    -  the form will have the following fields: 
        * 