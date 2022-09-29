const incomingDataValidationService = (name, content, category) => {
    if (name && typeof name === 'string' && name.length &&
        content && typeof content === 'string' && content.length &&
        category && typeof category === 'string' && category.length &&
        (category === 'Idea' || category === 'Quote' || category === 'Task' || category === 'Random Thought'))
        return false;
    return {
        status: 422,
        message: 'Error. Note data are invalid or missing!'
    };
}

module.exports = incomingDataValidationService
