package com.mauro.ToDoList.Service;

import com.mauro.ToDoList.Model.Task;
import com.mauro.ToDoList.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
