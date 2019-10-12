module.exports = userObject => {
    const { email, name } = userObject;

    if (!email || !name) {
        throw new Error('Not all the fields was correctly fulfilled');
    }
};