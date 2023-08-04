package com.mauro.ToDoList.Service;

import com.mauro.ToDoList.Model.Task;
import com.mauro.ToDoList.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    HashMap<String, Object> response = new HashMap<>();

    @Autowired
    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    //Muestra todas las tareas
    public List<Task> getTasks(){
        return this.taskRepository.findAll();
    }

    //Muesta las tareas activas
    public List<Task> getActiveTasks(){
        //Obtengo todas las tareas
        List<Task> tasks = this.taskRepository.findAll();

        // Filtrar los objetos con miPropiedadBooleana igual a true
        List<Task> activeTasks = tasks.stream()
                .filter(objeto -> !objeto.isCompleted()) // Selecciona solo aquellos objetos con miPropiedadBooleana igual a true
                .collect(Collectors.toList());
        return activeTasks;
    }

    public List<Task> getCompletedTasks(){
        //Obtengo todas las tareas
        List<Task> tasks = this.taskRepository.findAll();

        // Filtrar los objetos con miPropiedadBooleana igual a true
        List<Task> activeTasks = tasks.stream()
                .filter(objeto -> objeto.isCompleted()) // Selecciona solo aquellos objetos con miPropiedadBooleana igual a true
                .collect(Collectors.toList());
        return activeTasks;
    }

    //Crea una tarea nueva
    public ResponseEntity<Object> newTask(Task task) {
        this.taskRepository.save(task);
        response.put("success", true);
        response.put("message:", "Tarea creada");
        return new ResponseEntity<>(
                HttpStatus.CREATED
        );
    }

    //Actualiza una tarea y si esta completa o no
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
            taskRepository.save(updatedTask);
        }
        return "Tarea actualizada satisfactoriamente";
    }

    //Obtener tarea por id
    public Boolean getTaskById(long id){
        Optional<Task> taskOptional = this.taskRepository.findById(id);
        return taskOptional.isPresent();
    }

    //Eliminar tarea
    public String deletedTask(long id) {
        Task deletedTask = taskRepository.findById(id).get();
        taskRepository.delete(deletedTask);
        return "Tarea eliminada";
    }
}
