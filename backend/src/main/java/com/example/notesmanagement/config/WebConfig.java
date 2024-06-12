package com.example.notesmanagement.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    public static final String FRONTEND_URL = "http://localhost:3000";
    public static final String PATH_PATTERN = "/**";
    public static final String GET = "GET";
    public static final String POST = "POST";
    public static final String PUT = "PUT";
    public static final String DELETE = "DELETE";
    public static final int MAX_AGE_IN_SECONDS = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping(PATH_PATTERN)
            .allowedOrigins(FRONTEND_URL)
            .allowedMethods(GET, POST, PUT, DELETE)
            .allowCredentials(true).maxAge(MAX_AGE_IN_SECONDS);
    }
}
