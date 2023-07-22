package com.mauro.ToDoList.Service;

import com.mauro.ToDoList.Model.Task;
import com.mauro.ToDoList.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks(){
        return this.taskRepository.findAll();
    }

    public String newTask(Task task) {
        this.taskRepository.save(task);
        return "Tarea creada satisfactoriamente";
    }

    public String updatedTask(long id, Task task) {
        Boolean isExist = this.getTaskById(id);
        Task updatedTask = taskRepository.findById(id).get();
        if(isExist){
            if(task.getName() != null){
                updatedTask.setName(task.getName());
            }
            if(task.getDescription() != null){
                updatedTask.setDescription(task.getDescription());
            }
            if(task.isCompleted() != updatedTask.isCompleted()){
                updatedTask.setCompleted(task.isCompleted());
            }
        }
    }

    public Boolean getTaskById(long id){
        Optional<Task> taskOptional = this.taskRepository.findById(id);
        return taskOptional.isPresent();
    }
}
