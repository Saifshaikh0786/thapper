const { Schema } = require("zod");

const validate = (Schema) => async (req, res, next) => {
    try {
        const parseBody = await Schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill all the inputs properly";
        const extraDetail = err.errors[0].message;

        const error = {
            status,
            message,
            extraDetail,
        };

        res.status(status).json({ msg: message, detail: extraDetail });
    }
};

module.exports = validate;
