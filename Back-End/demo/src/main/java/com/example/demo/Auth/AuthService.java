package com.example.demo.Auth;

import com.example.demo.Jwt.JwtService;
import com.example.demo.User.Role;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager autenticationManager;
    private final PasswordEncoder passwordEncoder;



    public AuthResponse login(LoginRequest request) {
        autenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),
                                                                                  request.getPassword()));

        UserDetails user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder().token(token).build();

    }

    public AuthResponse register(RegisterRequest request) {

        User user = User.builder()
                        .username(request.getUsername())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .email(request.getEmail())
                        .role(Role.USER)
                        .build();


        userRepository.save(user);

        return AuthResponse.builder().token(jwtService.getToken(user)).build();
    }
}
