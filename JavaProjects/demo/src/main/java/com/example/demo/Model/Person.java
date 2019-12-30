package com.example.demo.service;

public class Person {

    private final UUID id;
    private final String name;

    public Person(UUID id, String name){
        this.id = id;
        this.name = name;
    }

    public getId(){
        return id;
    }

    public getName(){
        return name;
    }
}
