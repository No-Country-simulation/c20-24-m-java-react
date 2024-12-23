package com.example.demo.Auth;

import com.example.demo.Jwt.JwtService;
import com.example.demo.User.Role;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager autenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserProfileService userProfileService;



    public AuthResponse login(LoginRequest request) {

        String username = request.getUsername();
        String password = request.getPassword();

        Optional<User> usernameRepository = userRepository.findByUsername(username);

        if (usernameRepository.isEmpty()) {
            return new AuthResponse(0L,"El usuario no existe.", "N/A", "N/A", "N/A");
        }

        if (!passwordEncoder.matches(password, usernameRepository.orElseThrow().getPassword())) {
            return new AuthResponse(0L, "N/A","La contraseña es incorrecta", "N/A", "N/A");
        }


        autenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,
                                                                                  password));

        UserDetails user = userRepository.findByUsername(username).orElseThrow();
        User userProfile = userRepository.findByUsername(username).orElseThrow(() -> new UserNotFoundExepcion("This Recipe Does Not Exist with that UserName: " + username));
        String token = jwtService.getToken(user);
        return AuthResponse.builder().userId(userRepository.findByUsername(username).orElseThrow().getId())
               .username(userRepository.findByUsername(username).orElseThrow().getUsername())
                .description(userProfile.getUserProfile().getDescription())
                .userImage(userProfile.getUserProfile().getUserImage())
               .token(token).build();

    }

    public AuthResponse register(RegisterRequest request) {

        if(userRepository.existsByUsername(request.getUsername())) {
            return new AuthResponse(0L,"El usuario ya se encuentra registrado", "N/A", "N/A",  "N/A");
        }

        if(userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse(0L, "El email ya se encuentra registrado", "N/A", "N/A", "N/A");
        }

        User user = User.builder()
                        .username(request.getUsername())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .email(request.getEmail())
                        .role(Role.USER)
                        .build();

        userRepository.save(user);
        userProfileService.addUserProfile(user.getId());

        return AuthResponse.builder().token(jwtService.getToken(user)).build();
    }
}
