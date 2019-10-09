module.exports = userObject => {
    const { email, name, password } = userObject;

    if (!email && !name && !password) {
        throw new Error('Not all the fields was correctly fulfilled');
    }
};