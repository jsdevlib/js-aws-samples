exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event, null, 2)}`);

  const method = event.requestContext.http.method;
  const body = event.body;

  const { num1, num2, op } = JSON.parse(body);

  let total = 0;

  try {
    if (typeof num1 === 'string' || typeof num2 === 'string') throw new Error('Value for enums cannot be string');
    total = num1 + num2;
  } catch (error) {
    throw new Error(Error);
  }

  console.log(`METHOD: ${method} - BODY: ${body}`);

  return {
    statusCode: 200,
    body: JSON.stringify(`Total number is: ${total}`),
  };
};
