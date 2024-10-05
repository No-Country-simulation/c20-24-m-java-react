package com.example.demo.service;

import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import com.example.demo.dto.UserDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.mapper.UserMapper1;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper1 userMapper1;

    public UserDto findByUsername (String userName){
        User user = userRepository.findByUsername(userName).orElseThrow(() -> new UserNotFoundExepcion("This Recipe Does Not Exist with that UserName: " + userName));
        return userMapper1.toUserDto(user);
    }

}
