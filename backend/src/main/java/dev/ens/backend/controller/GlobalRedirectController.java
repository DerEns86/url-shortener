package dev.ens.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GlobalRedirectController {

    @RequestMapping(value = {"/{path:[^\\.]*}"}) 
    public String redirect() {
        return "forward:/index.html"; 
    }
}
