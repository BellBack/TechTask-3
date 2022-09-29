const archiveOperationCheckerService = (archive) => {
    if (typeof archive === 'boolean')
        return false;
    return {
        status: 422,
        message: "Error. Inputted data invalid!"
    };
}

module.exports = archiveOperationCheckerService

