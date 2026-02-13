let analytics = {
  orderTimes: []
};

function logOrderTime() {
  analytics.orderTimes.push(Date.now());
}

function orderRatePerMinute() {
  let now = Date.now();
  let lastMinute = analytics.orderTimes.filter(t => now - t < 60000);
  return lastMinute.length;
}
