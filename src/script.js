class TodoList {
  constructor(el) {
    this.todos = [];
    this.list = el.children.list;
    this.input = el.children[0].children[0];
    el.addEventListener('click', (event) => {
        switch (event.target.dataset.action) {
            case 'status':
                this.changeStatus(event.target.parentElement.dataset.id)
                break;
            case 'delete':
                this.removeTodo(event.target.parentElement.dataset.id)
                break;
            case 'create':
                if (this.input.value.length > 0) {
                    todo1.addTodo(new Task(input.value, false))
                }
                break;
            case 'find':
                if (this.input.value.length > 0) {
                    todo1.findTasks(input.value);
                }
                break;
        }
    });
    }

    addTodo(todo) {
        if (this.checkAvailability(todo.value)) {
            alert('Element is available');
            return;
        }
        this.todos.push(todo);
        this.render(this.todos);
    }
    removeTodo(id) {
      this.todos = this.todos.filter(el => el.id !== id);
        this.render(this.todos);
    }
    getTodos() {
      return this.todos;
   }
   changeStatus(id) {
      let index = this.todos.findIndex((el) => el.id === id);
      this.todos[index].status = !this.todos[index].status;
      this.render(this.todos);
   }
   checkAvailability(value) {
      return this.todos.some(item => item.value === value);
   }
   findTasks(value) {
      this.render(
          this.todos.filter(item => item.value.includes(value))
      );
  }
  render(tasks = []) {
  let lis = '';
  for (let el of tasks) {
    if (!el) {
        return;
    }
    lis += `<li class="${el.status ? 'done' : 'in-progress'}" data-id="${el.id}">${el.value} <button data-action="status">Change status</button><button data-action="delete">Delete</button></li>`;
    }
      this.list.innerHTML = lis;
    }
}

class Task {
  constructor(value, status) {
      this.value = value;
      this.status = status;
      this.id = Math.random().toString(36).substr(2, 9);
  }
}

const todoBlock = document.getElementById('todo');
const todo1 = new TodoList(todoBlock);

todo1.addTodo(new Task('9345', true));
todo1.addTodo(new Task('2945hv', false));
todo1.render(todo1.getTodos());
