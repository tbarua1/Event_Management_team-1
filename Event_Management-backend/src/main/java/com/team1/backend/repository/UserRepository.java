package com.team1.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import module.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
