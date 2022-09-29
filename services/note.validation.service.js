const noteValidation = (name, content, category) => {
    if (name && typeof name === 'string' && name.length &&
        content && typeof content === 'string' && content.length &&
        category && typeof category === 'string' && category.length &&
        (category === 'Idea' || category === 'Quote' || category === 'Task' || category === 'Random Thought'))
        return true;
    return false;
}

module.exports = noteValidation
