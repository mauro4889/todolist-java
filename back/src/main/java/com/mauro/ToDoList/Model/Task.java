package com.mauro.ToDoList.Model;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private boolean isCompleted = false;
    private LocalDate dateCreated;

    public Task() {
    }

    public Task(Long id, String name, String description, boolean isCompleted, LocalDate dateCreated) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isCompleted = isCompleted;
        this.dateCreated = dateCreated;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }
}
