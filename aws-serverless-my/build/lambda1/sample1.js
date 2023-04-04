"use strict";
exports.handler = async (event) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
//# sourceMappingURL=sample1.js.map