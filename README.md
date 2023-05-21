# wdio-automation-practice
Practice of Automation Project using WebDriverIO

## Run Project 
```bash
npm run wdio
```

## Run Test
```bash 
npx wdio wdio.conf.ts --spec ./test/specs/ContactUs.e2e.ts
```

## Additional packages 
- FakerJS: To mock test data.
- Axios: For HTTP requests

## General TODO
- [ ] Fix faker.address.streetName() without address.street_name definitions is deprecated since v7.0 and will be removed in v8.0. Please use faker.address.street() or provide address.street_name definitions instead.
- [ ] TODOs on Product Details page
- [ ] Add AirBnb, EsLint and Prettier specification
- [ ] Change user.api to return just data, no whole response and use types. [Reference Link](https://levelup.gitconnected.com/enhance-your-http-request-with-axios-and-typescript-f52a6c6c2c8e)
