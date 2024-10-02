package com.example.demo.service;

import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import com.example.demo.exception.UserNotFoundExepcion;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User findByUsername (String userName){
        return userRepository.findByUsername(userName).orElseThrow(() -> new UserNotFoundExepcion(STR."This Recipe Does Not Exist with that UserName: \{userName}"));
    }

}
