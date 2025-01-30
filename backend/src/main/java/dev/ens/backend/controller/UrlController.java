package dev.ens.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ens.backend.model.Url;
import dev.ens.backend.service.UrlService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;





@RestController
@RequestMapping("api/url")
@RequiredArgsConstructor
public class UrlController {

    private final UrlService urlService;

    @GetMapping()
    public ResponseEntity<List<Url>>getAll(){
        List<Url> urls = urlService.getAllUrls();
        return ResponseEntity.ok(urls);
    }

    @PostMapping
    public ResponseEntity<Url> createUrl(@RequestBody Url url){
        Url createdUrl = urlService.saveUrl(url);
        return ResponseEntity.ok(createdUrl);
    }
    
    // @GetMapping("/{shortUrlPath}")
    //  public ResponseEntity<Void> redirectToOriginalUrl(@PathVariable String shortUrlPath) {
    //     String originalUrl = urlService.getOriginalUrl(shortUrlPath);
    //     if (originalUrl != null) {
            
    //         HttpHeaders headers = new HttpHeaders();
    //         headers.setLocation(URI.create(originalUrl));
    //         return new ResponseEntity<>(headers, HttpStatus.FOUND);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }
    
    @GetMapping("/{shortUrlPath}")
    public ResponseEntity<String> getOriginalUrl(@PathVariable String shortUrlPath) {
        String originalUrl = urlService.getOriginalUrl(shortUrlPath);
        return ResponseEntity.ok(originalUrl);
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Url>> getAllUrlsByUserId(@PathVariable String userId){
        List<Url> urls = urlService.getAllUrlsByUserId(userId);
        return ResponseEntity.ok(urls);
    }
    
}
