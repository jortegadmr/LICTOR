package com.soltel.elex.Auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
/* import org.springframework.security.crypto.password.PasswordEncoder; */
import org.springframework.stereotype.Service;

import com.soltel.elex.Jwt.JwtService;
import com.soltel.elex.User.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    /* private final PasswordEncoder passwordEncoder; */
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToke(user);
        return AuthResponse.builder()
        .token(token)
        .build();
    }

}
