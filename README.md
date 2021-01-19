# Automation test using Gauge & puppeteer

Automate login test flow and using **github actions** for CI pipeline.  
this project requires the `getGauge` and `puppeteer` modules. The assertion is performed using native nodeJs module `assert`.

## Installation

```
npm install -g @getgauge@cli
npm install puppeteer
```

## Usage

Tests in gauge are run using the `.spec` file.


Install the dependency modules using the command

```
npm run start
```


Run the test using the command

```
npm run test
```
