package dev.ens.backend.service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.ens.backend.model.Url;
import dev.ens.backend.repository.UrlRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UrlService {

    private final UrlRepository urlRepository;

    public List<Url> getAllUrls() {
        return urlRepository.findAll();
    }

    public Url saveUrl(Url url) {
        url.setShortUrlPath(generateUUID());
        url.setShortUrl(url.getHost() + "/" + url.getShortUrlPath());
        url.setActive(true);
        url.setCreatedAt(LocalDate.now());
        return urlRepository.save(url);
    }

    private String generateUUID(){
        return UUID.randomUUID().toString().substring(0, 6);
    }

    public String getOriginalUrl(String shortUrlPath){
        Url url = urlRepository.findByShortUrlPath(shortUrlPath);
        return url.getOriginalUrl();
    }

}
