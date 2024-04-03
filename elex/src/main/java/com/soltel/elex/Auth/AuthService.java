package com.soltel.elex.Auth;

import org.springframework.stereotype.Service;

/* import com.soltel.elex.Jwt.JwtService;
import com.soltel.elex.User.UserRepository; */

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    /* private final UserRepository userRepository;
    private final JwtService jwtService; */

    public AuthResponse login(LoginRequest request) {
        return null;
    }

}
