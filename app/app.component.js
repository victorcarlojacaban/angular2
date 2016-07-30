(function(app) {
  app.TasksComponent = ng.core
      .Component({
          selector: 'my-app',
          templateUrl: 'app/form.template.html'
      })
      .Class({
          constructor: function () {
              this.newTask = '';
              this.tasks = [];
          },
          addTask: function(event) {
              taskObj = {
                  newTask: this.newTask,
                  done: false
              }
              this.tasks.push(taskObj);
              this.newTask = '';
              event.preventDefault();
          },
          deleteTask: function (index) {
              this.tasks.splice(index, 1);
          }
      })
})(window.app || (window.app = {}));