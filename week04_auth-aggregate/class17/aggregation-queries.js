db.getCollection('restaurants').aggregate([
  {
    $group: {
      _id: {
        borough: '$borough',
        cuisine: '$cuisine'
      },
      count: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      _id: '$_id.borough',
      cuisines: {
        cuisine: '$_id.cuisine',
        count: '$count'
      }
    }
  },
  {
    $group: {
      _id: '$_id',
      cuisines: {
        $push: '$cuisines'
      }
    }
  }
]);

db.getCollection('restaurants').aggregate([
  {
    $match: {
      _id: ObjectId('5982367d800831e9207dc042')
    }
  },
  {
    $unwind: '$grades'
  },
  {
    $group: {
      _id: '$_id',
      name: {
        $first: '$name'
      },
      borough: {
        $first: '$borough'
      },
      min: {
        $min: '$grades.score'
      },
      max: {
        $max: '$grades.score'
      },
      avg: {
        $avg: '$grades.score'
      }
    }
  }
]);

db.getCollection('restaurants').aggregate([
  { $match: { _id: ObjectId('5982367d800831e9207dc042') } },
  { $unwind: '$grades' },
  {
    $group: {
      _id: '$_id',
      name: { $first: '$name' },
      borough: { $first: '$borough' },
      min: { $min: '$grades.score' },
      max: { $max: '$grades.score' },
      avg: { $avg: '$grades.score' }
    }
  },
  { $sort: { avg: -1 } },
  { $limit: 10 }
]);
// put sample size at the top so you don't have to do the math on all the records
db.getCollection('restaurants').aggregate([
  { $sample: { size: 10 } },
  { $match: { _id: ObjectId('5982367d800831e9207dc042') } },
  { $unwind: '$grades' },
  {
    $group: {
      _id: '$_id',
      name: { $first: '$name' },
      borough: { $first: '$borough' },
      min: { $min: '$grades.score' },
      max: { $max: '$grades.score' },
      avg: { $avg: '$grades.score' }
    }
  }
]);
