const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    borough: {
        type: String,
        required: true
    }
    // rest of data...
});

schema.static('getTop', function ({ top = 100 } = {}) {

    return this.aggregate([
        { $unwind: '$grades' },
        { $group: {
            _id: '$_id',
            name: { $first: '$name' },
            borough: { $first: '$borough' },
            min: { $min: '$grades.score' },
            max: { $max: '$grades.score' },
            avg: { $avg: '$grades.score' }
        }},
        { $sort: { avg: -1 }},
        { $limit: +top }
    ]);
});

module.exports = mongoose.model('Restaurant', schema);

// schema.statics.getBest = function(top, borough) {
//     top = Math.min(top || 10, 100);

//     const steps = [
//         { $unwind: '$grades' },
//         { $match: { 'grades.grade': { $ne: 'Not Yet Graded' } } },
//         { $group: {
//             _id: '$_id',
//             name: { $first: '$name' },
//             count_of_reviews: { $sum: 1 },
//             avg_review: { $avg: '$grades.score' }
//         }},
//         { $sort: { avg_review: -1 } },
//         { $limit: top }
//     ];

//     const pipeline = borough ? [{ $match: { borough }}].concat(steps) : steps;

//     return this.aggregate(pipeline);

// };
