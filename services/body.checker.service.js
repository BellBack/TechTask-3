const bodyCheckerService = (body) => {
    if (body)
        return false;
    return {
        status:400,
        message:"Error. Note's data not found!"
    };
}

module.exports = bodyCheckerService

