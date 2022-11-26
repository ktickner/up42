Tech Challenge for UP42

## To Run

Use command `yarn start`. This will install dependencies and run the app in `localhost:3000`. \
A browser window should open automatically.

## Packages

### Create React App

Just a super simple way to get started, so I bootstrapped using this.

### Material-UI

Feature rich, themeable UI library. I chose this as I have used it in the past so I am familiar, it's fairly feature complete, and stable.
It is also built on emotion, so it is easy to extend to custom styling where appropriate.

## Other Decisions

## Challenges

### CORS error

_Explain reverse proxy_

## Future Improvements

### Filter on API

The requirements were to filter by `blockPricingStrategy`. If this is a common usecase, it would make far more sense to provide this functionality as a part of the public API, rather than needing to do it on the frontend. If this is already implemented, then the documentation needs to be updated to reflect this. Obviously, there is potential for additional filter strategies in this way.
