### Weatherly App: Your Ultimate Weather Guide

## Overview

Weatherly is a comprehensive web application designed to aggregate weather information from any city around the globe. Whether planning your next big trip or just daydreaming about far-off places, Weatherly has you covered with comprehensive weather stats.


## API Reference
Weatherly uses the **Current weather data API** from https://api.openweathermap.org to query weather data from any city

#### How to make an API call

```http
 https://api.openweathermap.org/data/2.5/weather?q=city&appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key | 
`city` | `string` | **Required** |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`




## Run Locally

Clone the project

```bash
  git clone https://github.com/honorekalisa/api-assignment.git
```

Go to the project directory

```bash
  cd api-assignment
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```


## Authors

- [@Kalisa Honore](https://github.com/honorekalisa)
