package com.melihselamiurkmez.jwtsec.authenticate;

import com.melihselamiurkmez.jwtsec.DTO.AuthenticationRequest;
import com.melihselamiurkmez.jwtsec.DTO.AuthenticationResponse;
import com.melihselamiurkmez.jwtsec.DTO.RegisterRequest;
import com.melihselamiurkmez.jwtsec.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(authenticationService.register(request));




    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){

        return ResponseEntity.ok(authenticationService.authenticate(request));



    }



}
