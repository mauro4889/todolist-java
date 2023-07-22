package com.mauro.ToDoList.Controller;

import com.mauro.ToDoList.Model.Task;
import com.mauro.ToDoList.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/tasks")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getTasks(){
        return this.taskService.getTasks();
    }

    @PostMapping
    public String createTask(@RequestBody Task task){
        return this.taskService.newTask(task);
    }

    @PutMapping(value = "/id")
    public String updateTask(@PathVariable long id, @RequestBody Task task){
        return this.taskService.updatedTask(id, task);
    }
}
