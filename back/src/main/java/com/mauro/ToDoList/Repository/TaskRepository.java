package com.mauro.ToDoList.Repository;

import com.mauro.ToDoList.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository  extends JpaRepository<Task, Long> {
}
