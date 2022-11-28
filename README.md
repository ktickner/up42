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

### Context and useReducer

Using Context for managing credits and the shopping cart allows me to manage this state app wide without needing complex event<>state loops across components.

In the case of userContext this is definitely overengineering, however taking into account the context of the app and how this would work in the real world, I could reasonably expect the complexity of this state to grow a lot over time. Therefore, it makes sense to set up the architecture to handle this complexity now.

## Challenges

### CORS error

This is not a problem I have had to solve previously. The best (only) solution I could find which doesn't involve changes on the server was to pipe the request through a proxy request on another server. The CORS error is thrown by the browser, so it does not occur on server to server requests. The proxy server can then apply the relevant cross-origin headers to it's response, avoiding the errors altogether.

I used a third party solution for this, as rolling my own was not reasonable for me in the time frame. To be honest, this seems like it could be a security risk. Regardless, the correct solution to this problem would be to change the server to provide the required headers in the first place (given that we have control of the server to begin with). Another drawback of the third party solution is that it is rate limited due to being publicly available, which can cause errors on the client.

## Future Improvements

### Filter on API

The requirements were to filter by `blockPricingStrategy`. If this is a common usecase, it would make far more sense to provide this functionality as a part of the public API, rather than needing to do it on the frontend. If this is already implemented, then the documentation needs to be updated to reflect this. Obviously, there is potential for additional filter strategies in this way.

### Number indicator on cart

Currently there is no indication that the shopping cart includes any items. This could be improved as an easy to implement UX improvement.

### Tests

I realise I asked explicitly if this was a requirement. Unfortunately, as I started to implement testing I hit a bit of a wall and the deadline has come so instead I will write a bit about it. Although I have some experience with component testing (using React testing library, which would be my go to), I have not had much reason to look into testing components which are driven by context, using reducer actions. \
I have found very little in the way of documentation or guides on how to test things like, if a reducer action has been called, how to effectively mock these, or forcing a reducer action to ensure the component responds correctly to the changing state. \
I think one workaround for this is to convert some components to be more `dumb`, meaning driven by props rather than the context itself. This kind of defeats the purpose of having the context in the first place, though, and I still would not be able to effectively test that reducer actions are being fired at the right time. \
I would love to recieve any recommendations for where I could go to learn to solve these problems (more effectively than experimentation, which would potentially take quite a while), or real world examples, as I would like to know how to solve this problem in the future.
