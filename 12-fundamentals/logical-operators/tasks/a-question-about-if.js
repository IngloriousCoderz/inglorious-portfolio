if (-1 || 0) alert('first');
// truthy || falsy -> alert
if (-1 && 0) alert('second');
// truthy && falsy -> not alert
if (null || -1 && 1) alert('third');
// falsy || truthy && truthy -> falsy || truthy -> alert