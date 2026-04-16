const activitySort = (by, data) => {
    if (by === 'type') {
        const filtered = [...data].sort((a, b) => a.type.localeCompare(b.type));
        return filtered;
    } else if (by === 'type2') {
        const filtered = [...data].sort((a, b) => b.type.localeCompare(a.type));
        return filtered;
    }
}

export { activitySort };