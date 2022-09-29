const updateStatistics = (statistics, noteCategory, isNoteArchived) => {
    let index = statistics.findIndex(s => s.category === noteCategory);

    if (index > -1) {
        statistics[index].total++;
        if (isNoteArchived)
            statistics[index].archived++;
    } else
        statistics.push({
            category: noteCategory,
            total: 1,
            archived: (isNoteArchived)? 1 : 0
        });
}

module.exports = updateStatistics
