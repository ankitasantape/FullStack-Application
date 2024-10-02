package com.cruddemo.demo_fullstack_app.repository;

import com.cruddemo.demo_fullstack_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

}
