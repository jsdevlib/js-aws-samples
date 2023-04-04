exports.handler = async (event, context) => {
  console.log('EVENT: \n' + JSON.stringify(event, null, 2));
  console.log('CONTEXT-Remaining Time: \n' + context.getRemainingTimeInMillis());
  console.log('CONTEXT-Function Name: \n' + context.functionName);

  console.info('Printing INFO log');
  console.warn('Printing WARNING log');

  let total = 0;

  try {
    if (typeof event.num1 === 'string' || typeof event.num2 === 'string')
      throw new Error('Value for enums cannot be string');
    total = event.num1 + event.num2;
  } catch (error) {
    throw new Error(Error);
  }

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Total number is: ${total}`),
  };
  return response;
};
