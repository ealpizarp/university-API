const db = require("../db/dbConnection");
const Course = db.courses;
const Professor = db.professors;

const courseCtrl = {};

courseCtrl.addCourse = async (req, res) => {
  try {
    const { courseId, subject, year, career, weeklyHours, professorId } =
      req.body;

    const newCourse = {
      courseId: courseId,
      subject: subject,
      year: year,
      career: career,
      weeklyHours: weeklyHours,
      professorId: professorId,
    };

    Course.create(newCourse)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't add course to the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while course registration",
      });
    };
  }
};

courseCtrl.updateCourse = async (req, res) => {
  try {
    const { courseId, subject, year, career, weeklyHours, professorId } =
      req.body;

    const updatedCourse = {
      courseId: courseId,
      subject: subject,
      year: year,
      career: career,
      weeklyHours: weeklyHours,
      professorId: professorId,
    };

    Course.update(updatedCourse, {
      where: {
        courseId: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't update course in the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating course",
      });
    };
  }
};

courseCtrl.getCourse = async (req, res) => {
  Course.findAll({
    where: {
      courseId: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Couldn't get course from database",
      });
    });
};

courseCtrl.addProfessor = async (req, res) => {
  try {
    const { professorId, professorLastName, professorName } = req.body;

    const newProfessor = {
      professorId: professorId,
      professorLastName: professorLastName,
      professorName: professorName,
    };

    Professor.create(newProfessor)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't add professor to the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while professor registration",
      });
    };
  }
};

courseCtrl.updateProfessor = async (req, res) => {
  try {
    const { professorId, professorLastName, professorName } = req.body;

    const updatedProfessor = {
      professorId: professorId,
      professorLastName: professorLastName,
      professorName: professorName,
    };

    Professor.update(updatedProfessor, {
      where: {
        professorId: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Couldn't update professor in the database",
        });
      });
  } catch {
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating professor",
      });
    };
  }
};

courseCtrl.getProfessor = async (req, res) => {
  Professor.findAll({
    where: {
      professorId: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Couldn't get professor from database",
      });
    });
};

module.exports = courseCtrl;
