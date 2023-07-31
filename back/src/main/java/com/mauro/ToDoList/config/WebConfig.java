package com.mauro.ToDoList.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")
                .allowedOrigins("http://localhost:4200")
                .allowedOrigins("http://localhost")
                .allowedOrigins("http://localhost:8080")
                .allowedOrigins("https://transcendent-starburst-8b45b4.netlify.app/")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS");

    }

}