const organizeWeather = (weatherData) => {
  const { hourly } = weatherData;
  const { time, temperature_2m } = hourly;

  const days = {};

  let oldTemperature;

  time.forEach((hour, index) => {
    const now = new Date(hour);
    const day = now.getDate();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedHour = `${hours}:${minutes}`;

    const formattedTemperature = temperature_2m[index].toFixed(1);

    let up;
    if (oldTemperature !== undefined) {
      if (oldTemperature > temperature_2m[index]) {
        up = "down";
      } else if (oldTemperature < temperature_2m[index]) {
        up = "up";
      } else {
        up = "same";
      }
    }

    oldTemperature = temperature_2m[index];

    const hourAndTemp = {
      hour: formattedHour,
      temp: formattedTemperature,
      up: up || "no",
    };

    if (!days[day]) {
      days[day] = [];
    }

    days[day].push(hourAndTemp);
  });

  return { days, time, temperature_2m };
};

export default organizeWeather;
