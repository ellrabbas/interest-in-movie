const moongose = require('mongoose');

const categorySchema = new moongose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: 'Categories'
    }
);

module.exports = moongose.model('Category', categorySchema);