const connectDatabase = require("../config/database");

const TaskModels = {
  //* Get all tasks with id user when login system
  getAllTasks: function (user_id, callback) {
    return connectDatabase.query(
      "select * from tasks where user_id=?",
      [user_id],
      callback,
    );
  },

  //* Add new tasks to system
  addNewTask: function (task, callback) {
    return connectDatabase.query(
      "insert into tasks(title,content,timeComplete,status) values(?,?,?,?)",
      [task.title, task.content, task.timeComplete, task.status],
      callback,
    );
  },

  //* Remove task from system
  removeTask: function (idTask, callback) {
    return connectDatabase.query(
      "delete from tasks where id=?",
      [idTask],
      callback,
    );
  },

  //*Update task to system
  updateTask: function (idTask, task, callback) {
    return connectDatabase.query(
      "update tasks set title =?,content=?,timeComplete=?,status=? where id=?",
      [task.title, task.content, task.timeComplete, task.status, idTask],
      callback,
    );
  },
};
module.exports = TaskModels;
