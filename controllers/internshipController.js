const db = require("../db/dbConnection");
const Internship = db.internships;
const Topic = db.topics;
const InternshipCourse = db.courseInternship;

const InternshipCtrl = {};

InternshipCtrl.addInternship = async (req, res) => {
  try {
    const { internshipId, topicId, description, name } = req.body;

    const newInternship = {
      internshipId: internshipId,
      topicId: topicId,
      description: description,
      name: name
    };

    Internship.create(newInternship)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't add internship to the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while internship registration",
      });
    };
  }
};

InternshipCtrl.updateInternship = async (req, res) => {
  try {
    const { internshipId, topicId, description, name } = req.body;

    const updatedInternship = {
      internshipId: internshipId,
      topicId: topicId,
      description: description,
      name: name,
    };

    Internship.update(updatedInternship, {
      where: {
        internshipId: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't update internship in database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating internship",
      });
    };
  }
};

InternshipCtrl.getInternship = async (req, res) => {
  Internship.findAll({
    where: {
      internshipId: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Couldn't get internship from database",
      });
    });
};

InternshipCtrl.addTopic = async (req, res) => {
  try {
    const { topicId, topic } = req.body;

    const newTopic = {
      topicId: topicId,
      topic: topic,
    };

    Topic.create(newTopic)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't add topic to the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while topic registration",
      });
    };
  }
};

InternshipCtrl.updateTopic = async (req, res) => {
  try {
    const { topicId, topic } = req.body;

    const updatedTopic = {
      topicId: topicId,
      topic: topic,
    };

    Topic.update(updatedTopic, {
      where: {
        topicId: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't update topic in database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating topic",
      });
    };
  }
};

InternshipCtrl.getTopic = async (req, res) => {
  Topic.findAll({
    where: {
      topicId: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Couldn't get topic from database",
      });
    });
};

InternshipCtrl.addInternshipCourse = async (req, res) => {
  try {
    const { courseId, internshipId, hours, date, assistant, groups, type } = req.body;

    const newInternshipCourse = {
      courseId: courseId,
      internshipId: internshipId,
      hours: hours,
      date: date,
      assistant: assistant,
      groups: groups,
      type: type
    };

    console.log(newInternshipCourse)

    InternshipCourse.create(newInternshipCourse)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Couldn't add internship course to the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while internship course registration",
      });
    };
  }
};

InternshipCtrl.updateInternshipCourse = async (req, res) => {
  try {
    const { courseId, internshipId, hours, date, assistant, groups, type } = req.body;

    const updatedInternshipCourse = {
      courseId: courseId,
      internshipId: internshipId,
      hours: hours,
      date: date,
      assistant: assistant,
      groups: groups,
      type: type
    };

    InternshipCourse.update(updatedInternshipCourse, {
      where: {
        internshipId: req.params.internshipId,
        courseId: req.params.courseId,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Couldn't update internship course to the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating internship course",
      });
    };
  }
};

InternshipCtrl.getInternshipCourse = async (req, res) => {
  InternshipCourse.findAll({
    where: {
      internshipId: req.params.internshipId,
      courseId: req.params.courseId,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Couldn't get internshipCourse from database",
      });
    });
};

module.exports = InternshipCtrl;
