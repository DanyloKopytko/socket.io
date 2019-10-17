module.exports = (user_id, userIdFromToken) => {
    if (+user_id !== userIdFromToken) {
        throw new Error('This is not your page, invader');
    }
};